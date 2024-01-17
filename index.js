class Car {

    make;
    model;
    year;
    cost;

    constructor(make, model, year, cost) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.cost = cost;
    }

    getPrice(){

        return this.cost * 1.4;
    }
}

const carForDisplay = new Car("Toyota","Yaris",2023, 26500);
const newCar = new Car("Ford","Taurus",2022, 20000);
console.log(carForDisplay, carForDisplay.getPrice());
console.log(newCar, newCar.getPrice());
