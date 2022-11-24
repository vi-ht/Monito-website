// data 
// import { catList, petList, dogList } from "../JS/data.js";
// import { changeNav, changeIcon } from "../JS/navbar.js";
import { catList, petList, dogList } from "../Monito-website/JS/data.js";
import { changeNav, changeIcon } from "../Monito-website/JS/navbar.js";

// call function -----------------------------------------------------------------

window.addEventListener("scroll", changeNav);
changeIcon();

//global var -----------------------------------------------------------------

document.body.addEventListener("load", doLoad());
function doLoad() {
    var searchPart = window.location.search;
    if (searchPart.includes("category")) {
        let catePos = searchPart.indexOf("category");
        let posOfAndSymbol = searchPart.indexOf("&");
        let category = searchPart.substring(catePos + 9, posOfAndSymbol);
        var categoryNameList = document.getElementsByClassName("category-name");
        for (var i = 0; i < categoryNameList.length; i++) {
            categoryNameList[i].innerText = category;
        }
        let id = searchPart.slice(posOfAndSymbol + 4);
        let pet;
        if (searchPart.substring(catePos + 8, posOfAndSymbol) === "=cat") {
            pet = getData(id, catList);
            displayPetList(catList, id, 1);
        } else if (category === "dog") {
            pet = getData(id, dogList);
            displayPetList(dogList, id, 2);
        } else {
            pet = getData(id, petList);
            displayPetList(petList, id, 3);
        }
        setUpProfileInfo(pet, id);
        setUpProfileImages(pet);
        setUpFeedBack(pet);
        carousel(pet);
        window.addEventListener("resize", () => { carousel(pet); });
        loadDataForMobileCarousel(pet);
    }
}

function loadDataForMobileCarousel(pet){
    var feedbackList = pet.feedback;
    for(let index in feedbackList){
        let container = document.createElement("div");
        let containerDisplay = document.createElement("div");
        container.className = index === 0? "panel-carousel active" : "panel-carousel";
        containerDisplay.className = index === 0? "panel-carousel-display active" : "panel-carousel-display";
        let img = document.createElement("img");
        img.className = "panel-carousel-image";
        img.src = feedbackList[index];
        img.alt = "image";
        container.appendChild(img);
        document.getElementById("carousel-container").appendChild(container);
        document.getElementById("carousel-display").appendChild(containerDisplay);
    }
}

function setUpMobileCarousel() {
    let pos = 1;
    let totalImages = document.getElementsByClassName("panel-carousel-image").length;
    let container = document.getElementById("carousel-container");
    container.style.transition = "1000ms ease-out";
    document.getElementById("next-carousel").addEventListener("click", handleNext);
    document.getElementById("pre-carousel").addEventListener("click", handlePrevious);
    document.getElementById("pre-carousel").style.display = "none";
    document.getElementById("next-carousel").style.display = "block";
    function handleNext() {
        clearActive();
        document.getElementsByClassName("panel-carousel-display")[pos].className += " active";
        container.style.transform = "translate(-" + (pos * (document.getElementsByClassName("panel-carousel")[0].offsetWidth)) + "px,0)";
        pos++;
        changeButton();
    }
    function handlePrevious() {
        clearActive();
        document.getElementsByClassName("panel-carousel-display")[pos - 2].className += " active";
        container.style.transform = "translate(-" + ((pos - 2) * (document.getElementsByClassName("panel-carousel")[0].offsetWidth)) + "px,0)";
        pos--;
        changeButton();
    }
    function changeButton() {
        if (pos <= totalImages && pos > 1) {
            document.getElementById("next-carousel").style.display = "block";
            document.getElementById("pre-carousel").style.display = "block";
        } else if (pos + 1 === totalImages) {
            document.getElementById("next-carousel").style.display = "none";
            document.getElementById("pre-carousel").style.display = "block";
        } else if (pos === 1) {
            document.getElementById("pre-carousel").style.display = "none";
            document.getElementById("next-carousel").style.display = "block";
        } else {
            document.getElementById("next-carousel").style.display = "none";
        }
    }
    function clearActive() {
        let normalList = document.getElementsByClassName("panel-carousel-display");
        for (let i = 0; i < normalList.length; i++) {
            normalList[i].className = "panel-carousel-display"
        }
    }

}
setUpMobileCarousel();

function setUpProfileInfo(pet, id) {
    document.getElementsByTagName("title")[0].innerText = `${pet.name}`;
    var petNameList = document.getElementsByClassName("pet-name")
    for (let i = 0; i < petNameList.length; i++) {
        petNameList[i].innerText = pet.name;
    }
    document.getElementById("pet-title").innerText = pet.name;
    document.getElementById("pet-price").innerText = pet.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
    document.getElementById("pet-SKU").innerText = "#" + id.padStart(4, "0");
    document.getElementById("pet-gender").innerText = pet.gene;
    document.getElementById("pet-age").innerText = pet.age;
    document.getElementById("pet-breed").innerText = pet.breed;
    document.getElementById("pet-color").innerText = pet.color;
    document.getElementById("pet-location").innerText = pet.location;
    document.getElementById("pet-vaccine").innerText = pet.vaccine ? "Yes" : "No";
    document.getElementById("pet-deworm").innerText = pet.deworm ? "Yes" : "No";
    document.getElementById("pet-cert").innerText = pet.cert ? "Yes (MKA)" : "No";
    document.getElementById("pet-micro").innerText = pet.cert ? "Yes" : "No";
    document.getElementById("pet-day").innerText = pet.publishDate;
    document.getElementById("pet-note").innerText = pet.note;
    document.getElementById("pet-image").src = pet.profileImage[0];
}

function setUpProfileImages(pet) {
    var profileImage = pet.profileImage;
    for (let index in profileImage) {
        var container = document.createElement("div");
        container.className = index == 0 ? "image-preview d-inline-block flex-shrink-0 active" : "image-preview d-inline-block flex-shrink-0";
        var img = document.createElement("img");
        img.src = profileImage[index];
        img.className = "pet-preview";
        img.alt = "pet image";
        container.appendChild(img);
        document.getElementById("preview-container").appendChild(container);
    }
    var imageList = document.getElementsByClassName("image-preview");
    for (let image of imageList) {
        image.firstChild.addEventListener("click", () => {
            clearActive();
            document.getElementById("pet-image").src = image.firstChild.src;
            image.className += " active";
        })
    }
}

function setUpFeedBack(pet) {
    var feedbackImage = pet.feedback;
    for (let index in feedbackImage) {
        var container = document.createElement("div");
        container.className = index == 0 ? "panel active" : "panel";
        var containerDisplay = document.createElement("div");
        containerDisplay.className = index == 0 ? "panel-display active" : "panel-display";
        var img = document.createElement("img");
        img.src = feedbackImage[index];
        img.className = "panel-image";
        img.alt = "feedback image";
        container.appendChild(img);
        document.getElementById("expand-container").appendChild(container);
        document.getElementById("expand-display").appendChild(containerDisplay);
    }
}

function clearActive() {
    var imageList = document.getElementsByClassName("image-preview");
    for (let image of imageList) {
        image.className = "image-preview d-inline-block flex-shrink-0";
    }
}

function findNumBerImage() {
    var maxImageNumber;
    if (window.innerWidth > 1400) {
        maxImageNumber = 6;
    } else if (window.innerWidth <= 1400 && window.innerWidth > 1200) {
        maxImageNumber = 5;
    } else if (window.innerWidth <= 1200 && window.innerWidth > 992) {
        maxImageNumber = 4;
    } else if (window.innerWidth <= 992 && window.innerWidth > 911) {
        maxImageNumber = 9;
    } else if (window.innerWidth <= 911 && window.innerWidth > 796) {
        maxImageNumber = 8;
    } else if (window.innerWidth <= 796 && window.innerWidth > 683) {
        maxImageNumber = 7;
    } else if (window.innerWidth <= 683 && window.innerWidth > 572) {
        maxImageNumber = 6;
    } else if (window.innerWidth <= 572 && window.innerWidth > 459) {
        maxImageNumber = 5;
    } else if (window.innerWidth <= 459 && window.innerWidth > 352) {
        maxImageNumber = 4;
    } else {
        maxImageNumber = 3;
    }
    return maxImageNumber;
}

function carousel(pet) {
    var coordinates = 130;
    var num = pet.profileImage.length - findNumBerImage();
    if (num <= 0) {
        document.getElementById("next").style.display = "none";
        document.getElementById("pre").style.display = "none";
    } else {
        document.getElementById("next").style.display = "block";
        document.getElementById("pre").style.display = "none";
    }
    var pos = 1;
    var minus = 0
    document.getElementById("next").addEventListener("click", (e) => {
        changeButton();
        e.preventDefault();
        document.getElementById("preview-container").style.transform = "translate(-" + ((pos * coordinates) - minus * 20) + "px, 0)";
        document.getElementById("preview-container").style.transition = "600ms ease-out"
        pos++;
        minus++;


    })
    document.getElementById("pre").addEventListener("click", (e) => {
        e.preventDefault();
        pos--;
        minus--;
        changeButton();
        document.getElementById("preview-container").style.transform = "translate(-" + ((pos - 1) * coordinates - (minus * 20)) + "px, 0)";
    })
    function changeButton() {
        if (pos === 1) {
            document.getElementById("next").style.display = "block";
            document.getElementById("pre").style.display = "none";
        } else if (pos > num) {
            document.getElementById("next").style.display = "none";
            document.getElementById("pre").style.display = "block";
        } else if (pos === num) {
            document.getElementById("next").style.display = "none";
            document.getElementById("pre").style.display = "block";
        } else {
            document.getElementById("next").style.display = "block";
            document.getElementById("pre").style.display = "block";
        }
    }
}

function getData(id, dataList) {
    for (let i in dataList) {
        if (dataList[i].id == id) {
            return dataList[i];
        }
    }
}
var onLoad = false;
//Display knowledge list
function displayPetList(list, id, cate) {
    let flag = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].id !== id) {
            if (flag < 4) {
                if (cate === 1) {
                    addCatToList(list[i]);
                } else if (cate === 2) {
                    addDogToList(list[i]);
                } else {
                    addPetToList(list[i]);
                }
                flag += 1;
            } else {
                break;
            }
        }
    }
}

// add dog card to list function -----------------------------------------------
function addDogToList(value) {
    var html =
        '<div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-2">'
        + '<div class="card card-style p-2 dogCard" id=' + value.id + '>'
        + '<img src=' + value.image + ' class="card-img-top" alt="...">'
        + '<div class="card-body pb-0 ps-1 pe-1">'
        + '<h5 class="card-title dog-name fw-bold">' + value.name + '</h5>'
        + '<p class="dog-info d-inline">Gene: ' + value.gene + '</p> - <p class="dog-info d-inline">Age: ' + value.age + '</p>'
        + '<p class="dog-name fw-semibold mt-2 mb-1">' + value.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ" + '</p>'
        + '</div>'
        + '</div>'
        + '</div>';
    document.getElementById("list_of_pet").insertAdjacentHTML('beforeend', html);
}
// add cat card to list function ---------------------------------------------------------
function addCatToList(value) {
    var html =
        '<div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-2">'
        + '<div class="card card-style p-2 catCard" id=' + value.id + '>'
        + '<img src=' + value.image + ' class="card-img-top " alt="...">'
        + '<div class="card-body pb-0 ps-1 pe-1">'
        + '<h5 class="card-title dog-name fw-bold">' + value.name + '</h5>'
        + '<p class="dog-info d-inline">Gene: ' + value.gene + '</p> - <p class="dog-info d-inline">Age: ' + value.age + '</p>'
        + '<p class="dog-name fw-semibold mt-2 mb-1">' + value.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ" + '</p>'
        + '</div>'
        + '</div>'
        + '</div>';
    document.getElementById("list_of_pet").insertAdjacentHTML('beforeend', html);
}
// add pet card to list function ---------------------------------------------------------
function addPetToList(value) {
    var html =
        '<div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-2">'
        + '<div class="card card-style p-2 petCard" id=' + value.id + '>'
        + '<img src=' + value.image + ' class="card-img-top" alt="...">'
        + '<div class="card-body pb-0 ps-1 pe-1">'
        + '<h5 class="card-title dog-name fw-bold">' + value.name + '</h5>'
        + '<p class="dog-info d-inline">Gene: ' + value.gene + '</p> - <p class="dog-info d-inline">Age: ' + value.age + '</p>'
        + '<p class="dog-name fw-semibold mt-2 mb-1">' + value.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ" + '</p>'
        + '</div>'
        + '</div>'
        + '</div>';
    document.getElementById("list_of_pet").insertAdjacentHTML('beforeend', html);
}
//set up event click on card
var dogCardList = document.getElementsByClassName("dogCard");
for (let i = 1; i < dogCardList.length + 1; i++) {
    dogCardList[i - 1].addEventListener('click', (e) => {
        e.preventDefault();
        window.location.assign("pet-detail.html?category=dog&id=" + dogCardList[i - 1].id);
    })
}
var catCardList = document.getElementsByClassName("catCard");
for (let i = 1; i < catCardList.length + 1; i++) {
    catCardList[i - 1].addEventListener('click', (e) => {
        e.preventDefault();
        window.location.assign("pet-detail.html?category=cat&id=" + catCardList[i - 1].id);
    })
}
var petCardList = document.getElementsByClassName("petCard");
for (let i = 1; i < petCardList.length + 1; i++) {
    petCardList[i - 1].addEventListener('click', (e) => {
        e.preventDefault();
        window.location.assign("pet-detail.html?category=pet&id=" + petCardList[i - 1].id);
    })
}
// var cardList = document.getElementsByClassName("knowledgeCard");
// for (let i = 1; i < cardList.length + 1; i++) {
//     cardList[i - 1].addEventListener('click', (e) => {
//         e.preventDefault();
//         window.location.assign("knowledge-detail.html?id=" + i);
//     })
// }

var panelList = document.getElementsByClassName("panel");
var displayList = document.getElementsByClassName("panel-display");
for (let i = 0; i < panelList.length; i++) {
    panelList[i].addEventListener('click', (e) => {
        e.preventDefault();
        clearExpaned();
        clearExpanedDisplay();
        panelList[i].className = "panel active";
        displayList[i].className = "panel-display active";
    })
}
function clearExpaned() {
    let panelList = document.getElementsByClassName("panel");
    for (let i = 0; i < panelList.length; i++) {
        panelList[i].className = "panel"
    }
}

function clearExpanedDisplay() {
    let displayList = document.getElementsByClassName("panel-display");
    for (let i = 0; i < displayList.length; i++) {
        displayList[i].className = "panel-display"
    }
}