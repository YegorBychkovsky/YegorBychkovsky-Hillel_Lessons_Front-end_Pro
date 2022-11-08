const img = document.querySelector(".dog")

const pic = new Array(
    './img/dog1.jpeg',
    './img/dog2.jpeg',
    './img/dog3.jpeg',
    './img/dog4.jpeg',
    './img/dog5.jpeg',
    './img/dog6.jpeg'
);
const alt = new Array(
    'dog1',
    'dog2',
    'dog3',
    'dog4',
    'dog5',
    'dog6'
);

var n = Math.floor(Math.random() * 6);
document.write(pic[n]);

img.setAttribute("src", pic[n])
img.setAttribute("alt", alt[n])
    
