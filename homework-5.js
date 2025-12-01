// Создание функции выводящее погоду

function showCityWeather(city, temperature) {
    console.log(`Сейчас в ${city} температура: ${temperature} градусов`);
}

showCityWeather("Египет", 23);
showCityWeather("Ташкент", 7);



// Создание функции связанное со скоростью звука

const speedOfSound = 343;

function checkSpeed(speed) {
    if (speed > speedOfSound) {
        console.log("Сверхзвуковая скорость");
    } else if (speed < speedOfSound) {
        console.log("Дозвуковая скорость");
    } else {
        console.log("Скорость звука");
    }
}

checkSpeed(500);
checkSpeed(200);
checkSpeed(343);



// Создание функции исполняющее роль кассира

const product = 'Йогурт';
const price = 50;

function checkProduct(budget) {
    if (budget > price) {
        console.log(`${product} приобретён. Спасибо за покупку!`);
    } else {
        const difference = price - budget;
        console.log(`Вам не хватает ${difference} джуней, пополните баланс.`);
    }
}

checkProduct(100);
checkProduct(40);



// Создание своей функции

function helloWorld() {
    console.log('Hello World!');
}

helloWorld();


// Создание три переменных

const name = 'Abubakr';
const age = 21;
const nationality = 'Uzbek';