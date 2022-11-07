// const table = document.createElement("table");
// // table.classList.add('table');



// const tr = document.createElement('tr');
// // const td = document.createElement('td');

// table.append(tr);
// table.append(document.createElement('tr'));
// table.append(document.createElement('tr'));
// table.append(document.createElement('tr'));
// table.append(document.createElement('tr'));
// table.append(document.createElement('tr'));
// table.append(document.createElement('tr'));
// table.append(document.createElement('tr'));
// table.append(document.createElement('tr'));
// table.append(document.createElement('tr'));





// const container = document.querySelector(".container");
// const tbl = document.createElement("table");


// container.appendChild(tbl);

// for (let i = 0; i < 10; i++) {

//   const tr = document.createElement("tr");

//   for (let j = 0; j < 10; j++) {

//     const td = document.createElement("td");
//     const tdText = document.createTextNode(i);
//     td.appendChild(tdText);
//     tr.appendChild(td);
//   }

//   tbl.appendChild(tr);
// }

// tbl.appendChild(tblBody);
// document.body.appendChild(tbl);




const container = document.querySelector(".container");
const tbl = document.createElement("table");
container.appendChild(tbl);

let num = 1

for (let i = 0; i < 10; i++) {
    const tr = document.createElement("tr");
    tbl.appendChild(tr);
    for (let j = 0; j < 10; j++) {
        const tdText = document.createTextNode(num++);
        const td = document.createElement("td");
        tr.appendChild(td);
        td.appendChild(tdText);
    }
}


// var num = 1; //  запоминаем число для вывода в первую ячейку
// for (var tr = 0; tr < 10; tr++) {
//     tbl.appendChild('tr');

//     for (var ce = 0; ce < 10; ce++) {
//         document.write ('<td>' + num++ + '</td>');
//     }

//     document.write ('</tr>'); // закрываем строку
// }
// document.write ('</table>'); // закрываем таблицу





