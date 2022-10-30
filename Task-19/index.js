class House {
    constructor(name) {
        this.name = name;
    }
    numberOfResidents(number) {
        this.numberOfResidents = number;
    }
    floors(number) {
        this.floors = number;
    }
    elevators(number) {
        this.elevators = number;
    }
    staircase(number) {
        this.staircase = number;
    }
    apartments(number) {
        this.apartments = number;
    }
}
class Flat extends House {
    super(name) {
        this.name = name;
    }
    floor(number) {
        this.floor = number;
    }
    numberOfResidents(number) {
        this.numberOfResidents = number;
    }
    residents(name1, name2) {
        this.residents = name1 + ' ' + name2;
    }
}
class Resident1 extends Flat {
    flatNumber(number) {
        this.flatNumber = number;
    }
    age(age) {
        this.age = age;
    }
}
class Resident2 extends Flat {
    flatNumber(number) {
        this.flatNumber = number;
    }
    age(age) {
        this.age = age
    }
}
class Flat2 extends House {
    super(name) {
        this.name = name;
    }
    floor(number) {
        this.floor = number;
    }
    numberOfResidents(number) {
        this.numberOfResidents = number;
    }
    residents(name) {
        this.residents = name;
    }
}
class Resident extends Flat2 {
    flatNumber(number) {
        this.flatNumber = number;
    }
    age(age) {
        this.age = age
    }
}
class Flat3 extends House {
    super(name) {
        this.name = name;
    }
    floor(number) {
        this.floor = number;
    }
    numberOfResidents(number) {
        this.numberOfResidents = number;
    }
    residents(name1, name2) {
        this.residents = name1 + ' ' + name2;
    }
}
class Resident3 extends Flat3 {
    flatNumber(number) {
        this.flatNumber = number;
    }
    age(age) {
        this.age = age
    }
}
class Resident4 extends Flat3 {
    flatNumber(number) {
        this.flatNumber = number;
    }
    age(age) {
        this.age = age;
    }
}

const newHouse = new House('My House', 20)
newHouse.floors(2)
newHouse.elevators(0)
newHouse.staircase(1)
newHouse.apartments(3)
newHouse.numberOfResidents(5)
const flat1 = new Flat('1')
flat1.floor(1)
flat1.numberOfResidents(2)
flat1.residents('Kyle', 'Jane')
const flat2 = new Flat2('2')
flat2.floor(2)
flat2.numberOfResidents(1)
flat2.residents('Lucas')
const flat3 = new Flat3('3')
flat3.floor(2)
flat3.numberOfResidents(2)
flat3.residents('Tom','Jerry')
const resident1 = new Resident1('Kyle')
resident1.flatNumber(1)
resident1.age(20)
const resident2 = new Resident1('Jane')
resident2.flatNumber(1)
resident2.age(20)
const resident = new Resident1('Lucas')
resident.flatNumber(2)
resident.age(25)
const resident3 = new Resident1('Tom')
resident3.flatNumber(3)
resident3.age(82)
const resident4 = new Resident1('Jery')
resident4.flatNumber(3)
resident4.age(80)
console.log(newHouse);
console.log(flat1);
console.log(resident1);
console.log(resident2);
console.log(flat2);
console.log(resident);
console.log(flat3);
console.log(resident3);
console.log(resident4);

cityCreation()

function cityCreation() {
    const question = prompt('Create a new house?')
    if (question === 'Yes')  {
        const nameHouse = 'New House'
        const newHouse = new House(nameHouse)
        newHouse.floors(2)
        newHouse.elevators(0)
        newHouse.staircase(1)
        const numberOfApartments = 3
        newHouse.apartments(numberOfApartments)
        console.log(newHouse);
        i = 0
        while (i < numberOfApartments) {
            const nameFlat = 'New Flat'
            const newFlat = new Flat(nameFlat)
            newFlat.floor(2)
            newFlat.numberOfResidents(5)
            const numberOfResidents = 4
            newFlat.residents(4)
            console.log(newFlat);
            i++
            n = 0
            while (n < numberOfResidents) {
                const nameResident = 'New Resident'
                const newResident = new Resident(nameResident)
                newResident.flatNumber(1)
                newResident.age(35)
                newResident.numberOfResidents(5)
                console.log(newResident);
                n++
            }
        }
        cityCreation()
    } else {
        
    }
}