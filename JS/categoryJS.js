// data ------------------------------------------------------------
import { catList, petList, dogList} from "../JS/data.js";
import { changeNav, changeIcon } from "../JS/navbar.js";

// global var -----------------------------------------------------------------
window.addEventListener("scroll", changeNav);
changeIcon();
const url = window.location.href;

// UI content by pet category ------------------------------------------------------------------------

if (url.endsWith("dog")) {
    document.getElementById("category").innerHTML = "Dog";
    document.getElementById("title").innerHTML = "Dog";
    var total =
        '<span>' + dogList.length + " puppies" + '</span>';
    document.getElementById('title').insertAdjacentHTML('beforeend', total);
    dogList.map(addDogToList);
} else if (url.endsWith("cat")) {
    document.getElementById("category").innerHTML = "Cat";
    document.getElementById("title").innerHTML = "Cat";
    var total =
        '<span>' + catList.length + " puppies" + '</span>';
    document.getElementById('title').insertAdjacentHTML('beforeend', total);
    catList.map(addCatToList);
} else{
    document.getElementById("category").innerHTML = "Pet";
    document.getElementById("title").innerHTML = "Pet";
    var total =
        '<span>' + petList.length + " puppies" + '</span>';
    document.getElementById('title').insertAdjacentHTML('beforeend', total);
    petList.map(addPetToList);
}

// add dog card to list function -----------------------------------------------

function addDogToList(value) {
    var html =
        '<div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 p-2">'
        + '<div class="card card-style p-2">'
        + '<img src=' + value.image + ' class="card-img-top" alt="...">'
        + '<div class="card-body pb-0 ps-1 pe-1">'
        + '<h5 class="card-title dog-name fw-bold">' + value.name + '</h5>'
        + '<p class="dog-info d-inline">Gene: ' + value.gene + '</p> - <p class="dog-info d-inline">Age: ' + value.age + '</p>'
        + '<p class="dog-name fw-semibold mt-2 mb-1">' + value.price + '</p>'
        + '</div>'
        + '</div>'
        + '</div>';
    document.getElementById('pets_list').insertAdjacentHTML('beforeend', html);
}

// add cat card to list function ---------------------------------------------------------

function addCatToList(value) {
    var html =
        '<div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 p-2">'
        + '<div class="card card-style p-2">'
        + '<img src=' + value.image + ' class="card-img-top" alt="...">'
        + '<div class="card-body pb-0 ps-1 pe-1">'
        + '<h5 class="card-title dog-name fw-bold">' + value.name + '</h5>'
        + '<p class="dog-info d-inline">Gene: ' + value.gene + '</p> - <p class="dog-info d-inline">Age: ' + value.age + '</p>'
        + '<p class="dog-name fw-semibold mt-2 mb-1">' + value.price + '</p>'
        + '</div>'
        + '</div>'
        + '</div>';
    document.getElementById('pets_list').insertAdjacentHTML('beforeend', html);
}

// add pet card to list function ---------------------------------------------------------

function addPetToList(value) {
    var html =
        '<div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 p-2">'
        + '<div class="card card-style p-2">'
        + '<img src=' + value.image + ' class="card-img-top" alt="...">'
        + '<div class="card-body pb-0 ps-1 pe-1">'
        + '<h5 class="card-title dog-name fw-bold">' + value.name + '</h5>'
        + '<p class="dog-info d-inline">Gene: ' + value.gene + '</p> - <p class="dog-info d-inline">Age: ' + value.age + '</p>'
        + '<p class="dog-name fw-semibold mt-2 mb-1">' + value.price + '</p>'
        + '</div>'
        + '</div>'
        + '</div>';
    document.getElementById('pets_list').insertAdjacentHTML('beforeend', html);
}
