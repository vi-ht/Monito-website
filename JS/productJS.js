// data ------------------------------------------------------------
import { productList } from "../JS/data.js";
import { changeNav, changeIcon } from "../JS/navbar.js";
// call function ------------------------------------------------------
window.addEventListener("scroll", changeNav);
changeIcon();

// global var -----------------------------------------------------------------

// const addProduct = ;
document.getElementById("total").innerHTML = productList.length > 1 ? productList.length + " products" : productList.length + " product";
// add dog card to list function -----------------------------------------------
productList.map((product) => {
    //create container
    let container = document.createElement("div");
    container.className = "col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 p-2";
    //create product card
    let productCard = document.createElement("div");
    productCard.className = "card card-style p-2";
    //create card image
    let cardImage = document.createElement("img");
    cardImage.src = product.image;
    cardImage.className = "card-img-top";
    cardImage.alt = "....";
    //create card info container
    let cardInfo = document.createElement("div");
    cardInfo.className = "card-body pb-0 ps-1 pe-1";
    //create card name
    let cardName = document.createElement("h5");
    cardName.className = "card-title dog-name";
    cardName.innerText = product.name;
    //add cardName to info container
    cardInfo.appendChild(cardName);
    //add cardImage and cardInfo to productCard
    productCard.appendChild(cardImage);
    productCard.appendChild(cardInfo);
    //add product card to container
    container.appendChild(productCard);
    //add container to list of product
    document.getElementById('list_of_product').appendChild(container);
})
// function addProductToList(value) {
//     var html =
//         '<div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 p-2">'
//         + '<div class="card card-style p-2">'
//         + '<img src=' + value.image + ' class="card-img-top" alt="...">'
//         + '<div class="card-body pb-0 ps-1 pe-1">'
//         + '<h5 class="card-title dog-name">' + `${value.name.length < 30 ? value.name + '<span style="color:white">add whitespace to end</span>' : value.name}` + '</h5>'
//         + '<p class="dog-info d-inline">Product: ' + value.product + '</p>' + `${value.size !== undefined ? ' - <p class="dog-info d-inline">Size: ' + value.size + '</p>' : ''}`
//         + '<p class="dog-name fw-semibold mt-2 mb-1">' + value.price + '</p>'
//         + '<div class="container rounded" id="present_tag">'
//         + '<iconify-icon icon="fxemoji:present" style="color: #103559;" width="24" height="24" class="mt-2"></iconify-icon>'
//         + '<span class="position-relative ms-2">' + value.content + '</span>'
//         + '</div>'
//         + '</div>'
//         + '</div>'
//         + '</div>';
//     document.getElementById('list_of_product').insertAdjacentHTML('beforeend', html);
// }




