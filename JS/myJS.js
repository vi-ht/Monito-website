// data 
// import { productList, dogList, knowledgeList } from "../JS/data.js";
// import { changeNav, changeIcon } from "../JS/navbar.js";
import { productList, dogList, knowledgeList } from "/data.js";
import { changeNav, changeIcon } from "/navbar.js";
// call function -----------------------------------------------------------------

window.addEventListener("scroll", changeNav);
changeIcon();


// var declaration

dogList.slice(0,8).map(addDogToList);
productList.slice(0,8).map(addProductToList);
knowledgeList.slice(0,3).map(addKnowledgeToList);
var buttonList = document.getElementsByClassName("view_intro_btn");
for(let i = 0; i < buttonList.length; i++){
    buttonList[i].addEventListener("mouseover", () => {
        buttonList[i].childNodes[2].style.color = "white";
        buttonList[i].childNodes[2].style.transition = "0.3s";
    })
    buttonList[i].addEventListener("mouseout", () => {
        buttonList[i].childNodes[2].style.color = "#103559";
    })
}
// function 

function addDogToList(value) {
    var html =
        '<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 p-2">'
        + '<div class="card card-style p-2 dogCard">'
        + '<img src=' + value.image + ' class="card-img-top" alt="...">'
        + '<div class="card-body pb-0 ps-1 pe-1">'
        + '<h5 class="card-title dog-name">' + value.name + '</h5>'
        + '<p class="dog-info d-inline">Gene: ' + value.gene + '</p> - <p class="dog-info d-inline">Age: ' + value.age + '</p>'
        + '<p class="dog-name fw-semibold mt-2 mb-1">' + value.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ"; + '</p>'
        + '</div>'
        + '</div>'
        + '</div>';
    document.getElementById('list_of_card').insertAdjacentHTML('beforeend', html);
}

function addProductToList(value) {
    var html =
        '<div class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 p-2">'
        + '<div class="card card-style p-2">'
        + '<img src=' + value.image + ' class="card-img-top" alt="...">'
        + '<div class="card-body pb-0 ps-1 pe-1">'
        + '<h5 class="card-title dog-name">' +`${value.name.length >= 33 ? value.name.slice(0,33)+"..." : value.name}` + '</h5>'
        + '<p class="dog-info d-inline">Product: ' + value.product + '</p>' + `${value.size !== undefined ? ' - <p class="dog-info d-inline">Size: ' + value.size + '</p>' : ''}`
        + '<p class="dog-name fw-semibold mt-2 mb-1">' + value.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ" + '</p>'
        + '<div class="container rounded" id="present_tag">'
        + '<iconify-icon icon="fxemoji:present" style="color: #103559;" width="24" height="24" class="mt-2"></iconify-icon>'
        + '<span class="position-relative ms-2">' + value.content + '</span>'
        + '</div>'
        + '</div>'
        + '</div>'
        + '</div>';
    document.getElementById('list_of_product').insertAdjacentHTML('beforeend', html);
}

function addKnowledgeToList(value) {
    var html =
        '<div class="col-lg-4 col-md-4 p-2 dogCard">'
        + '<div class="card card-style p-2">'
        + '<img src=' + value.image + ' class="card-img-top" alt="...">'
        + '<div class="card-body pb-0 ps-1 pe-1">'
        + '<h5><span class="badge rounded-pill text-bg-primary fw-normal p-2">Pet knowledge</span></h5>'
        + '<h5 class="card-title dog-name lh-base">' + `${value.name.length < 30 ? value.name + '<span style="color:white">add whitespace to end</span>' : value.name}` + '</h5>'
        + '<p class="dog-info d-inline lh-1" style="text-overflow:ellipsis">' + value.content.slice(0,230)+"..." + '</p>'
        + '</div>'
        + '</div>'
        + '</div>';
    document.getElementById('list_of_knowledge').insertAdjacentHTML('beforeend', html);
}


for (let i = 1; i < document.getElementsByClassName("dogCard").length + 1; i++) {
    document.getElementsByClassName("dogCard")[i - 1].addEventListener('click', (e) => {
        e.preventDefault();
        window.location.assign("pet-detail.html?category=dog&id=" + i);
    })
}
var cardList = document.getElementsByClassName("knowledgeCard");
for (let i = 1; i < cardList.length + 1; i++) {
    cardList[i - 1].addEventListener('click', (e) => {
        e.preventDefault();
        window.location.assign("knowledge-detail.html?id=" + i);
    })
}
