// (10-ое задание, 2-ая задача) Импорт js файлов

import './products.js';
import './comments.js';
import './classes.js';
import { products } from './products.js';
import './homework-5.js';
import './homework-6.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';

// Покраска первой карточки

const template = document.getElementById('product-template');
const productList = document.getElementById('product-list');

function displayCards(products) {
    productList.innerHTML = '';

    products.forEach(product => {
        const productClone = template.content.cloneNode(true);

        const productCard = productClone.querySelector('.product-card');
        const button = productClone.querySelector('.change-color-first-card');

        button.addEventListener('click', () => {
            productCard.style.backgroundColor = '#00FF00';
        });

        productList.appendChild(productClone);
    });
}

// Покраска всех карточек

const productCards = document.querySelectorAll('.card-container');
const changeAllCardColorButton = document.querySelector('#change-color-all-card')
const blueColorHash = '#0000FA'

changeAllCardColorButton.addEventListener('click', () => {
    productCards.forEach((card) => card.style.backgroundColor = blueColorHash)
})

// Открыть Google

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
    const answer = confirm('Вы действительно хотите открыть Google?');
    const googleURL = 'https://google.com';

    if (answer === true) {
        window.open(googleURL)
    } else {
        return;
    }
}


// Вывод консоль лог

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №4'))

function outputConsoleLog(message) {
    alert(message)
    console.log(message)
}

// Вывод заголовка в консоль

const outputTitle = document.querySelector('.main-title');

outputTitle.addEventListener('mouseenter', () => {
    console.log(outputTitle.textContent);
});

// Изменение цвета самой кнопки

const changeColorButton = document.getElementById('toggle-color-btn');

changeColorButton.addEventListener('click', () => {
    changeColorButton.classList.toggle('bg-red');
});


// 10-ое задание №4 работа с модальным окном

import Modal from './modal.js';

const modal = new Modal('modal', 'overlay');

const openBtn = document.getElementById('open-modal-btn');

openBtn.addEventListener('click', () => {
    modal.open();
});


// №5 Реализование формы

import Form from './form.js';

const form = new Form('register-form');

let user = null;

form.form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.isValid()) {
        alert('Форма невалидна');
        return;
    }

    const values = form.getValues();

    // проверка паролей
    if (values.password !== values.repeatPassword) {
        alert('Пароли не совпадают');
        return;
    }

    user = {
        ...values,
        createdOn: new Date()
    };

    console.log(user);

    form.reset();
    modal.close();
});