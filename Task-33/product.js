const product = document.querySelector(".product")
const productLive = product.children

class MyCustomElement {
    constructor (el) {
        this.elem = document.createElement(el)
    }
    appendTo(parent) {
        parent.appendChild(this.elem);
        return this
    }
    addClass(className) {
        this.elem.classList.add(className);
        return this
    }
    display(condition) {
        this.elem.style.display = condition;
        return this
    }
    innerText(text) {
        this.elem.innerText = text
        return this
    }
    addEventListener(func) {
        this.elem.addEventListener('click', func)
        return this
    }
    color(color) {
        this.elem.style.color = color
        return this
    }
    fontSize(size) {
        this.elem.style.fontSize = size
        return this
    }
}

const isActiveDiv = new MyCustomElement("div").addClass("isActiwe").appendTo(product).display("none").innerText("Is Active").color("lightgreen").fontSize("large")
const button = new MyCustomElement("button").addClass("btn").appendTo(product).display("none").innerText("🗑️")

productLive[0].innerText = `${history.state.Name}`;
productLive[1].innerHTML = `<img src="../imgs/${history.state.Name}.png" width="200px" alt="">`;
productLive[2].innerText = `${history.state.Price}`;

if (history.state.isActive === true) {
    productLive[3].innerHTML = ''
    isActiveDiv.display('block')
    button.display("block")
    history.state.isActive = true
    console.log(history.state.isActive);
}

productLive[3].addEventListener("click", () => {
    productLive[3].innerHTML = ''
    isActiveDiv.display('block')
    button.display("block")
    history.state.isActive = true
    console.log(history.state.isActive);

})

function btnHandler(params) {
    productLive[3].innerHTML = '<button class="product__btn">Add to cart</button>'
    isActiveDiv.display('none')
    button.display("none")
    history.state.isActive = false
    console.log(history.state.isActive);
}

button.addEventListener(btnHandler)