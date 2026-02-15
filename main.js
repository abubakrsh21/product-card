// Покраска первой карточки

const productCardFirst = document.querySelector('.card-container');
const changeFirstCardColorButton = document.querySelector('#change-color-first-card');
const greenColorHash = '#00FF00';

changeFirstCardColorButton.addEventListener('click', () => {
    productCardFirst.style.backgroundColor = greenColorHash;
})

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

