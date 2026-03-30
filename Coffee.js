import Drink from "./Drink.js";

export default class Coffee extends Drink {
    constructor(name, volume, price, temperature, beansType, milkType) {
        super(name, volume, price, temperature);

        this.beansType = beansType;
        this.milkType = milkType;
    }

    getInfo() {
        return `${this.name} (${this.volume}) с ${this.milkType} молоком - ${this.price}₽`;
    }
}