import Drink from "./Drink.js";

export default class Tea extends Drink {
    constructor(name, volume, price, temperature, type) {
        super(name, volume, price, temperature);

        this.type = type;
    }

    getInfo() {
        return `${this.name} (${this.type}) - ${this.price}₽`;
    }
}