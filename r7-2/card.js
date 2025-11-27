const product = {
    name: "Patrick",
    price: 39,
    count: 1,
    discount: 15, // в процентах
    inStock: true,
    pickSize: false,
    data_img: {
        main: "./img/patrick/main.jpg",
        img2: "./img/patrick/2.jpg",
        img3: "./img/patrick/3.jpg",
        img4: "./img/patrick/4.jpg"
    },
    data_size: {
        S: false,
        M: false,
        L: false,
        XL: false
    },
    pickColor: false,
    data_color: {
        red: false,
        blue: false,
        green: false
    }
};

document.getElementById("name").innerHTML = product.name;

function updateButton() {
    if (!product.inStock) {
        btnBuy.classList.add('btn-disabled');
        btnBuy.disabled = true;
        btnBuy.textContent = "Нет в наличии";
    } else {
        btnBuy.classList.remove('btn-disabled');
        btnBuy.disabled = false;
        btnBuy.textContent = "Купить";
    }
}

function pickSize(size) {
    for (let key in product.data_size) {
        product.data_size[key] = false;
        document.querySelector(`#btnSize${key}`).classList.remove("btnSize");
    }

    product.data_size[size] = true;
    document.querySelector(`#btnSize${size}`).classList.add("btnSize");

    product.pickSize = true;
}

function pickColor(color) {
    for (let key in product.data_color) {
        product.data_color[key] = false;
    }
    product.data_color[color] = true;
    product.pickColor = true;
};

// images

function updateCarousel() {
    const offset = -currentIndex * itemWidth;
    previewContainer.style.transform = `translateX(${offset}px)`;

    if (currentIndex === productImages.length - visibleCount) {
        btnNext.disabled = true;
    } else {
        btnNext.disabled = false;
    }
    if (currentIndex === 0) {
        btnPrev.disabled = true;
    } else {
        btnPrev.disabled = false;
    }
};

let currentIndex = 0;
const visibleCount = 3;
const itemWidth = 68;

const productImages = [
    product.data_img.main,
    product.data_img.img2,
    product.data_img.img3,
    product.data_img.img4
];
const imageMain = document.createElement('img');
imageMain.src = './img/patrick/main.jpg';
document.getElementById('image-container').append(imageMain);
imageMain.classList.add('image-card');

// switch img button
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');
btnPrev.disabled = true;

btnNext.addEventListener('click', () => {{
    if (currentIndex < productImages.length - visibleCount) {
        currentIndex++;
        // btnNext.style.display = `none`;
        // btnPrev.style.display = `block`;
        updateCarousel();
    }
}});

btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        // btnNext.style.display = `block`;
        // btnPrev.style.display = `none`;
        updateCarousel();
    }
});

const previewContainer = document.querySelector('.preview-container');

productImages.forEach((src, index) => {

    const img = document.createElement('img');
    img.src = src;
    img.classList.add('preview-image');

    if (index === 0) img.classList.add('preview-selected');

    img.addEventListener('click', () => {
        productImages.forEach((_, i) => {
            const img = previewContainer.children[i];
            if (img.classList.contains('preview-selected')) {
                const img = previewContainer.children[i];
                if (!img) return;
                img.classList.remove('preview-selected');
            }
        });
        imageMain.src = src;
        img.classList.add('preview-selected');
    });
    previewContainer.appendChild(img);
});

// buy button
const callback = () => {
    if (product.pickSize == true) {
        if (product.pickColor == true) {
            product.count -= 1;
            if (product.count == 0) {
                product.inStock = false
            }
            console.log('Товар "' + product.name + '" добавлен в корзину');
            alert('Товар "' + product.name + '" добавлен в корзину');
            updateButton();
            updateCount();
        } else {
            alert('Выберите цвет!')
        }
    } else {
        alert('Выберите размер!')
    }
};

// button plus minus
function updateCount() {
    document.getElementById("count").innerHTML = product.count;
    console.log('Текущее количество товаров: ' + product.count)
}
function updatePrice() {
    let priceTotal = product.price * product.count;
    document.getElementById("price").innerHTML = priceTotal;
    const discountPrice = priceTotal - (priceTotal * (product.discount / 100))
    document.getElementById("discountPrice").innerHTML = discountPrice.toFixed(2);
}

function updateButtonCount() {
    if (product.count > 1) {
        btnMinus.disabled = false;
    } else {
        btnMinus.disabled = true;
    }
    if (product.count < 10) {
        btnPlus.disabled = false;
    } else {
        btnPlus.disabled = true;
    }

}

document.getElementById("count").innerHTML = product.count;
let priceTotal = product.price * product.count;
document.getElementById("price").innerHTML = priceTotal;
document.getElementById("discount").innerHTML = `Скидка ${product.discount}%`;

const discountPrice = priceTotal - (priceTotal * (product.discount / 100))
document.getElementById("discountPrice").innerHTML = discountPrice.toFixed(2);



const plus = () => {
    if (product.count < 10) {
        if (product.inStock == false) { 
            product.inStock = true;
            updateButton()
        }
        product.count += 1;
        updatePrice();
        updateCount();
        updateButtonCount()
    }
};

const minus = () => {
    if (product.count > 1) {
        product.count -= 1;
        updatePrice();
        updateCount();
        updateButtonCount()
        if (product.count == 0) {
            product.inStock = false
            updateButton()
        }
    } 
};

// Fullscreen viewer
const viewer = document.querySelector('#viewer');

const btnViewerClose = document.querySelector('#btnViewerClose');
btnViewerClose.addEventListener('click', () => {
    viewer.classList.add('hidden');
});

imageMain.addEventListener('click', () => {
    viewer.classList.remove('hidden');
});


const btnPlus = document.querySelector('#btnPlus');
btnPlus.addEventListener('click', plus);

const btnMinus = document.querySelector('#btnMinus');
btnMinus.addEventListener('click', minus);
btnMinus.disabled = true;   
// button buy
const btnBuy = document.querySelector('#btnBuy');
btnBuy.addEventListener('click', callback);

// button size
const btnSizeS = document.querySelector('#btnSizeS');
btnSizeS.addEventListener('click', () => pickSize('S'));

const btnSizeM = document.querySelector('#btnSizeM');
btnSizeM.addEventListener('click', () => pickSize('M'));

const btnSizeL = document.querySelector('#btnSizeL');
btnSizeL.addEventListener('click', () => pickSize('L'));

const btnSizeXL = document.querySelector('#btnSizeXL');
btnSizeXL.addEventListener('click', () => pickSize('XL'));

const iptColorRed = document.querySelector('#iptColorRed');
iptColorRed.addEventListener('click', () => pickColor('red'));

const iptColorBlue = document.querySelector('#iptColorBlue');
iptColorBlue.addEventListener('click', () => pickColor('blue'));

const iptColorGreen = document.querySelector('#iptColorGreen');
iptColorGreen.addEventListener('click', () => pickColor('green'));