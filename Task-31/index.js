const categories = [
  {id: 1, category: "Toys"} , {id: 2, category: "Sports"} , {id: 3, category: "Toys"},
  {id: 4,category: "Grocery"} , {id: 5, category: "Garden"}
];  
const products = [
  {id: 1, category_id: 2, name: "Eggplant - Asian", price: 12,
    description:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  },
  { id: 2, category_id: 5, name: "Jagermeister", price: 567,
    description:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  },
  { id: 3, category_id: 2, name: "Wine - Lou Black Shiraz", price: 745,
    description:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
  },
  { id: 4, category_id: 3, name: "Beef - Ox Tongue", price: 876,
    description:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  { id: 5, category_id: 3, name: "Beef - Bones, Marrow", price: 546,
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  { id: 6, category_id: 2, name: "Appetizer - Shrimp Puff", price: 867,
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
  },
  { id: 7, category_id: 4, name: "Appetizer - Shrimp Puff", price: 231,
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  { id: 8, category_id: 1, name: "Ecolab - Ster Bac", price: 645,
    description: "Integer ac leo. Pellentesque ultrices mattis odio.",
  },
  { id: 9, category_id: 4, name: "Vegetable - Base", price: 234,
    description:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
  },
  { id: 10, category_id: 3, name: "Flour - Corn, Fine", price: 654,
    description:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
  },
  { id: 11, category_id: 1, name: "Beer - Guiness", price: 543,
    description:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  { id: 12, category_id: 4, name: "Napkin White", price: 454,
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  },
  { id: 13, category_id: 2, name: "Oil - Truffle, White", price: 556,
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  { id: 14, category_id: 5, name: "Wine - Puligny Montrachet A.", price: 231,
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
  },
  { id: 15, category_id: 5, name: "Tomatoes Tear Drop", price: 123,
    description:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
  }
];
const ulCategories = document.querySelector('#categories')
const ulProducts = document.querySelector("#products");
const ulDescription = document.querySelector("#description");
const button = document.querySelector("button");
const message = document.querySelector("#message");
const ordersBtn = document.querySelector('.orders');
const ordersBook = document.querySelector('.orders-book');
const itemInfo = document.querySelector('.item-info');
const deleteLocalStorage = document.querySelector('.delete');
const returnBtn = document.querySelector('.return');
const nothing = document.querySelector('.nothing')
const orderDescriotion = document.querySelector('.order-descriotion')
const buyBtn = document.querySelector('#buy-button')
var value = 0
for(i = 0; i < categories.length; i++) {
  categories[i] = document.querySelector(`[data-category-id = "${i+1}" ]`)
}
var liProducts1 = document.querySelector('[data-product-id = "1"]')
var liProducts2 = document.querySelector('[data-product-id = "2"]')
var liProducts3 = document.querySelector('[data-product-id = "3"]')
var liProducts4 = document.querySelector('[data-product-id = "4"]')
var liProducts5 = document.querySelector('[data-product-id = "5"]')
const form = document.querySelector('form')
const elements = form.elements;
const now = new Date()
const func = function visibling(product) {
  buyBtnBlock()
  ulProducts.style.visibility = 'visible'
  ulProducts.style.display = 'block'
  ulDescription.style.visibility = 'visible'
  orderDescriotionNone()
  itemInfo.style.display = 'block'
  itemInfo.style.visibility = 'visible'

  ulDescription.style.display = 'block'
  button.style.display = 'block'
  message.style.display = 'block'

  form1(product)
  buyBtn.addEventListener('click', () => {
    for(i = 1; i < categories.length; i++) {
      const li =  document.querySelector(`[data-product-id = "${i}"]`);
      li.style.visibility = 'hidden';
    }
    buyBtnNone()
    ulDescription.style.visibility = 'hidden'
    message.style.visibility = 'visible'
    formBlock()
    ordersBtn.style.visibility = 'visible'
  })
}
const funcHidding = function hidding(params) {
  ulDescription.style.visibility = 'hidden'
}
const func1 = function (params) {
  liProducts4.style.visibility = 'hidden'
  liProducts5.style.visibility = 'hidden'
  ulProducts.style.visibility = 'visible'
}
const visible = function () {
  itemInfoNone()
  for(i = 1; i < categories.length; i++) {
    const li =  document.querySelector(`[data-product-id = "${i}"]`);
    li.style.visibility = 'visible';
    ulProducts.style.visibility = 'visible';
    ulProducts.style.display = 'block';
  }
}
const hidden = function () {
  for(i = 1; i < categories.length; i++) {
    const li =  document.querySelector(`[data-category-id = "${i}"]`);
    li.style.visibility = 'hidden';
  }
}
const visibleCategory = function () {
  for(i = 1; i < categories.length + 1; i++) {
      const li =  document.querySelector(`[data-category-id = "${i}"]`);
      const ul =  document.querySelector('#categories');
      ul.style.visibility = 'visible';
      ul.style.display = 'block';
      li.style.visibility = 'visible';
      li.style.display = 'block';
  }
}
function deleteItesOrderDescriotion() {
  var deleteElement = orderDescriotion.querySelectorAll('ul');
  for (let i = 0; i < deleteElement.length; i++) {
    deleteElement[i].remove();
  }
}
function deleteItemsItemInfo() {
  var deleteElement = itemInfo.querySelectorAll('ul');
  for (let i = 0; i < deleteElement.length; i++) {
    deleteElement[i].remove();
  }
}
const categoriesNone = function () {
  ulCategories.style.display = 'none'
}
const itemInfoNone = function () {
  itemInfo.style.display = 'none'
}
const buyBtnNone = function () {
  buyBtn.style.display = 'none'
}
const messageNone = function () {
  message.style.display = 'none'
}
const productsNone = function () {
  ulProducts.style.display = 'none'
}
const descriptionNone = function () {
  ulDescription.style.display = 'none'
}
const formNone = function () {
  form.style.display = 'none'
}
const ordersBookNone = function () {
  ordersBook.style.display = 'none'
}
const returnBtnNone = function () {
  returnBtn.style.display = 'none'
}
const orderDescriotionNone = function () {
  orderDescriotion.style.display = 'none'
}
const categoriesBlock = function () {
  ulCategories.style.display = 'block'
}
const itemInfoBlock = function () {
  itemInfo.style.display = 'block'
}
const buyBtnBlock = function () {
  buyBtn.style.display = 'block'
}
const messageBlock = function () {
  message.style.display = 'block'
}
const productsBlock = function () {
  ulProducts.style.display = 'block'
}
const descriptionBlock = function () {
  ulDescription.style.display = 'block'
}
const formBlock = function () {
  form.style.display = 'block'
}
const ordersBookBlock = function () {
  ordersBook.style.display = 'block'
}
const returnBtnBlock = function () {
  returnBtn.style.display = 'block'
}
const orderDescriotionBlock = function () {
  orderDescriotion.style.display = 'block'
}
const firstCategoriHandler = (ev) => {
returnBtnBlock()
funcHidding()
visible()
message.style.visibility = 'hidden'
liProducts1.innerText = `${products[7].name}`
  liProducts1.addEventListener('click', () => {ulDescription.innerText = `${products[7].description}`
  func(products[7])
})
liProducts2.innerText = `${products[10].name}`
liProducts2.addEventListener('click', () => {ulDescription.innerText = `${products[10].description}`
func(products[10])
})
liProducts3.style.visibility = 'hidden'
func1();
}
const secondCategoriHandler = (ev) => {
  returnBtnBlock()
  funcHidding()
  visible()
  message.style.visibility = 'hidden'
  liProducts1.innerText = `${products[0].name}`
  liProducts1.addEventListener('click', () => {ulDescription.innerText = `${products[0].description}`
  func(products[0])
})
liProducts2.innerText = `${products[2].name}`
liProducts2.addEventListener('click', () => {ulDescription.innerText = `${products[2].description}`
func(products[2])
})
liProducts3.innerText = `${products[5].name}`
liProducts3.addEventListener('click', () => {ulDescription.innerText = `${products[5].description}`
func(products[5])
})
liProducts4.innerText = `${products[12].name}`
liProducts4.addEventListener('click', () => {ulDescription.innerText = `${products[12].description}`
func(products[12])
})
liProducts5.style.visibility = 'hidden'
ulProducts.style.visibility = 'visible';
}
const thirdCategoriHandler = (ev) => {
  returnBtnBlock()
  funcHidding()
  visible()
  message.style.visibility = 'hidden'
  liProducts1.innerText = `${products[3].name}`
  liProducts1.addEventListener('click', () => {ulDescription.innerText = `${products[3].description}`
  func(products[3])
})
liProducts2.innerText = `${products[4].name}`
liProducts2.addEventListener('click', () => {ulDescription.innerText = `${products[4].description}`
func(products[4])
})
liProducts3.innerText = `${products[9].name}`
liProducts3.addEventListener('click', () => { ulDescription.innerText = `${products[7].description}` 
func(products[7])
})
func1();
}
const fourthCategoriHandler = (ev) => {
  returnBtnBlock()
  funcHidding()
  visible()
  message.style.visibility = 'hidden'
  liProducts1.innerText = `${products[6].name}`
  liProducts1.addEventListener('click', () => { ulDescription.innerText = `${products[6].description}` 
  func(products[6])
})
liProducts2.innerText = `${products[8].name}`
liProducts2.addEventListener('click', () => { ulDescription.innerText = `${products[8].description}` 
func(products[8])
})
liProducts3.innerText = `${products[11].name}`
liProducts3.addEventListener('click', () => { ulDescription.innerText = `${products[1].description}` 
func(products[1])
})
func1();
}
const fivethCategoriHandler = (ev) => {
  returnBtnBlock()
  funcHidding()
  visible()
  message.style.visibility = 'hidden'
  liProducts1.innerText = `${products[1].name}`
  liProducts1.addEventListener('click', () => { ulDescription.innerText = `${products[1].description}` 
  func(products[1])
})
liProducts2.innerText = `${products[13].name}`
liProducts2.addEventListener('click', () => { ulDescription.innerText = `${products[13].description}` 
func(products[13])
})
liProducts3.innerText = `${products[14].name}`
liProducts3.addEventListener('click', () => { ulDescription.innerText = `${products[14].description}` 
func(products[14])
})
func1();
}
const buttonOrdersHandler = (ev) => {
  returnBtnBlock()
  hidden()
  ulProducts.style. visibility = 'hidden'
  productsNone()
  itemInfoNone()
  categoriesNone()
  messageNone()
  descriptionNone()
  ordersBookBlock()
  ordersBtn.style.pointerEvents = 'none'
  const ul = document.createElement('ul')
  ordersBook.appendChild(ul)
  for (i=0; i < localStorage.length; i++) {
      const ordersBookLi = document.createElement('li')
      const deleteBtn = document.createElement('button')
      const order = JSON.parse(localStorage.getItem(localStorage.key(i)));
      ul.appendChild(ordersBookLi)
      ordersBookLi.innerText = 'Date: '+ order[5] + ' ' + 'Price: ' + order[8] + ' ' + '<= TAP ON ME'
      console.log(order);
      ul.appendChild(deleteBtn)
      deleteBtn.innerText = 'Delete Order'
      returnBtn.addEventListener("click", () => {
          ul.style.display = 'none'
      })
      deleteBtn.addEventListener('click', () => {  
          localStorage.removeItem(localStorage.key(localStorage.length - 1))
          ordersBookLi.style.display = 'none'
          deleteBtn.style.display = 'none'
      })    
      ordersBookLi.addEventListener ("click", () => { 
          ordersBookLi.style.pointerEvents = 'none'
          orderDescriotionBlock()
          ulProducts.style.display = 'none'  
          itemInfo.style.display = 'block' 
          const ul = document.createElement('ul')
          const li = document.createElement('li')
          orderDescriotion.appendChild(ul)    
          ul.appendChild(li)  
          li.innerText = 'Name: '+ order[0] + ' ' + 'City: ' + order[1] + ' ' + 'Post: '+ order[2] + ' ' + 'Qty: ' + order[3] + ' ' + 'Payment Type: '+ order[4]
          const ul1 = document.createElement('ul')
          const li1 = document.createElement('li')
          itemInfo.appendChild(ul1)   
          ul1.appendChild(li1)    
          li1.innerText = 'Item Name: '+ order[6] + ' ' + 'Description: ' + order[7]
          deleteBtn.addEventListener('click', () => {  
              li.style.display = 'none'  
              li1.style.display = 'none'
          })
      })
  }
}
const buttonReturnHandler = (ev) => {
visibleCategory()
ordersBookNone()
orderDescriotionNone()
returnBtnNone()
formNone()
descriptionNone()
productsNone()
messageNone()
itemInfoNone()
deleteItesOrderDescriotion()
deleteItemsItemInfo()
ordersBtn.style.pointerEvents = 'all'
}
categories[0].addEventListener("click", firstCategoriHandler);
categories[1].addEventListener("click", secondCategoriHandler);
categories[2].addEventListener("click", thirdCategoriHandler);
categories[3].addEventListener("click", fourthCategoriHandler);
categories[4].addEventListener("click", fivethCategoriHandler);
ordersBtn.addEventListener("click", buttonOrdersHandler)
returnBtn.addEventListener("click", buttonReturnHandler)
deleteLocalStorage.addEventListener("click", () => {
    localStorage.clear()
})

const form1 = function (product) {
value++
form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  if(elements.name.value.startsWith(' ')) {
    elements.name.value.trim()
  }
  if(elements.name.value === '') {
    const paragraph = document.createElement('p')
    form.appendChild(paragraph)
    paragraph.innerText = 'Вы не ввели ФИО!'
    console.log('Пустое поле');
    return
  }
  if(elements.city.value === '') {
      const paragraph = document.createElement('p')
      form.appendChild(paragraph)
      paragraph.innerText = 'Вы не выбрали город!'
      console.log('Пустое поле');
      return
    }
    if(elements.NovaPoshta.value === '') {
      const paragraph = document.createElement('p')
      form.appendChild(paragraph)
      paragraph.innerText = 'Вы не выюрали отделение Новой Почты!'
      console.log('Пустое поле');
      return
    }
    if(elements.numberOfItems.value === '') {
      const paragraph = document.createElement('p')
      form.appendChild(paragraph)
      paragraph.innerText = 'Вы не указали кол-во товаров!'
      console.log('Пустое поле');
      return
    }
    if(elements.payment.value === '') {
      const paragraph = document.createElement('p')
      form.appendChild(paragraph)
      paragraph.innerText = 'Укажите способ оплаты!'
      console.log('Пустое поле');
      return
    }
    const order = {
      Name: form.elements.name.value,
      City: form.elements.city.value,
      NumberOfPost: form.elements.NovaPoshta.value,
      NumberOfItems: form.elements.numberOfItems.value,
      Payment: form.elements.payment.value,
      Date: `${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()}`,
      Item: product.name,
      description: product.description,
      Price: product.price * form.elements.numberOfItems.value,
    }
  console.log(order);
  form.submit()
  const p = document.createElement('p')
  form.appendChild(p)
  localStorage.setItem(`${order.Item}`, JSON.stringify([order.Name, order.City, order.NumberOfPost, order.NumberOfItems, order.Payment, order.Date, order.Item, order.description, order.Price]))
  p.innerHTML = `<pre>${JSON.stringify(order)}<pre>`
  form.style.visibility = 'hidden'
})
}