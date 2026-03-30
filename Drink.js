export default class Drink {
    #temperature;

    constructor(name, volume, price, temperature) {
        this.name = name;
        this.volume = volume;
        this.price = price;
        this.#temperature = temperature;
    }

    getInfo() {
        return `${this.name} (${this.volume} - ${this.price}₽)`;
    }

    getTemperature() {
        return this.#temperature;
    }

    setTemperature(temp) {
        this.#temperature = temp;
    }

    #prepare() {
        console.log(`${this.name} готовится...`);
    }

    serve() {
        this.#prepare();
        console.log(`${this.name} подан! Температура: ${this.#temperature}°C`);
    }
}

