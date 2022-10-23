function count() {
    var counter = 0;
    
    return function (a) {
        counter += a;
        console.log(counter);
    };
}

const sum = count()


sum(2);
sum(6);
sum(17);
sum(45);