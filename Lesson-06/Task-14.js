const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let sum = 'Результат:'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.ceil(Math.random() * (max - min) + min);
  }
function generateKey (a, b) {
    for (i = 0; i < a; i++) {
        let random = Math.random()*characters.length;
        d = b[Math.ceil(getRandomInt(i, random))]
        sum += d
    }
}
generateKey(36, characters)
console.log(sum);
