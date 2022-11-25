const input = document.createElement('input')
const button = document.createElement('button')
const body = document.querySelector('body')

button.innerText = 'GO'

body.append(input, button)

body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.paddingTop = '50vh';

button.style.width = '50px'
button.style.backgroundColor = 'grey'
button.style.marginLeft = '10px'

button.addEventListener('click', (ev) => {
    if (input.value.startsWith('https')||input.value.startsWith('http')){
        window.open(`${input.value}`, "_self", "popup=true")
        return
    }
    input.value = `https:${input.value}`
    window.open(`${input.value}`, "_self", "popup=true")
});