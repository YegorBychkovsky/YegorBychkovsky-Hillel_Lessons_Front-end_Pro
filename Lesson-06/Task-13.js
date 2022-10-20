const arr = [1, 2, 65, 23, 'ttt', 94, 0, 14587, 9, undefined, -485, 784];
function removeElement (a, b) {
    c = a.indexOf(b);
    if (a.indexOf(b) === -1) {
        return
    }
    a.splice(c, 1);
}
removeElement(arr, 'erwb');
console.log(arr);



// console.log(removeElement([5 ,38, 67, 43, 42, -5, 0, 81], 42)) // [5 ,38, 67, 43, -5, 0, 81];
// console.log(removeElement([5 ,38, 67, 43, 42, -5, 0, 81], 38)) // [5, 67, 43, 42, -5, 0, 81];
// console.log(removeElement([5 ,38, 67, 43, 42, -5, 0, 81], 5)) // [38 , 67, 43, 42, -5, 0, 81];
// console.log(removeElement([5, 4, 3, 2, 1], 4)) // [4, 3, 2, 1];
// console.log(removeElement([5, 4, 3, 2, 1], 10)) // [5, 4, 3, 2, 1];