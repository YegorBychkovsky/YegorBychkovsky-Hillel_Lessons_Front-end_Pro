const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function getRandomInt(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min) + min);
}
function generateKey (a, b) {
let sum = 'Результат:'
for (i = 0; i < a; i++) {
d = b[Math.ceil(getRandomInt(0, characters.length))]
sum += d
}
return sum
}
const key = generateKey(15, characters)
console.log(key)