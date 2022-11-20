const body = document.querySelector('body')
const button = document.querySelector('button')
const form = document.querySelector('form')

const radio = document.querySelectorAll('.radio')

const tableCreate = function tableCreate(params) {
    const td = document.createElement('td')
    body.appendChild(td)
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    td.appendChild(td1)
    td.appendChild(td2)
    const arr = ['Имя','Фамилия','Дата рождения','Пол','Город','Адресс','Языки']
    for (a=0; a<7; a++) {
        const tr1 = document.createElement('tr')
        td1.appendChild(tr1)
        tr1.innerText = arr[a]
    }
    for (j=0; j < 8; j++) {
        const tr = document.createElement('tr')
        td2.appendChild(tr)
            if (form[j].type ==='text'||
            form[j].id ==='textarea' ) {
                tr.innerText = form[j].value
            } if (form[j].type ==='radio') {
                if (form[j].checked) {
                    tr.innerText = form[j].value
                }
            } if (form[j].type ==='checkbox') {
                const checkboxes = document.getElementsByName('language')
                for(y = 0; y < 5; y++ ) {
                    if (checkboxes[y].checked) {
                        const li = document.createElement('li')
                        tr.appendChild(li)
                        li.innerText = checkboxes[y].value
                    }
                }
            } if (form[j].id ==='select') {
                    tr.innerText = form[j].value
                
        }
    }
}

button.addEventListener('click', () => {
    form.style.visibility = 'hidden'
    tableCreate()
})

/*
Я не стал реализовывать отмену формы при условии, что все поля не заполнены как в одном из прошлых ДЗ, по тому что этого не было в задании
Но если нужно, могу добавить
 */