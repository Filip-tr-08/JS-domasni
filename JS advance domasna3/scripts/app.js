"use strict";

let elements = {
  body: document.getElementsByTagName("body")[0],
  prName: document.getElementById("product"),
  prCategory: document.getElementById("category"),
  prDiscount: document.getElementById("discount"),
  prPrice: document.getElementById("price"),
  arrayProducts: [],
  prCounter: document.getElementById("counter"),
  btn: document.getElementById("sub"),
  p: document.createElement("p"),
  originalList: document.getElementById("originalList"),
  sortedList: document.getElementById("sortedList"),
  foodList: document.getElementById("foodList"),
  greater20List: document.getElementById("greater20List"),
  vowelList: document.getElementById("vowelList"),
  greater20: document.getElementById("greater20"),
  food: document.getElementById("food"),
  averageBtn: document.getElementById("average"),
  vowel: document.getElementById("vowel"),
  sort: document.getElementById("sort"),
  original: document.getElementById("original"),
  div1: document.getElementsByTagName("div")[0],
  div2: document.getElementsByTagName("div")[1],
  div3: document.getElementsByTagName("div")[2],
  div4: document.getElementsByTagName("div")[3],
  paragraph: document.getElementsByTagName("p")[0],
};

function Product(name, category, hasDiscount, price) {
  this.name = name;
  this.category = category;
  this.hasDiscount = hasDiscount;
  this.price = price;
}

let basicFunctions = {
  numberProducts: function (arrayProducts) {
    if (arrayProducts === 15) {
      elements.greater20.classList.remove("hidden");
      elements.food.classList.remove("hidden");
      elements.averageBtn.classList.remove("hidden");
      elements.vowel.classList.remove("hidden");
      elements.sort.classList.remove("hidden");
      elements.original.classList.remove("hidden");
      elements.btn.classList.add("hidden");
      elements.div1.classList.add("hidden");
      elements.div2.classList.add("hidden");
      elements.div3.classList.add("hidden");
      elements.div4.classList.add("hidden");
      elements.paragraph.textContent =
        "Yess you did it you inserted 15 products";
    }
  },
  empty: function (name, category, price, discount) {
    name.value = "";
    category.value = "";
    price.value = "";
    discount.checked = false;
  },
  emptyList: function (ul) {
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  },
  create: function () {
    elements.p.textContent = "";
    let product = new Product(
      elements.prName.value,
      elements.prCategory.value,
      elements.prDiscount.checked
        ? (elements.prDiscount.value = true)
        : (elements.prDiscount.value = false),
      elements.prPrice.value
    );
    elements.arrayProducts.push(product);
    elements.prCounter.textContent = ` There are ${elements.arrayProducts.length} products now`;
    basicFunctions.numberProducts(elements.arrayProducts.length);
    console.log(elements.arrayProducts);
  },
  validate: function (name, category, price) {
    if (!name.value || !category.value || !price.value) {
      elements.p.textContent = "Please fill all fields";
      elements.body.append(elements.p);
    } else {
      basicFunctions.create();
    }
  },
  sumarry: function (sum, price) {
    return (sum = parseInt(sum + price));
  },
  checkName: function (name) {
    let vowels = ["a", "e", "i", "o", "u"];
    let flag = false;
    for (let v of vowels) {
      if (name.charAt(0) == v) {
        flag = true;
      }
    }
    if (flag) {
      return true;
    }
  },
};

let higherFunctions = {
  forE: function (arr, ul) {
    arr.forEach((element) => {
      let li = document.createElement("li");
      li.textContent = `Name: ${element.name} --- Category: ${element.category} --- Price: ${element.price}$ --- Has Discount:${element.hasDiscount} `;
      ul.appendChild(li);
    });
    elements.body.appendChild(ul);
  },
  copyArray: function (array) {
    let copied = [];
    array.forEach((x) => copied.push(x));
    return copied;
  },
  sorting: function (arrayProducts) {
    let productsCopy = higherFunctions.copyArray(arrayProducts);
    productsCopy.sort((p1, p2) => parseInt(p1.price) - parseInt(p2.price));
    higherFunctions.forE(productsCopy, elements.sortedList);
  },
  g20: function (arrayProducts) {
    let array20 = arrayProducts.filter((pro) => parseInt(pro.price) > 20);
    if (array20.length == 0) {
      elements.p.textContent =
        "There are not any products with price greater than 20$";
      elements.body.appendChild(elements.p);
    } else {
      higherFunctions.forE(array20, elements.greater20List);
      elements.p.textContent = "";
    }
  },
  foodDiscount: function (arrayProducts) {
    let arrayFoods = arrayProducts
      .filter((pro) => pro.category.toLowerCase() === "food")
      .filter((pro) => pro.hasDiscount === true);
    if (arrayFoods.length == 0) {
      elements.p.textContent = "There are not any products with category Food";
      elements.body.appendChild(elements.p);
    } else {
      arrayFoods.forEach((pro) => {
        let liFoods = document.createElement("li");
        liFoods.textContent = `Name: ${pro.name}`;
        foodList.appendChild(liFoods);
      });
      elements.body.appendChild(elements.foodList);
      elements.p.textContent = "";
    }
  },
  averagePrice: function (arrayProducts) {
    let arrayPrice = arrayProducts
      .filter((pro) => pro.hasDiscount === true)
      .map((pro) => parseInt(pro.price));
    if (arrayPrice.length == 0) {
      elements.p.textContent = "There are not any products on discount";
      elements.body.appendChild(elements.p);
    } else {
      let sumPrice = arrayPrice.reduce(basicFunctions.sumarry, 0);
      let average = sumPrice / arrayPrice.length;
      elements.p.textContent = `${average}`;
      elements.body.appendChild(elements.p);
    }
  },
  checkNames: function (arrayProducts) {
    let nameArray = arrayProducts
      .filter((pro) => basicFunctions.checkName(pro.name) == true)
      .filter((pro) => pro.hasDiscount === false);
    if (nameArray.length == 0) {
      elements.p.textContent =
        "There are not any products are of discount and start with a vowel";
      elements.body.appendChild(elements.p);
    } else {
      nameArray.forEach((pro) => {
        let liNames = document.createElement("li");
        liNames.textContent = `Name: ${pro.name} --- Price: ${pro.price}`;
        elements.vowelList.appendChild(liNames);
      });
      elements.body.appendChild(elements.vowelList);
      elements.p.textContent = "";
    }
  },
};

elements.btn.addEventListener("click", (e) => {
  e.preventDefault();
  basicFunctions.validate(
    elements.prName,
    elements.prCategory,
    elements.prPrice
  );
  basicFunctions.empty(
    elements.prName,
    elements.prCategory,
    elements.prPrice,
    elements.prDiscount
  );
});

elements.original.addEventListener("click", function (e) {
  e.preventDefault();
  basicFunctions.emptyList(elements.originalList);
  higherFunctions.forE(elements.arrayProducts, elements.originalList);
  elements.p.textContent = "";
  elements.sortedList.classList.add("hidden");
  elements.foodList.classList.add("hidden");
  elements.greater20List.classList.add("hidden");
  elements.vowelList.classList.add("hidden");
  elements.originalList.classList.remove("hidden");
});

elements.sort.addEventListener("click", (e) => {
  e.preventDefault();
  basicFunctions.emptyList(elements.sortedList);
  higherFunctions.sorting(elements.arrayProducts);
  elements.p.textContent = "";
  elements.sortedList.classList.remove("hidden");
  elements.foodList.classList.add("hidden");
  elements.greater20List.classList.add("hidden");
  elements.vowelList.classList.add("hidden");
  elements.originalList.classList.add("hidden");
});

elements.greater20.addEventListener("click", (e) => {
  e.preventDefault();
  basicFunctions.emptyList(elements.greater20List);
  higherFunctions.g20(elements.arrayProducts);
  elements.sortedList.classList.add("hidden");
  elements.foodList.classList.add("hidden");
  elements.greater20List.classList.remove("hidden");
  elements.vowelList.classList.add("hidden");
  elements.originalList.classList.add("hidden");
});

elements.food.addEventListener("click", (e) => {
  e.preventDefault();
  basicFunctions.emptyList(elements.foodList);
  higherFunctions.foodDiscount(elements.arrayProducts);
  elements.sortedList.classList.add("hidden");
  elements.foodList.classList.remove("hidden");
  elements.greater20List.classList.add("hidden");
  elements.vowelList.classList.add("hidden");
  elements.originalList.classList.add("hidden");
});

elements.averageBtn.addEventListener("click", (e) => {
  e.preventDefault();
  higherFunctions.averagePrice(elements.arrayProducts);
  elements.sortedList.classList.add("hidden");
  elements.foodList.classList.add("hidden");
  elements.greater20List.classList.add("hidden");
  elements.vowelList.classList.add("hidden");
  elements.originalList.classList.add("hidden");
});

elements.vowel.addEventListener("click", (e) => {
  e.preventDefault();
  basicFunctions.emptyList(elements.vowelList);
  higherFunctions.checkNames(elements.arrayProducts);
  elements.sortedList.classList.add("hidden");
  elements.foodList.classList.add("hidden");
  elements.greater20List.classList.add("hidden");
  elements.vowelList.classList.remove("hidden");
  elements.originalList.classList.add("hidden");
});
