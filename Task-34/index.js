const tempDiv = document.getElementById('temp')
const todayP = document.querySelector('.today')
const title = document.querySelector('h1')
const input = document.querySelector('input')
const submit = document.querySelector('button')

const indicators = ['temp', 'pressure', 'description', 'humidity', 'speed', 'deg', 'icon']

function getWeather(city) {
    title.innerHTML = city + ' weather'
    tempDiv.innerHTML = ''
    for (let i = 0; i < 8; i++) {
        const newDiv = document.createElement(`div`)
        newDiv.classList.add (`.${indicators[i]}`)
        tempDiv.appendChild(newDiv)
        const promise = new Promise((resolve, reject) => {
            const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`
            fetch(URL)
            .then((response) => {
                if (response.status === 404) {
                    reject("404, Post not found")
                }
                return response.json()
            })
            .then((json) => {
                console.log(json);
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
        })
        
    }
}
submit.addEventListener('click', () => {
    getWeather(`${input.value}`)
})