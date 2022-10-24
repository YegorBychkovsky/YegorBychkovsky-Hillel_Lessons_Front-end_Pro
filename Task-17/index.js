function count() {
    var counter = 0;
    
    return function (a) {
        counter += a;
        return counter
    };
}

const sum = count()


console.log(sum(2)); 
console.log(sum(6));
console.log(sum(17));
console.log(sum(45));