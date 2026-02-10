import { products } from "./products.js";

// (3) Создание шаблона

const productTemplate = document.getElementById('product-template');
const productList = document.getElementById('product-list');

function displayCards(products) {
    products.forEach(product => {
        const productClone = productTemplate.content.cloneNode(true);
        productClone.querySelector('.product-img').src = `/images/${product.img}.png`
        productClone.querySelector('.product-category').textContent = product.category
        productClone.querySelector('.product-name').textContent = product.name
        productClone.querySelector('.product-description').textContent = product.description
        productClone.querySelector('.product-compound').innerHTML = product.compound.map(item =>
            `<li>${item}</li>`).join("");
        productClone.querySelector('.product-price').textContent = product.price + " \u20BD"
        productList.appendChild(productClone)
    })
};


// (4) Использование метода reduce

const productDescription = products.reduce((acc, product) =>
  [...acc, {[product.name]: product.description}], [])
console.log(productDescription);


// (5) Реализовать функцию для отображения карточек

const showCards = () => {
    const question = prompt("Сколько карточек отобразить? От 1 до 5");
    const numbers = Number(question);
    if (numbers > 0 && numbers <= products.length) {
        displayCards(products.slice(0, numbers));
    } else {
        alert("Введите число от 1 до 5");
    }
}

showCards()