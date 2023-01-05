const tempDiv = document.getElementById('temp')
const todayP = document.querySelector('.today')
const title = document.querySelector('h1')
const input = document.querySelector('input')
const submit = document.querySelector('button')

const indicators = ['temp', 'pressure', 'description', 'humidity', 'speed', 'deg', 'icon']

function getWeather(city) {
    title.innerHTML = city + ' weather'
    tempDiv.innerHTML = ''
    return new Promise((resolve, reject) => {
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`
        for (let i = 0; i < 8; i++) {
            const newDiv = document.createElement(`div`)
            newDiv.classList.add (`.${indicators[i]}`)
            tempDiv.appendChild(newDiv)
            fetch(URL)
            .then((response) => {
                if (response.status === 404) {
                    title.innerText = "Error";
                    reject("404, Invalid name of city")
                }
                return response.json()
            })
            .then((json) => {
                if (i === 0) {
                    newDiv.innerText = `${indicators[i]} : ` + json.main.temp;
                }
                if (i === 1) {
                    newDiv.innerText = `${indicators[i]} : ` + json.main.pressure;
                }
                if (i === 2) {
                    newDiv.innerText = `${indicators[i]} : ` + json.weather[0].description;
                }
                if (i === 3) {
                    newDiv.innerText = `${indicators[i]} : ` + json.main.humidity;
                }
                if (i === 4) {
                    newDiv.innerText = `${indicators[i]} : ` + json.wind.speed;
                }
                if (i === 5) {
                    newDiv.innerText = `${indicators[i]} : ` + json.wind.deg;
                }
                if (i === 6) {
                    const icon = json.weather[0].icon
                    const imgUrl = `http://openweathermap.org/img/w/${icon}.png`
                    todayP.innerHTML = `<img src="${imgUrl}" alt="">`
                }
                return resolve(json)
            })
            .catch((err) => {
                reject(err);
            })
        }
    })
}
submit.addEventListener('click', () => {
    getWeather(`${input.value}`)
    .then((a) =>{
        console.log(a);
    })
    .catch((err) => {
        const div = document.createElement('div')
        todayP.appendChild(div)
        const post = ("Error: " + err)
        div.innerText = post
        console.warn(post);
    })
})