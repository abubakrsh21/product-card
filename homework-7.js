import { comments } from "./comments.js";

// (2) Создание массива чисел.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter(number => number >= 5);

console.log(filteredNumbers);


// (3) Создание массива строк.

const cars = [
  {
    brand: "Mercedes-Benz",
    model: "C-Class",
    year: 2019,
    color: "Черный",
    transmission: "Автоматический"
  },
  {
    brand: "BMW",
    model: "X5",
    year: 2021,
    color: "Белый",
    transmission: "Автоматический"
  },
  {
    brand: "Audi",
    model: "A4",
    year: 2018,
    color: "Серый",
    transmission: "Ручной"
  }
];

const carYearCheck = 2019;

if (cars.some(car => car.year === carYearCheck)) {
  console.log(`${carYearCheck} есть в массиве`);
} else {
  console.log(`${carYearCheck} отсутствует в массиве`);
}



// (4) Создание функции которая переворачивает массив.

function reverseArray(array) {
  return array.reverse()
}

console.log(reverseArray(cars))
console.log(reverseArray(numbers))



// (7) Выведение в консоль массих комментариев.

const commentsWithEmail = comments.filter(comment => {
  comment.email.includes('.com')
});

console.log(commentsWithEmail);


// (8)  Перебор массива

const updatedComments = comments.map(comment => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));

console.log(updatedComments);


// (9) Перебор массива по стандартному виду

const defaultComments = comments.map(comment => ({
  id: comment.id,
  name: comment.name
}));

console.log(defaultComments);


// (10) Добавление свойства isInvalid в объект

const commentsWithIsInvalid = comments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));

console.log(commentsWithIsInvalid);


// (11) Используя метод reduce вывести массив почт.

const emailsWithReduce = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

console.log(emailsWithReduce);


// то же самое, но с map

const emailsWithMap = comments.map(comment => comment.email);

console.log(emailsWithMap);


// (12) Работа с методом toString(), join()

const emailsToString = emails.toString();
console.log(emailsToString);


const emailsStringJoin = emails.join(", ");
console.log(emailsStringJoin);