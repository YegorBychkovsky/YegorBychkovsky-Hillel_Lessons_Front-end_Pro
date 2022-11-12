const listOfLists = [1, 2, [1, 2, 3], 3, 4, [1, 2, [1, 2, 3]], 5];

const body = document.querySelector('body')

function generateList(array) {
    const ul = document.createElement('ul')
    body.appendChild(ul)
    for (i = 0; i < array.length; i++) {
        if (array[i].length > 1) {
            const ul1 = document.createElement('ul')
            ul.appendChild(ul1)
                for (j = 0; j < array[i].length; j++) {

                    if (array[i][j].length > 1) {
                        const ul2 = document.createElement('ul')
                        ul1.appendChild(ul2)
                        for (index = 0; index < array[i][j].length; index++) {
                            const li = document.createElement('li')
                            ul2.appendChild(li)
                            li.innerText = `${array[i-1]}.${array[j-1]}.${array[i][j][index]}`
                        }
                    } else {
                        const li = document.createElement('li')
                        ul1.appendChild(li)
                        li.innerText = `${array[i-1]}.${array[i][j]}`

                    }
                }
        } else {
            const li = document.createElement('li')
            ul.appendChild(li)
            li.innerText = array[i]
        }
    }
}
generateList(listOfLists)







s