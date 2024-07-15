async function allproduct() {
  let data1 = "";
  let response = await axios.get("https://fakestoreapi.com/products?limit=4");
  response.data.forEach((items) => {
    data1 += `<div class ="col-sm-3" id="home_product">
                <div class="card">
                  <img class="card-img-top height p-4" src="${
                    items.image
                  }" alt="Card image">
                  <div class="card-body text-center">
                    <h4 class="card-title">${items.title.slice(0, 15)}</h4>
                    <p class="card-text font-size-09rem tertiary_color">${
                      items.category
                    }</p>
                    <div>
                    <span class="material-symbols-rounded secondary_color ">
                    star
                    </span>
                    <span class="material-symbols-rounded secondary_color ">
                    star
                    </span>
                    <span class="material-symbols-rounded secondary_color ">
                    star
                    </span>
                    <span class="material-symbols-rounded global-color5">
                    star
                    </span>
                    <span class="material-symbols-rounded global-color5">
                    star
                    </span>
                    </div>
                    <a href="#"  onclick="single_detail(${
                      items.id
                    })"class="btn btn-primary1 d-flex flex-fill align-items-center  justify-content-center">Read More <span class="material-symbols-rounded"> 
                    navigate_next
                    </span></a>
                  </div>
                </div>
              </div>`;
  });
  document.getElementById("all_data").innerHTML = data1;
}
allproduct();

// all product shown on product page

async function allproduct_product_page() {
  let data1 = "";
  let response = await axios.get("https://fakestoreapi.com/products");
  response.data.forEach((items) => {
    data1 += `<div class ="col-sm-3" id="home_product">
                <div class="card">
                  <img class="card-img-top height p-4" src="${
                    items.image
                  }" alt="Card image">
                  <div class="card-body text-center">
                    <h4 class="card-title">${items.title.slice(0, 15)}</h4>
                    <p class="card-text font-size-09rem tertiary_color">${
                      items.category
                    }</p>
                    <div>
                    <span class="material-symbols-rounded secondary_color ">
                    star
                    </span>
                    <span class="material-symbols-rounded secondary_color ">
                    star
                    </span>
                    <span class="material-symbols-rounded secondary_color ">
                    star
                    </span>
                    <span class="material-symbols-rounded global-color5">
                    star
                    </span>
                    <span class="material-symbols-rounded global-color5">
                    star
                    </span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center pt-4">
                      <div>
                        <a href="#"  onclick="single_detail(${
                          items.id
                        })"class="btn btn-primary1 d-flex flex-fill align-items-center  justify-content-between ">Read More 
                        <span class="material-symbols-rounded"> 
                        navigate_next
                        </span></a>
                        </div>
                        <div class="pr-2">
                          <span class="material-symbols-rounded"  onclick = "addtocart(${
                            items.id
                          })" >
                          shopping_cart
                        </span>
                        </div>
                      </div>
                  </div>
                </div>
              </div>`;
  });
  document.getElementById("all_data_product").innerHTML = data1;
}
allproduct_product_page();

//  all category in dropdown

async function getAllCategory() {
  let cat_data = "";
  let cat_res = await axios.get("https://fakestoreapi.com/products/categories");
  cat_res.data.forEach((items) => {
    cat_data += `<a class="dropdown-item" href="#" onclick="sortCategory(this.innerText)">${items}</a>`;
  });
  document.getElementById("cat_dropdown").innerHTML = cat_data;
}
getAllCategory();

//  category sorting

async function sortCategory(sorted_category) {
  let sort_data = "";
  let sort_response = await axios.get(
    `https://fakestoreapi.com/products/category/${sorted_category}`
  );
  sort_response.data.forEach((items) => {
    sort_data += `<div class ="col-sm-3" id="home_product">
    <div class="card">
      <img class="card-img-top height p-4" src="${
        items.image
      }" alt="Card image">
      <div class="card-body text-center">
        <h4 class="card-title">${items.title.slice(0, 15)}</h4>
        <p class="card-text font-size-09rem tertiary_color">${
          items.category
        }</p>
        <div>
        <span class="material-symbols-rounded secondary_color ">
        star
        </span>
        <span class="material-symbols-rounded secondary_color ">
        star
        </span>
        <span class="material-symbols-rounded secondary_color ">
        star
        </span>
        <span class="material-symbols-rounded global-color5">
        star
        </span>
        <span class="material-symbols-rounded global-color5">
        star
        </span>
        </div>
        <a href="#"  onclick="single_detail(${
          items.id
        })"class="btn btn-primary1 d-flex flex-fill align-items-center  justify-content-center">Read More <span class="material-symbols-rounded"> 
        navigate_next
        </span></a>
      </div>
    </div>
  </div>`;
  });
  document.getElementById("all_data_product").innerHTML = sort_data;
}

//  to show category wise data on product page

let pid = "";
async function single_detail(product_id) {
  pid = product_id;
  let single_response = await axios.get(
    `https://fakestoreapi.com/products/${pid}`
  );
  localStorage.setItem(
    "single_product_data",
    JSON.stringify(single_response.data)
  );
  window.location = "singleproduct.html";
}
async function newpage() {
  let data = localStorage.getItem("single_product_data");
  if (data != null) {
    result = JSON.parse(data);
  } else {
    result = null;
  }
  // let funpre = result.data
  let str = `<div class ="col-sm-6">
                <div class="row">
                  <div class="col-sm-2">
                    <div class="row py-5 align-items-center">
                      <div class="col-sm-12 p-3">
                        <img class="card-img-top" src="${result.image}" alt="Card image">
                      </div>
                      <div class="col-sm-12 p-3" >
                        <img class="card-img-top" src="${result.image}" alt="Card image">
                      </div>
                      <div class="col-sm-12 p-3">
                        <img class="card-img-top" src="${result.image}" alt="Card image">
                      </div>  
                    </div>

                </div>
                <div class="col-sm-10 p-5">
                <img class="card-img-top" src="${result.image}" alt="Card image">

                </div>
                </div>
             </div> 
             <div class ="col-sm-6">    
              <div class="card">
                  <div class="card-body">
                      <h4 class="card-title">${result.title}</h4>  
                      <p class="card-text">${result.category}</p>
                      <p class="card-text">${result.description}</p>
                      <p class="card-text">$${result.price}</p>
                      <p class="card-text">${result.rating.rate}</p>
                      <p class="card-text">${result.rating.count}</p>
                  </div>
                  <div class ="p-3">
                    <button class = "btn btn-danger" onclick = "addtocart(${result.id})">Add to Cart</button>
                  </div>
              </div>
            </div>`;
  document.getElementById("single_data_newPage").innerHTML = str;
}
newpage();

// add to cart function
// let coun = ;
function addtocart(cartId) {
  // console.log(cartId)
  let addResponse = localStorage.getItem("add_to_cart");
  if (addResponse != null) {
    data = JSON.parse(addResponse);
  } else {
    data = [];
  }
  let newarr = data.filter((items) => {
    return items == cartId;
  });
  if (newarr.length > 0) {
    alert("already aaded");
  } else {
    data.push(cartId);
  }
  console.log(newarr);
  localStorage.setItem("add_to_cart", JSON.stringify(data));
  countershow();
}

// to show thye counter onthe homepage
function countershow() {
  let addResponse = localStorage.getItem("add_to_cart");
  if (addResponse != null) {
    data = JSON.parse(addResponse);
  } else {
    data = [];
  }
  let count = data.length;
  // console.log(count)
  document.getElementById("number").innerHTML = count;
}
countershow();

// TO show cart data on the new page

function card_data() {
  let addResponse = localStorage.getItem("add_to_cart");
  if (addResponse != null) {
    data = JSON.parse(addResponse);
  } else {
    data = [];
  }
  // console.log(data)
  let str = "";
  let arr = data.filter(async (items) => {
    let newarr = await axios.get(`https://fakestoreapi.com/products/${items}`);
    str += `<div class ="col-sm-12 nohover" id="home_product">
    <div class="card card-box">
      <div class ="row">
        <div class =" col-sm-4">
          <img class="card-img-top height p-4" src="${newarr.data.image}" alt="Card image">
        </div>
        <div class = "col-sm-8">
          <div class="card-body ">
          <div class = "d-flex justify-content-between">
            <h4 class="card-title">${newarr.data.title}</h4>
            <span class="material-symbols-rounded secondary_color del-btn" onclick = deleteCartData(${newarr.data.id})>
            delete
            </span>
          </div>
            <p class="card-text font-size-09rem tertiary_color">${newarr.data.category}</p>
            <p class="card-text font-size-09rem tertiary_color">${newarr.data.description}</p>
            <div>
            <span class="material-symbols-rounded secondary_color ">
            star
            </span>
            <span class="material-symbols-rounded secondary_color ">
            star
            </span>
            <span class="material-symbols-rounded secondary_color ">
            star
            </span>
            <span class="material-symbols-rounded global-color5">
            star
            </span>
            <span class="material-symbols-rounded global-color5">
            star
            </span>
            <h4 class="card-title py-2 cart-price">$${newarr.data.price}</h4>
            <input type ="number" min = "1"  max= "50" value = "1"  class = "cart-quatity" onchange = "load_content(this.value)">
            <span id ="myOutput"></span>
            <button> click me</button>
            <h4 class="card-title py-2 cart-amt">$${newarr.data.price}</h4>
          </div>
            <div class ="d-flex">
              <div>
                <a href="#"  onclick="single_detail(${newarr.data.id})"class="btn btn-primary1 px-0 d-flex flex-fill align-items-center justify-content-center">Read More <span class="material-symbols-rounded"> 
                navigate_next
                </span></a>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  </div>`;
    document.getElementById("show_cart_data").innerHTML = str;
  });
}
card_data();

//  to show the total amount in cart section
function changeQty() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
  console.log("fish");
  // load_content();
}
function load_content(p) {
  console.log(p);

  let qtyElements = document.querySelectorAll(".cart-quatity").value;
  qtyElements.forEach((input) => {
    input.addEventListener("change", changeQty);
  });
  // total_amount()
}
// load_content();
function total_amount() {
  const carditems = document.querySelectorAll(".card-box");
  const totalprice = document.querySelectorAll(".total-price");

  let total = 0;

  carditems.forEach((product) => {
    let priceelement = product.querySelector(".cart-price");
    let price = parseFloat(priceelement.innerHTML.replace("rs.", ""));
    let qty = product.querySelector(".cart-quatity").value;
    total += price * qty;
    product.querySelector(".cart-amt").innerText = "Rs." + price * qty;
  });

  totalprice.innerHTML = "rs." + total;
}
total_amount();
/*function total_amount() {
  let amt = document.querySelectorAll("#myRange")
  let mpt = document.querySelectorAll("#myOutput")
  for (let x of amt) {
    mpt.innerHTML = x.value
    console.log(x.value)
    function gettingTotal(){

    }
    // x.oninput = function() {
    //   mpt.innerHTML = this.value;
    // }
  }
}*/
// mpt.innerHTML = this.value
// total_amount();

// to delete the data from cart

function deleteCartData(Did) {
  let addResponse = localStorage.getItem("add_to_cart");
  if (addResponse != null) {
    data = JSON.parse(addResponse);
  } else {
    data = [];
  }
  let newarr = data.filter((items) => {
    // we are doing this , to show all the data in newarr execpt the one we have clicked on
    // if we would have done items == Did then it will return that particular data only in the newarr
    return items != Did;
  });
  // console.log(newarr)
  localStorage.setItem("add_to_cart", JSON.stringify(newarr));
}

// to show particulae electronics category data from home to new electronic page

async function electronic() {
  console.log("hello");
  let str = "";
  let elec_data = await axios.get(
    `https://fakestoreapi.com/products/category/electronics`
  );
  console.log(elec_data.data);
  elec_data.data.forEach((items) => {
    str += `<div class ="col-sm-3" id="home_product">
    <div class="card">
      <img class="card-img-top height p-4" src="${
        items.image
      }" alt="Card image">
      <div class="card-body text-center">
        <h4 class="card-title">${items.title.slice(0, 15)}</h4>
        <p class="card-text font-size-09rem tertiary_color">${
          items.category
        }</p>
        <div>
        <span class="material-symbols-rounded secondary_color ">
        star
        </span>
        <span class="material-symbols-rounded secondary_color ">
        star
        </span>
        <span class="material-symbols-rounded secondary_color ">
        star
        </span>
        <span class="material-symbols-rounded global-color5">
        star
        </span>
        <span class="material-symbols-rounded global-color5">
        star
        </span>
        </div>
        <a href="#"  onclick="single_detail(${
          items.id
        })"class="btn btn-primary1 d-flex flex-fill align-items-center  justify-content-center">Read More <span class="material-symbols-rounded"> 
        navigate_next
        </span></a>
      </div>
    </div>
  </div>`;
    document.getElementById("electronic_data").innerHTML = str;
  });
}
electronic();

// To show the data in the cart page from the key add_to_cart

/*function getfromcart() {
  let str = ""
  let getcart = localStorage.getItem("add_to_cart");
  if (getcart != null) {
    data4 = [JSON.parse(getcart)]
    // lose = cyk.push(data4)
  }
  else {
    data4 = []
  }
  // console.log(lose)
  console.log(data4)
  // let cartarr = Object.entries(data4)
  // console.log(cartarr)
  // let str = ``
  // let lap = cartarr.forEach((items)=>{
  let showcacrt = data4.forEach((items)=>{
     str += `<div class ="col-sm-6">
                    <img class="card-img-top" src="${items.image}" alt="Card image">
               </div>
               <div class ="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">${items.title}</h4>
                        <p class="card-text">${items.category}</p>
                        <p class="card-text">${items.description.slice(0 ,50)}</p>
                        <p class="card-text">$${items.price}</p>

                    </div>
                </div>
              </div>`
  })
  // let pushcart = showcacrt.push({"id" = })
  // console.log(str)
  document.getElementById("addcart").innerHTML = str
}*/
/*  // console.log(data4)
  // console.log(typeof(data4))
  // console.log (cartarr)
  let joinarr = cartarr.concat();
  console.log(joinarr)*/

// getfromcart()

//  single product in modal

// async function single_detail(product_id) {
//   let sort_response = await axios.get(`https://fakestoreapi.com/products/${product_id}`);
//   let data2 = sort_response.data
//   let reponse = `
//   <div class ="col-sm-12">
//   <div class="card">
//   <img class="card-img-top" src="${data2.image}" alt="Card image">
// <div class="card-body">
// <h4 class="card-title">${data2.title.slice(0, 15)}</h4>
// <p class="card-text">${data2.category}</p>
// <p class="card-text">${data2.description}</p>
// <p class="card-text">${data2.price}</p>
// </div>
// </div>
// </div>
//     `
//     document.getElementById("single").innerHTML = reponse
// }
