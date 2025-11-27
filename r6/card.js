const product = {
    name: "Patrick",
    price: 39,
    count: 10,
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
document.getElementById("count").innerHTML = product.count;
document.getElementById("price").innerHTML = product.price;

const discountPrice = product.price - (product.price * (product.discount / 100))
document.getElementById("discountPrice").innerHTML = discountPrice.toFixed(2);

function updateCount() {
    document.getElementById("count").innerHTML = product.count;
    console.log('Текущее количество товаров: ' + product.count)
}

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

// plus minus
const plus = () => {
    if (product.inStock == false) { 
        product.inStock = true;
        updateButton()
    }
    product.count += 1;
    updateCount();
    
};

const minus = () => {
    if (product.count > 0) {
        product.count -= 1;
        updateCount();
        if (product.count == 0) {
            product.inStock = false
            updateButton()
        }
    } else {
        alert('Количество товаров не может быть меньше 0!')
    }
};


// images
const imgMain = document.querySelector('#patrick');


// button plus minus
const btnPlus = document.querySelector('#btnPlus');
btnPlus.addEventListener('click', plus);

const btnMinus = document.querySelector('#btnMinus');
btnMinus.addEventListener('click', minus);

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