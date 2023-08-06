var x = "ds";

// if (x < 10)
// {
//     console.log("hi omar ");
// }
// else if (x > 12)
// {
//     console.log("hi ddddd ");

// }else
// {
//     console.log("hi ");

// }
// switch (x)
// {
// case 5:
// console.log("yes i am frist")
// break;
// case 10:
// console.log("yes i am 2")
// break;
// case 54:
// console.log("yes i am 3")
// break;
// default:
// console.log("noooooooooo")

// }

// function calcproduct (price , ads , tax , profit){
//     var price1 = price + ads ;
//     var price2 = price1 - (price1 * tax);
//     var price3 = price2 + profit ;
//     console.log(price3);
// }

// calcproduct (1000 , 300 , .10 , 400);

// function addElment (elmentNumber , elmentId)
// {
//     var cartoona = "";
//     for (i = 0; i < elmentNumber ; i++ )
//     {
//         cartoona += "<h1> I CAN DO IT </h1>";
//     }
//     document.getElementById(elmentId).innerHTML=cartoona;

// }

// addElment (5 , "repetCol");
// addElment (5 , "repetCo");
// addElment (5 , "repetC");

// var cartoona = "";

// for (var i = 1900 ; i <= 2023 ; i++ ){

//     cartoona += "<option>"+i+"</option> ";
// }
// document.getElementById("demo").innerHTML = cartoona;

// var sapse = {
//     date:date,
//     name:"",
//     prise:50,

// }
// console.log(sapse["date"] );

// var  x = 5;

//   var  y = 4;

// if (x > y) {
//     console.log("welcome omar")
// };

//     var emploty ={

//         x: function(){
//             console.log("omar")
//         },
//     };

// emploty.x();

// var allEmloye = [
// {
//     name : "om ar",
//     age : 25,
//     salrey : 200000
// },
// {
//         name : "omasdar",
//     age : 25,
//     salrey : 200000
// },
// {
//         name : "ds",
//     age : 25,
//     salrey : 200000
// }
// ];
// for (var i=0 ; i<allEmloye.length ; i++ ) {

//     console.log("welcom ya " + allEmloye[i].name + " youer age is " + allEmloye[i].age +" and youer slarey is " + allEmloye[i].salrey)

// }

var productName = document.getElementById("pn");
var productPrice = document.getElementById("pp");
var productCategory = document.getElementById("pc");
var productDescription = document.getElementById("pd");
var addProduct = document.getElementById("addp");

var allProduct = [];

if (localStorage.getItem("addproducts") != null) {
  allProduct = JSON.parse(localStorage.getItem("addproducts"));
  displayAllProduct();
}

// addNewElement

function addNewElement() {
  var product = {
    name: productName.value,
    price: productPrice.value,
    category: productCategory.value,
    description: productDescription.value,
  };

  if (
    validateName() &&
    validatePrice() &&
    validateCategory() &&
    validateDescription() == true
  ) {
    allProduct.push(product);
    localStorage.setItem("addproducts", JSON.stringify(allProduct));
    clearForm();
    displayAllProduct();
  } else {
    alert("please Enter Data");
  }
}

// clearForm

function clearForm() {
  productName.value = "";
  productPrice.value = "";
  productCategory.value = "";
  productDescription.value = "";
}

// displayAllProduct

function displayAllProduct() {
  var cartona = "";
  for (i = 0; i < allProduct.length; i++) {
    cartona += `<tr>
              <td>${allProduct[i].name}</td>
              <td>${allProduct[i].price}</td>
              <td>${allProduct[i].category}</td>
              <td>${allProduct[i].description}</td>
              <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button></td>
              <td><button onclick="updateProduct (${i})" class="btn btn-outline-primary">Update</button></td>
            </tr>`;
  }
  document.getElementById("tableRow").innerHTML = cartona;
}

// deleteProduct

function deleteProduct(index) {
  allProduct.splice(index, 1);
  localStorage.setItem("addproducts", JSON.stringify(allProduct));
  displayAllProduct();
}

// updateProduct

function updateProduct(index) {
  productName.value = allProduct[index].name;
  productPrice.value = allProduct[index].price;
  productCategory.value = allProduct[index].category;
  productDescription.value = allProduct[index].description;

  addProduct.innerText = "Update";

  addProduct.onclick = function () {
    if (this.textContent.includes("Update")) {
      allProduct[index].name = productName.value;
      allProduct[index].price = productPrice.value;
      allProduct[index].category = productCategory.value;
      allProduct[index].description = productDescription.value;

      localStorage.setItem("addproducts", JSON.stringify(allProduct));
      clearForm();
      displayAllProduct();
      addProduct.innerText = "Add Product";
    } else {
      addNewElement();
    }
  };
}

// search product function

function search(searchInp) {
  cartona = "";

  for (var i = 0; i < allProduct.length; i++) {
    if (
      allProduct[i].name.toLowerCase().indexOf(searchInp.toLowerCase()) == 0 ||
      allProduct[i].price.includes(searchInp)
    ) {
      // console.log(allProduct[i].name);

      cartona += `
        <tr> 
          <td>${allProduct[i].name}</td>
          <td>${allProduct[i].price}</td>
          <td>${allProduct[i].category}</td>
          <td>${allProduct[i].description}</td>
          <td><button onclick="deleteProduct(${i})" class="btn btn-outline-secondary">Delete</button></td>
          <td><button onclick="updateProduct (${i})" class="btn btn-outline-secondary">Update</button></td>

        </tr>
      `;
    }
  }
  document.getElementById("tableRow").innerHTML = cartona;
}

/* VALIDA INPUT FORM */

function validateName() {
  var regExp = /^[a-z]{3,10}$/; 
  return regExp.test(productName.value);
}

function validatePrice() {
  var regExp = /^[1-9][0-9]*$/;
  return regExp.test(productPrice.value);
}

function validateCategory() {
  var regExp = /^[a-z]{3,10}$/;
  return regExp.test(productCategory.value);
}

function validateDescription() {
  var regExp = /^[a-z]{3,100}$/;
  return regExp.test(productDescription.value);
}

/* VALIDA INPUT FORM */
