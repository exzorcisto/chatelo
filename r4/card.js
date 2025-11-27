const product = {
    name: "Patrick",
    price: 39,
    img: "./patrick.jpg",
    count: 10,
    discount: 15, // в процентах
    inStock: true,
    pickSize: false,
    data_size: {
        S: false,
        M: false,
        L: false,
        XL: false
    }
};

document.getElementById("name").innerHTML = product.name;
document.getElementById("count").innerHTML = product.count;
document.getElementById("price").innerHTML = product.price;

const discountPrice = product.price - (product.price * (product.discount / 100))
discountPrice.toFixed(2)
document.getElementById("discountPrice").innerHTML = discountPrice;

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

function pickSizeCheck() {
    if (product.pickSize !== true) {
        product.pickSize = true
    }
}

const callback = () => {
    if (product.pickSize == true) {
        product.count -= 1;
        if (product.count == 0) {
            product.inStock = false
        }
        console.log('Товар "' + product.name + '" добавлен в корзину');
        alert('Товар "' + product.name + '" добавлен в корзину');
        updateButton();
        updateCount();
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

// size
const pickSizeS = () => {
    if (product.data_size.M == true) {
        product.data_size.M = false
        btnSizeM.classList.remove('btnSize') 
    } else if (product.data_size.L == true) {
        product.data_size.L = false
        btnSizeL.classList.remove('btnSize') 
    } else if (product.data_size.XL == true) {
        product.data_size.XL = false
        btnSizeXL.classList.remove('btnSize') 
    }   
    product.data_size.S = true
    btnSizeS.classList.add('btnSize')  
    pickSizeCheck()
};

const pickSizeM = () => {
    if (product.data_size.S == true) {
        product.data_size.S = false
        btnSizeS.classList.remove('btnSize') 
    } else if (product.data_size.L == true) {
        product.data_size.L = false
        btnSizeL.classList.remove('btnSize') 
    } else if (product.data_size.XL == true) {
        product.data_size.XL = false
        btnSizeXL.classList.remove('btnSize') 
    }   
    product.data_size.M = true
    btnSizeM.classList.add('btnSize') 
    pickSizeCheck() 
};

const pickSizeL = () => {
    if (product.data_size.S == true) {
        product.data_size.S = false
        btnSizeS.classList.remove('btnSize') 
    } else if (product.data_size.M == true) {
        product.data_size.M = false
        btnSizeM.classList.remove('btnSize') 
    } else if (product.data_size.XL == true) {
        product.data_size.XL = false
        btnSizeXL.classList.remove('btnSize') 
    }   
    product.data_size.L = true
    btnSizeL.classList.add('btnSize')  
    pickSizeCheck()
};

const pickSizeXL = () => {
    if (product.data_size.S == true) {
        product.data_size.S = false
        btnSizeS.classList.remove('btnSize') 
    } else if (product.data_size.M == true) {
        product.data_size.M = false
        btnSizeM.classList.remove('btnSize') 
    } else if (product.data_size.L == true) {
        product.data_size.L = false
        btnSizeL.classList.remove('btnSize') 
    } 
    product.data_size.XL = true
    btnSizeXL.classList.add('btnSize')  
    pickSizeCheck()
};

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
btnSizeS.addEventListener('click', pickSizeS);

const btnSizeM = document.querySelector('#btnSizeM');
btnSizeM.addEventListener('click', pickSizeM);

const btnSizeL = document.querySelector('#btnSizeL');
btnSizeL.addEventListener('click', pickSizeL);

const btnSizeXL = document.querySelector('#btnSizeXL');
btnSizeXL.addEventListener('click', pickSizeXL);