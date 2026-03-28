// Создание структуры

export class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    showInfo() {
        return `${this.brand} ${this.model} (${this.year})`;
    }
}

export class Car extends Vehicle {
    constructor(brand, model, year, transmission) {
        super(brand, model, year);
        this.transmission = transmission;
    }

    drive() {
        console.log(`${this.brand} едет по дороге`);
    }
}

export default class SportsCar extends Car {
    constructor(brand, model, year, transmission, maxSpeed) {
        super(brand, model, year, transmission);
        this.maxSpeed = maxSpeed;
    }

    showSpeed() {
        console.log(`Максимальная скорость: ${this.maxSpeed}`);
    }
}