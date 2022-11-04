class Human {
    name;
    age;
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    information () {
        console. log(new Human(this.name, this.age))
    }

}

class Auto {
    brand;
    model;
    year;
    number;
    owner;

    constructor (brand, model, year, number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.number = number;
    }
    assignOuner (name) {
        if (name.age < 18) {
            return alert (`Too young to be owner!`)
        } {
            this.owner = name
        }
    }
    info() {
        if (this.owner === undefined) {
            console. log(new Auto(this.brand, this.model, this.year, this.number))
            return console.log(`No Oumer`);
        } {
            console. log(new Auto(this.brand, this.model, this.year, this.number))
            this.owner.information()

        }
    }
}

const humanJohn = new Human ('John' , 32)
const humanJane = new Human ('Jane' , 16)
const humanBob = new Human ('Bob' , 64)

const car1 = new Auto('Meresedes', 'S-class', 2021, 'ВН2021АР')
const car2 = new Auto('Meresedes', 'E-class', 2020, 'ВН2020АР')
const car3 = new Auto('Meresedes', 'V-class', 2018, 'ВН2018АР')

car1.assignOuner(humanJane)
car2.assignOuner(humanBob)
car3.assignOuner(humanJohn)

car1.info()
car2.info()
car3.info()