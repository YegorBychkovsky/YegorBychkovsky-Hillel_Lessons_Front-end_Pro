const question1 = 'Do you want to create a house ? (Yes/No)';
const question2 = "what is thisis name ?";
const question3 = "How many apartments there will be ?";
function House(name, a) {
    this.name = name;
    this.numberOfApartment = a;
}
function House2(name, a) {
    this.name = name;
    this.apartments = a;
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
        console.warn(new House2(name, a));
        creationOfCity()
    } else {
        alert("Ok!")
    }
}