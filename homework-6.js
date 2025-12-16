//  (3) Создание объекта личных данных

const owner = {
    name: "Абубакр",
    surname: "Шакиров",
    age: 21,
    job: "Студент",
    country: "Узбекистан",
    city: "Ташкент",
    mail: "abubakir.shv@gmail.com",
    relationshipStatus: "Не женат",
};

//  (4) Создание объекта автомобиля

const car = {
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2019,
    color: "Черный",
    transmission: "Автомат коробка"
}

car.owner = owner;


//  (5) Создание функции проверяющее максимальную скорость

function checkSpeed(carObject) {
    if ("maxSpeed" in carObject) {
        return;
    }

    carObject.maxSpeed = 250;
}

checkSpeed(car);

console.log(car);


//  (6) Создание функции выводящее объект и его свойство

function printObjectProperty(obj, property) {
    console.log(obj[property]);
}

printObjectProperty(car, "model");
printObjectProperty(car, "maxSpeed");


//  (7) Создание простого массива 

const products = ['яблоки', 'йогурт', 'хлеб', 'шоколад'];

console.log(products[0]);


//  (8) Создание массива объектов книги

const books = [
    {
        title: 'Как читать книги',
        author: 'Поварнин',
        year: 1924,
        coverColor: 'Желтый',
        genre: 'Учебно-методическая литература'
    },
    {
        title: 'Уникальное пособие для ищущих знания',
        author: 'Дияуддин ибн Раджаб Шихабуддин',
        year: 2021,
        coverColor: 'Голубая',
        genre: 'Учебный'
    },
    {
        title: 'Побуждение торговле',
        author: 'Абу Бакр аль-Халляль',
        year: 819,
        coverColor: 'Черный',
        genre: 'Юриспруденция'
    }
];

books.push({
    title: "Ключи обители счастью",
    author: "Ибну ль-Къаййим",
    year: 1967,
    coverColor: "Черный",
    genre: "Учебный"
});

console.log(books);


//  (9) Создание другого массива для объединения

const anotherBooks = [
    {
        title: "Краткий завет",
        author: "Ибн Таймия",
        year: 1320,
        coverColor: "Белый",
        genre: "Вероубеждение"
    },
    {
        title: "Погонщик душ к обители вечной радости",
        author: "Ибну ль-Къаййим",
        year: 720,
        coverColor: "Черный",
        genre: "Религиозно-назидательная литература"
    }
];

const allBooks = [...books, ...anotherBooks];

console.log(allBooks);

// (10) Написать функцию которая выделяет редкие книги (сложное было задание, воспользовался
// с чат жпт и то не все догнал.. сложновато для нашего уровня.)

function markRareBooks(booksArray) {
    return booksArray.map(book => ({
        ...book,
        isRare: book.year > 2000
    }));
}

const booksWithRareFlag = markRareBooks(allBooks);

console.log(booksWithRareFlag);