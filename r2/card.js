const card_name = "Patrick";
let count_product = 1;

document.getElementById("name").innerHTML = card_name;
document.getElementById("count").innerHTML = count_product;

function updateCount() {
    console.log('Текущее количество товаров: ' + count_product)
}

const callback = () => {
    console.log('Товар добавлен в корзину: ' + card_name)
};

const plus = () => {
    count_product += 1;
    document.getElementById("count").innerHTML = count_product;
    updateCount();
    
};

const minus = () => {
    if (count_product - 1 > 0) {
        count_product -= 1;
        document.getElementById("count").innerHTML = count_product;
        updateCount();
    } else {
        alert('Количество товаров не может быть отрицательным!')
    }
    
};

const btnPlus = document.querySelector('#btnPlus');
btnPlus.addEventListener('click', plus);

const btnMinus = document.querySelector('#btnMinus');
btnMinus.addEventListener('click', minus);

const button = document.querySelector('#myButton');
button.addEventListener('click', callback);