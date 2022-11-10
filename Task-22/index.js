const container = document.querySelector(".container");
const tbl = document.createElement("table");
container.appendChild(tbl)

var value = 1

for (let i = 0; i < 10; i++) {
    const tr = document.createElement("tr")
    tbl.appendChild(tr);
    for (let j = 0; j < 10; j++) {
        const td = document.createElement("td");
        tr.appendChild(td);
        td.innerText = `${value}`
        value++
    }
}