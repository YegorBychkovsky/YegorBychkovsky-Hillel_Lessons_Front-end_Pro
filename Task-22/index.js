const container = document.querySelector(".container");
const tbl = document.createElement("table");
container.appendChild(tbl)

var num = 1

for (let i = 0; i < 10; i++) {
    const tr = document.createElement("tr")
    tbl.appendChild(tr);
    for (let j = 0; j < 10; j++) {
        const tdText = document.createTextNode(num++);
        const td = document.createElement("td");
        tr.appendChild(td);
        td.appendChild(tdText);
    }
}