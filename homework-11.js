import Coffee from "./Coffee.js";
import Lemonade from "./Lemonade.js";
import Tea from "./Tea.js";

const coffee = new Coffee('Латте', 'средний', 170, 70, 'арабика', 'овсяное');
const tea = new Tea('Черный чай', 'средний', 120, 80, 'черный');
const lemonade = new Lemonade('Лимонад', 'маленький', 100, 5, 'лимон');

console.log(coffee.getInfo());
console.log(tea.getInfo());
console.log(lemonade.getInfo());

console.log(coffee.getTemperature());

coffee.setTemperature(70);

coffee.serve();