const categories = [
  {id: 1, category: "Toys"} , {id: 2, category: "Sports"} , {id: 3, category: "Toys"},
  {id: 4,category: "Grocery"} , {id: 5, category: "Garden"}
];
  
const products = [
  {id: 1, category_id: 2, name: "Eggplant - Asian",
    description:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  },
  { id: 2, category_id: 5, name: "Jagermeister",
    description:
      "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  },
  { id: 3, category_id: 2, name: "Wine - Lou Black Shiraz",
    description:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
  },
  { id: 4, category_id: 3, name: "Beef - Ox Tongue",
    description:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  { id: 5, category_id: 3, name: "Beef - Bones, Marrow",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  },
  { id: 6, category_id: 2, name: "Appetizer - Shrimp Puff",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
  },
  { id: 7, category_id: 4, name: "Appetizer - Shrimp Puff",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  { id: 8, category_id: 1, name: "Ecolab - Ster Bac",
    description: "Integer ac leo. Pellentesque ultrices mattis odio.",
  },
  { id: 9, category_id: 4, name: "Vegetable - Base",
    description:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
  },
  { id: 10, category_id: 3, name: "Flour - Corn, Fine",
    description:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
  },
  { id: 11, category_id: 1, name: "Beer - Guiness",
    description:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  { id: 12, category_id: 4, name: "Napkin White",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  },
  { id: 13, category_id: 2, name: "Oil - Truffle, White",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  { id: 14, category_id: 5, name: "Wine - Puligny Montrachet A.",
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
  },
  { id: 15, category_id: 5, name: "Tomatoes Tear Drop",
    description:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
  }
];

const ulProducts = document.querySelector("#products");
const ulDescription = document.querySelector("#description");
const button = document.querySelector("button");
const message = document.querySelector("#message");

categories[0] = document.querySelector('[data-category-id = "1"]')
categories[1] = document.querySelector('[data-category-id = "2"]')
categories[2] = document.querySelector('[data-category-id = "3"]')
categories[3] = document.querySelector('[data-category-id = "4"]')
categories[4] = document.querySelector('[data-category-id = "5"]')

var liProducts1 = document.querySelector('[data-product-id = "1"]')
var liProducts2 = document.querySelector('[data-product-id = "2"]')
var liProducts3 = document.querySelector('[data-product-id = "3"]')
var liProducts4 = document.querySelector('[data-product-id = "4"]')
var liProducts5 = document.querySelector('[data-product-id = "5"]')

const func = function visibling(params) {
  ulDescription.style.visibility = 'visible'
  button.style.visibility = 'visible'
  button.addEventListener('click', () => {
    ulProducts.style.visibility = 'hidden'
    button.style.visibility = 'hidden'
    ulDescription.style.visibility = 'hidden'
    message.style.visibility = 'visible'
  })
}
const func1 = function (params) {
  liProducts4.style.visibility = 'hidden'
  liProducts5.style.visibility = 'hidden'
  ulProducts.style.visibility = 'visible';
}

const firstCategoriHandler = (ev) => {
    liProducts1.innerText = `${products[7].name}`
      liProducts1.addEventListener('click', () => {ulDescription.innerText = `${products[7].description}`
        func()
        })
  liProducts2.innerText = `${products[10].name}`
    liProducts2.addEventListener('click', () => {ulDescription.innerText = `${products[10].description}`
      func()
      })
  liProducts3.style.visibility = 'hidden'
  func1();
}

const secondCategoriHandler = (a) => {
  liProducts1.innerText = `${products[0].name}`
    liProducts1.addEventListener('click', () => {ulDescription.innerText = `${products[0].description}`
      func()
      })
  liProducts2.innerText = `${products[2].name}`
    liProducts2.addEventListener('click', () => {ulDescription.innerText = `${products[2].description}`
      func()
      })
  liProducts3.innerText = `${products[5].name}`
    liProducts3.addEventListener('click', () => {ulDescription.innerText = `${products[5].description}`
      func()
      })
  liProducts4.innerText = `${products[12].name}`
    liProducts4.addEventListener('click', () => {ulDescription.innerText = `${products[12].description}`
      func()
      })
  liProducts5.style.visibility = 'hidden'
  ulProducts.style.visibility = 'visible';
}
const thirdCategoriHandler = (ev) => {
  liProducts1.innerText = `${products[3].name}`
    liProducts1.addEventListener('click', () => {ulDescription.innerText = `${products[3].description}`
      func()
      })
  liProducts2.innerText = `${products[4].name}`
    liProducts1.addEventListener('click', () => {ulDescription.innerText = `${products[4].description}`
      func()
      })
  liProducts3.innerText = `${products[9].name}`
    liProducts1.addEventListener('click', () => { ulDescription.innerText = `${products[7].description}` 
      func()
      })
  func1();
}
const fourthCategoriHandler = (ev) => {
  liProducts1.innerText = `${products[6].name}`
    liProducts1.addEventListener('click', () => { ulDescription.innerText = `${products[6].description}` 
      func()
      })
  liProducts2.innerText = `${products[8].name}`
    liProducts1.addEventListener('click', () => { ulDescription.innerText = `${products[8].description}` 
      func()
      })
  liProducts3.innerText = `${products[11].name}`
    liProducts1.addEventListener('click', () => { ulDescription.innerText = `${products[1].description}` 
      func()
      })
  func1();
}
const fivethCategoriHandler = (ev) => {
  liProducts1.innerText = `${products[1].name}`
    liProducts1.addEventListener('click', () => { ulDescription.innerText = `${products[1].description}` 
      func()
      })
  liProducts2.innerText = `${products[13].name}`
    liProducts1.addEventListener('click', () => { ulDescription.innerText = `${products[13].description}` 
      func()
      })
  liProducts3.innerText = `${products[14].name}`
    liProducts1.addEventListener('click', () => { ulDescription.innerText = `${products[14].description}` 
      func()
      })
  func1();
}

categories[0].addEventListener("click", firstCategoriHandler);
categories[1].addEventListener("click", secondCategoriHandler);
categories[2].addEventListener("click", thirdCategoriHandler);
categories[3].addEventListener("click", fourthCategoriHandler);
categories[4].addEventListener("click", fivethCategoriHandler)