
// ДЗ №7

// const UK_CAPITAL = 'Ты живёшь в столице Украины!'
// const GE_CAPITAL = 'Ты живёшь в столице Германии!'
// const AU_CAPITAL = 'Ты живёшь в столице Австрии!'

// const ALI = 'Хочешь быть как Мужаммед Али?';
// const RONALDO = 'Хочешь быть как Рональдо?';
// const JORDAN = 'Хочешь быть как Джордан?'


// var yearOfBirth = prompt('Введите год свооего рождения');
// var city = prompt('Введите название своего города');
// var sport = prompt('Введите название своего любимого вида спорта');

// var yourAge = `Твой возраст ${2022 - yearOfBirth}`;


// if (yearOfBirth) {
//     if (city) {
//         if (city === 'Киев') {
//             if (sport) {
//                 if (sport === 'бокс') {
//                     alert(`
//                     ${yourAge}
//                     ${UK_CAPITAL}
//                     ${ALI}`)
//                 } if (sport === 'футбол') {
//                     alert(`
//                     ${yourAge}
//                     ${UK_CAPITAL}
//                     ${RONALDO}`)
//                 } if (sport === 'баскетбол') {
//                     alert(`
//                     ${yourAge}
//                     ${UK_CAPITAL}
//                     ${JORDAN}`)
//                 }
//             } else {
//                 alert('Жаль, что ты не захотел называть свой любимый спорт')
//             }
//         } else if (city === 'Берлин') {
//             if (sport) {
//                 if (sport === 'бокс') {
//                     alert(`
//                     ${yourAge}
//                     ${GE_CAPITAL}
//                     ${ALI}`)
//                 } if (sport === 'футбол') {
//                     alert(`
//                     ${yourAge}
//                     ${GE_CAPITAL}
//                     ${RONALDO}`)
//                 } if (sport === 'баскетбол') {
//                     alert(`
//                     ${yourAge}
//                     ${GE_CAPITAL}
//                     ${JORDAN}`)
//                 } 
//             } else {
//                 alert('Жаль, что ты не захотел называть свой любимый спорт')
//             }
//         } else if (city === 'Вена') {
//             if (sport) {
//                 if (sport === 'бокс') {
//                     alert(`
//                     ${yourAge}
//                     ${AU_CAPITAL}
//                     ${ALI}`)
//                 } if (sport === 'футбол') {
//                     alert(`
//                     ${yourAge}
//                     ${AU_CAPITAL}
//                     ${RONALDO}`)
//                 } if (sport === 'баскетбол') {
//                     alert(`
//                     ${yourAge}
//                     ${AU_CAPITAL}
//                     ${JORDAN}`)
//                 }
//             } else {
//                 alert('Жаль, что ты не захотел называть свой любимый спорт')
//             }
//         } else {
//             if (sport) {
//                 if (sport === 'бокс') {
//                     alert(`
//                     ${yourAge}
//                     Ты живёшь в городе ${city}!
//                     ${ALI}`)
                    
//                 } if (sport === 'футбол') {
//                     alert(`
//                     Тебе ${yourAge} лет,
//                     Ты живёшь в городе ${city}!
//                     ${RONALDO}`)
                    
//                 } if (sport === 'баскетбол') {
//                     alert(`
//                     Тебе ${yourAge} лет,
//                     Ты живёшь в городе ${city}!
//                     ${JORDAN}`)
//                 }
//             } else {
//                 alert('Жаль, что ты не захотел называть свой любимый спорт')
//             }
//         }
//     } else {
//         alert('Жаль, что ты не захотел называть свой город')
//     }
// } else {
//     alert('Жаль, что ты не захотел называть свой возраст')
// }




// ДЗ №8



// let numOrStr = prompt('input number or string');
// console.log(numOrStr)

// switch (numOrStr) {
//     case null:
//         console.log('ви скасували');
//         break;
//     case '':
//         console.log('Empty String');
//         break;
//     default:
//         if ( isNaN( +numOrStr ) ) {
//             console.log(' number is Ba_NaN')
//             } else {
//             console.log('OK!')
//             }
//         break;
// }




//ДЗ №9

//........................................ЗАДАНИЕ №1...........................

// const arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// let i = 0;
// while (i < arr.length) {
//     document.write(`${arr[i]},`);
//     i++;
// }

//........................................ЗАДАНИЕ №2..............................

// const arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// for (let i = 0; i < arr.length; i++) {
//     document.write(`${arr[i]**2},`);
// }


//........................................ЗАДАНИЕ №3..............................


// const mult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let a = 0;
// let b = 0;
// while (a < mult.length) {
//     document.write(`${mult[b]} * 7 = ${mult[a]*7}____`);
//     a++;
//     b++;
// }

//........................................ЗАДАНИЕ №4..............................

// let sum = 0;

// for (let i = 0; i < 16; i++) {
//     console.log(`${sum += i}`)
// }

// document.write(sum)


//........................................ЗАДАНИЕ №5..............................

// let i = 0
// let sum = 0;


// for (let i = 15; i < 36; i++) {
//     console.log((sum += i))
// }

// document.write(sum)



//........................................ЗАДАНИЕ №6..............................


// let i = 0
// let sum = 0;


// for (let i = 0; i < 501; i++) {
//     console.log((sum += i))
// }

// document.write(sum/500)



//........................................ЗАДАНИЕ №7..............................


let i = 0
let sum = 0;


for (let i = 30; i < 81; i = i+2) {
    console.log((sum += i))
}

document.write(sum)



//........................................ЗАДАНИЕ №8..............................


// let i = 0


// for (let i = 102; i < 201; i = i+3) {
//     console.log(i)
// }


//........................................ЗАДАНИЕ №12..............................


// const mult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let a = 0;
// let b = 0;
// while (a < mult.length) {
//     console.log(`${mult[b]} * 2 = ${mult[a]*2}`);
//     console.log(`${mult[b]} * 3 = ${mult[a]*3}`);
//     console.log(`${mult[b]} * 4 = ${mult[a]*4}`);
//     console.log(`${mult[b]} * 5 = ${mult[a]*5}`);
//     console.log(`${mult[b]} * 6 = ${mult[a]*6}`);
//     console.log(`${mult[b]} * 7 = ${mult[a]*7}`);
//     console.log(`${mult[b]} * 8 = ${mult[a]*8}`);
//     console.log(`${mult[b]} * 9 = ${mult[a]*9}`);
//     console.log(`${mult[b]} * 10 = ${mult[a]*10}`);
//     a++;
//     b++;
// }





















// let number = +prompt('');

// let initialNumber = number;
// let mul = 2;
// let i = 1;


// while (true) {
//     if (number % mul === 0) {
//         console.log(i + ':' + mul)
//         number /= mul;
//         i++;
//     } else {
//         mul++;
//     } if (mul > initialNumber) {
//         break;
//     }
// }



