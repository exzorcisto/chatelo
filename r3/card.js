const product = {
    name: "Patrick",
    price: 39,
    count: 10,
    discount: 15, // в процентах
    inStock: true
};

document.getElementById("name").innerHTML = product.name;
document.getElementById("count").innerHTML = product.count;
document.getElementById("price").innerHTML = product.price;

const discountPrice = product.price - (product.price * (product.discount / 100))
document.getElementById("discountPrice").innerHTML = discountPrice;

function updateCount() {
    document.getElementById("count").innerHTML = product.count;
    console.log('Текущее количество товаров: ' + product.count)
}

function updateButton() {
    if (product.inStock == false) {
        btnBuy.classList.add('btn-disabled');
        btnBuy.disabled = true;
        btnBuy.textContent = "Нет в наличии";
    } else if (product.inStock = true) {
        btnBuy.classList.remove('btn-disabled');
        btnBuy.disabled = false;
        btnBuy.textContent = "Купить";
    }
}

const callback = () => {updateCount();
    product.count -= 1;
    if (product.count == 0) {
        product.inStock = false
    }
    console.log('Товар "' + product.name + '" добавлен в корзину');
    alert('Товар "' + product.name + '" добавлен в корзину');
    updateButton();
    updateCount();
};

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

const btnPlus = document.querySelector('#btnPlus');
btnPlus.addEventListener('click', plus);

const btnMinus = document.querySelector('#btnMinus');
btnMinus.addEventListener('click', minus);

const btnBuy = document.querySelector('#btnBuy');
btnBuy.addEventListener('click', callback);