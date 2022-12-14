const productsHTML = document.querySelector(".products")
const productCard = document.querySelector(".product")
const productsHTMLLive = productsHTML.children
const productCardLive = productCard.children

const productActive = document.querySelectorAll(".product__active")
const productNotActive = document.querySelectorAll(".product__not__active")


const products = [
{Name : "Jameson", Price : 17 + "$", IsActive : false},
{Name : "Jagermeister", Price : 20 + "$", IsActive : false},
{Name : "JimBeam", Price : 15 + "$", IsActive : false}
]

console.log(history.state);

for (let y = 0; y < productsHTMLLive.length; y++) {
    const state = {"Name": null, "Price": null, "isActive": false}
    for (let i = 0; i < products.length; i++) {
        productsHTMLLive[i].children[0].innerHTML = `<div class="product__title">${products[i].Name}</div>`; 
        productsHTMLLive[i].children[2].innerHTML = `<div class="product__price">${products[i].Price}</div>`; 
        productsHTMLLive[i].children[1].innerHTML = `<img src="../imgs/${products[i].Name}.png" width="200px" alt="">`; 
        productsHTMLLive[i].children[3].addEventListener("click", () => {
            productsHTMLLive[i].children[3].innerHTML = ''
            productActive[i].style.display = "block"
            productNotActive[i].style.display = "block"
            state.isActive = true
        })
        productNotActive[i].addEventListener("click", () => {
            productsHTMLLive[i].children[3].innerHTML = '<button class="product__btn">Add to cart</button>'
            productActive[i].style.display = "none"
            productNotActive[i].style.display = "none"
            state.isActive = false
        })
    }
    const productImg = productsHTMLLive[y].children[1]
    state.Name = productsHTMLLive[y].children[0].textContent;
    state.Price = productsHTMLLive[y].children[2].textContent;
    const title = ''
    const url = 'product.html'
    productImg.addEventListener('click', () => {
        history.pushState(state, title, url)
        window.location.reload()
    })
}