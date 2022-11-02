class Human {
    constructor (name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

class Flat {
    residents = []
    
    addResident (name) {
        this.residents.push(name)
    }
}

class House {
    flats = [];

    maxFlats (number) {
        this.maxNumberOfFlats = number;
    }
    addFlat (name) {
        if (this.flats.length === this.maxNumberOfFlats) {
            return alert('Too much flats!')
        } {
            this.flats.push(name)
        }
    }
}

const humanTom = new Human('Tom', 'M')
const humanJane = new Human('Jane', 'F')
const humanLucas = new Human('Lucas', 'M')
const humanSara = new Human('Sara', 'F')


const flat1 = new Flat()
flat1.addResident(humanJane)
flat1.addResident(humanSara)
flat1.addResident(humanTom)

const flat2 = new Flat()
flat2.addResident(humanTom)
flat2.addResident(humanJane)

const flat3 = new Flat()
flat3.addResident(humanLucas)


const house1 = new House()
house1.maxFlats(4);
house1.addFlat(flat1);
house1.addFlat(flat2);
house1.addFlat(flat3);
house1.addFlat(flat3);
house1.addFlat(flat3);
console.log(house1);

const house2 = new House()
house2.maxFlats(5);
house2.addFlat(flat3);
house2.addFlat(flat2);
house2.addFlat(flat1);
house2.addFlat(flat2);
house2.addFlat(flat2);
house2.addFlat(flat2);
console.log(house2);

const house3 = new House()
house3.maxFlats(2);
house3.addFlat(flat1);
house3.addFlat(flat1);
console.log(house3);