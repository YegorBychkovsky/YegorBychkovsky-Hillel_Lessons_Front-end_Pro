const img = document.querySelector(".dog")
const button1 = document.querySelector(".button1")
const button2 = document.querySelector(".button2")



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
    
var i = 0;
var j = 0;

const handleClickNext = (ev) => {
    img.setAttribute("src", pic[++i])
    img.setAttribute("alt", alt[++j])
    button1.style.visibility = 'visible';
    if (pic[i] === './img/dog6.jpeg') {
        button2.style.visibility = 'hidden';
    }
}
if (pic[i] === './img/dog1.jpeg') {
    button1.style.visibility = 'hidden';
}
const handleClickPrev = (ev) => {
    img.setAttribute("src", pic[--i])
    img.setAttribute("alt", alt[--j])
    button2.style.visibility = 'visible';
    if (pic[i] === './img/dog1.jpeg') {
        button1.style.visibility = 'hidden';
    }
}

button1.addEventListener("click", handleClickPrev)
button2.addEventListener("click", handleClickNext)
