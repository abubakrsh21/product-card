import Drink from "./Drink.js";

export default class Lemonade extends Drink {
    constructor(name, volume, price, temperature, flavor) {
        super(name, volume, price, temperature);

        this.flavor = flavor;
    }

    getInfo() {
        return `${this.name} (${this.flavor}) - ${this.price}₽`;
    }
}