let card_name = "Patrick";

const callback = () => {
    console.log('Товар добавлен в корзину:' + card_name)
};

document.getElementById("name").innerHTML = card_name;
const button = document.querySelector('#myButton');
button.addEventListener('click', callback);