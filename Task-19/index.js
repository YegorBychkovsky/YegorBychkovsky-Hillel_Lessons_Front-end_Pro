// const question1 = 'Do you want to create a house ? (Yes/No)';
// const question2 = "what is thisis name ?";
// const question3 = "How many apartments there will be ?";
// const question4 = "How many dwellers live in this apartment ?";
// const question5 = "Who is dweller of this house ?(name)";

// const myHous = new House("My House", 100, 4, 'Yegor');
// console.warn(myHous);

// function creationOfCity() {
//     const x = prompt(question1) 
//     if (x === 'Yes') {
//         const name = prompt(question2);
//         const a = +prompt(question3);
//         const b = +prompt(question4);
//         const c = prompt(question5);
//         console.warn(new House(name, a, b, c));
//         new House(name, a, b, c).newFlat();
//         new House(name, a, b, c).dwellersOfEveryApartment();
//         new House(name, a, b, c).dwellerName();
//         creationOfCity()
//     } else {
//         alert("Ok!")
//     }
// }
// function House(name, a, b, c) {
//     this.name = name;
//     this.numberOfApartments = a;
//     this.numberOfApartmentDwellers = b;
//     this.dweller = c;
// }
// House.prototype.newFlat = function newFlat() {
//     console.log(`There are ${this.numberOfApartments} apartments in the house "${this.name}"!`);
// }
// House.prototype.dwellersOfEveryApartment = function dwellersOfEveryApartment() {
//     console.log(`There are ${this.numberOfApartmentDwellers} dwellers in every apartment!`);
// }
// House.prototype.dwellerName = function dwellerName() {
//     console.log(`${this.dweller} lives here!`);
// }
// creationOfCity()















const question1 = 'Do you want to create a house ? (Yes/No)';
const question2 = "what is thisis name ?";
const question3 = "How many apartments there will be ?";
function House(name, a) {
    this.name = name;
    this.numberOfApartment = a;
}
House.prototype.dwellers = 0
const apartment1 = new House("My House", 1);
apartment1.dwellers = 4
apartment1.dweller = "Yegor"
const apartment2 = new House("My House", 2);
apartment2.dwellers = 6
apartment2.dweller = "Yegor"
const apartment3 = new House("My House", 3);
apartment3.dwellers = 2
apartment3.dweller = "Yegor"

console.warn(apartment1);
console.warn(apartment2);
console.warn(apartment3);

creationOfCity()

function creationOfCity() {
    const x = prompt(question1) 
    if (x === 'Yes') {
        const name = prompt(question2);
        const a = +prompt(question3);
        console.warn(new House(name, a));
        creationOfCity()
    } else {
        alert("Ok!")
    }
}



    
















// const question1 = 'Do you want to create a house ? (Yes/No)';
// const question2 = "what is thisis name?";
// const question3 = "How much apartments there will be ?";
// const question4 = "How much Dwellers will be in one appartment?";

// function creationOfCity() {
//     const x = prompt(question1) 
//     if (x === 'Yes') {
//         let name = prompt(question2);
//         const a = +prompt(question3);
//         const b = +prompt(question4);
//         console.warn(new House(name, a, b));
//         new House(name, a, b).newFlat(a);
//         new House(name, a, b).apartmentDweller(b);
//         alert ('You choosed "Yes"')
//         creationOfCity()
//     } else {
//         alert("Ok!")
//     }
// }
// function House(name, a, b) {
//     this.name = name;
//     this.numberOfApartments = a;
//     this.numberOfApartmentDwellers = b;
// }
// House.prototype.newFlat = function newFlat() {
//     console.log(There are ${this.numberOfApartments} apartments in the house "${this.name}");
// }
// House.prototype.apartmentDweller = function apartmentDweller() {
//     console.log(There are ${this.numberOfApartmentDwellers} dwellers in every apartment);
// }
// creationOfCity()




// const question1 = 'Do you want to create a house ? (Yes/No)';
// const question2 = "what is thisis name ?";
// const question3 = "How many apartments there will be ?";
// const question4 = "How many dwellers live in this apartment ?"

// function creationOfCity() {
//     const x = prompt(question1) 
//     if (x === 'Yes') {
//         let name = prompt(question2);
//         const a = +prompt(question3);
//         if (a > 0) {
//             i = 0;
//             House.prototype.flat = 0
//             while (i < a) {
//                 House.prototype.flat += 1
//                 const numberOfDwellers = +prompt(question4)
//                 House.prototype.dwellers = numberOfDwellers
//                 console.log(House.prototype);
//                 i++
//             }
//         }
//         console.warn(new House(name, a));
//         new House(name, a).newFlat(a);
//         alert ('You choosed "Yes"')
//         creationOfCity()
//     } else {
//         alert("Ok!")
//     }
// }
// function House(name, a) {
//     this.name = name;
//     this.numberOfApartments = a;
// }
// House.prototype.newFlat = function newFlat() {
//     console.log(There are ${this.numberOfApartments} apartments in the house "${this.name}");
// }
// creationOfCity()