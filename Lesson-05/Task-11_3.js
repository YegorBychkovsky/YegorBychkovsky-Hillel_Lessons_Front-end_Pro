// let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

//Сделал двумя способами, второй мне нравится сильно больше.

//    ПЕРВЫЙ

// let b = 0;

// for (const key in arr) {
//     for (let i = 0; i < 1; i++) {
//         console.log(` ${b} : ${arr[key]}`);
//         b++
//     }
// }

// let a = arr.filter((elem) => {
//     return elem > 0;
// })
// a.sort((a, b) => a - b);
// a.find((elem) => {
//     return elem > 0;
// })
// console.log(
//     a.findLast((elem) => {
//         return elem > 0;
//     })
// );


//   ВТОРОЙ


// let max = arr[0]
// let maxIndex = 0

// for (i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//         maxIndex = i
//     }
// }

// console.log(`Max value: ${max}, index: ${maxIndex} `);