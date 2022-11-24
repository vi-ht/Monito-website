// data ------------------------------------------------------------

import { catList, petList, dogList} from "/Monito-website/JS/data.js";
import { changeNav, changeIcon } from "/Monito-website/JS/navbar.js";
// import { catList, petList, dogList } from "../JS/data.js";
// import { changeNav, changeIcon } from "../JS/navbar.js";

// global var -----------------------------------------------------------------

var isCheckMale = false;
var isCheckFemale = false;
var isCheckRed = false;
var isCheckApricot = false;
var isCheckBlack = false;
var isCheckBlackWhite = false;
var isCheckSilver = false;
var isCheckTan = false;
var isCheckSmall = false;
var isCheckMedium = false;
var isCheckLarge = false;
var onLoad = false;

// call common function -----------------------------------------------------------------

window.addEventListener("scroll", changeNav);
changeIcon();
const url = window.location.href;

//hover effect of clear button-----------------------------------------------------------------

document.querySelector("#clear_btn").addEventListener("mouseover", () => {
    document.querySelector("#clear_btn>iconify-icon").style.color = "white";
    document.querySelector("#clear_btn>iconify-icon").style.transition = "0.3s";
})
document.querySelector("#clear_btn").addEventListener("mouseout", () => {
    document.querySelector("#clear_btn>iconify-icon").style.color = "#103559";
})
var buttonList = document.getElementsByClassName("view_intro_btn");
for (let i = 0; i < buttonList.length; i++) {

    buttonList[i].addEventListener("mouseover", () => {
        buttonList[i].childNodes[1].style.color = "white";
        buttonList[i].childNodes[1].style.transition = "0.3s";
    })
    buttonList[i].addEventListener("mouseout", () => {
        buttonList[i].childNodes[1].style.color = "#103559";
    })
}

// UI content by pet category ------------------------------------------------------------------------

function setTitle(value, list) {
    document.getElementById("category").innerHTML = value;
    document.getElementById("title").innerHTML = value;
    var total = document.createElement("span");
    total.innerText = list.length + " puppies";
    total.id = "total";
    document.getElementById('title').appendChild(total);
}

/* set up event for all filter options */
// onload event for body
document.body.onLoad = start();
function start() {
    if (url.includes("=dog")) {
        setTitle("Dog", dogList);
    } else if (url.includes("=cat")) {
        setTitle("Cat", catList);
    } else if (url.includes("=pet")) {
        setTitle("Pet", petList);
    }
    onLoad = true;
    setUpFilter();
    dividerByCategory();
    onLoad = false;
}
// onChange event for male option male_Mo
var maleOption = document.getElementById("male");
maleOption.addEventListener('change', (e) => {
    e.preventDefault();
    !onLoad ? isCheckMale = !(handleURL("gender", "male", isCheckMale)) : null;
});
document.getElementById("male_Mo").addEventListener('change', (e) => {
    e.preventDefault();
    !onLoad ? isCheckMale = !(handleURL("gender", "male", isCheckMale)) : null;
});
// onChange event for female option
var femaleOption = document.getElementById("female");
femaleOption.addEventListener('change', (e) => {
    e.preventDefault();
    !onLoad ? isCheckFemale = !(handleURL("gender", "female", isCheckFemale)) : null;
});
// onChange event for red color option
var redOption = document.getElementById("red");
redOption.addEventListener('change', (e) => {
    e.preventDefault();
    !onLoad ? isCheckRed = !(handleURL("color", "red", isCheckRed)) : null;
});
// onChange event for apricot color option
var apricotOption = document.getElementById("apricot");
apricotOption.addEventListener('change', (e) => {
    e.preventDefault();
    !onLoad ? isCheckApricot = !(handleURL("color", "apricot", isCheckApricot)) : null;
});
// onChange event for black color option
var blackOption = document.getElementById("black");
blackOption.addEventListener('change', (e) => {
    e.preventDefault();
    !onLoad ? isCheckBlack = !(handleURL("color", "black", isCheckBlack)) : null;
});
// onChange event for blackWhite color option
var blackWhiteOption = document.getElementById("blackWhite");
blackWhiteOption.addEventListener('change', (e) => {
    e.preventDefault();
    !onLoad ? isCheckBlackWhite = !(handleURL("color", "blackWhite", isCheckBlackWhite)) : null;
});
// onChange event for silver color option
var silverOption = document.getElementById("silver");
silverOption.addEventListener('change', (e) => {
    e.preventDefault();
    !onLoad ? isCheckSilver = !(handleURL("color", "silver", isCheckSilver)) : null;
});
// onChange event for tan color option
var tanOption = document.getElementById("tan");
tanOption.addEventListener('change', (e) => {
    e.preventDefault();
    !onLoad ? isCheckTan = !(handleURL("color", "tan", isCheckTan)) : null;
});
// onChange event for small option
var smallOption = document.getElementById("small");
smallOption.addEventListener('change', (e) => {
    e.preventDefault();
    !onLoad ? isCheckSmall = !(handleURL("breed", "small", isCheckSmall)) : null;
});
// onChange event for medium option
var mediumOption = document.getElementById("medium");
mediumOption.addEventListener('change', (e) => {
    e.preventDefault();
    !onLoad ? isCheckMedium = !(handleURL("breed", "medium", isCheckMedium)) : null;
});
// onChange event for large option
var largeOption = document.getElementById("large");
largeOption.addEventListener('change', (e) => {
    e.preventDefault();
    !onLoad ? isCheckLarge = !(handleURL("breed", "large", isCheckLarge)) : null;
});
// onChange event for min price option
var minPriceOption = document.getElementById("minPrice");
minPriceOption.addEventListener('change', (e) => {
    e.preventDefault();
    checkValidForPrice(minPriceOption.value, maxPriceOption.value) ?
        handleURLForPrice("minPrice", minPriceOption.value) : null
});
// onChange event for max price option
var maxPriceOption = document.getElementById("maxPrice");
maxPriceOption.addEventListener('change', (e) => {
    e.preventDefault();
    checkValidForPrice(minPriceOption.value, maxPriceOption.value) ?
        handleURLForPrice("maxPrice", maxPriceOption.value) : null
});
// onClick event for clear all button
document.getElementById("clear_btn").addEventListener('click', (e) => {
    e.preventDefault();
    let url = window.location.href;
    if (url.includes("&")) {
        window.location.href = url.slice(0, url.indexOf("&"));
    }
    dividerByCategory();
})

/* Page function*/
//handle url for gender, color, breed option in filter
function handleURL(name, value, isCheck) {

    let url = window.location.href;
    let pos = url.indexOf(name);
    let posOfAndSymbol = url.indexOf("&", pos);
    if (!isCheck) {
        if (url.includes(name)) {
            addFilterOptionOnURL(url, pos, posOfAndSymbol, `,${value}`);
        } else {
            window.history.pushState({}, '', url + `&${name}=${value}`);
        }
    } else {
        clearFilterOptionOnURL(url, pos, posOfAndSymbol, value);
    }
    dividerByCategory();
    return isCheck;
}
//handle url for price option in filter
function handleURLForPrice(name, value) {
    let url = window.location.href;
    let pos = url.indexOf(name);
    let posOfAndSymbol = url.indexOf("&", pos);
    if (value !== "") {
        if (url.includes(name)) {
            if (posOfAndSymbol !== -1) {
                window.history.pushState({}, "", url.replace(url.slice(pos - 1, pos + posOfAndSymbol), `&${name}=${value}`));
            } else {
                window.history.pushState({}, "", url.replace(url.slice(pos - 1), `&${name}=${value}`));
            }
        } else {
            window.history.pushState({}, '', url + `&${name}=${value}`);
        }
    } else {
        if (posOfAndSymbol !== -1) {
            window.history.pushState({}, "", url.replace(url.slice(pos - 1, pos + posOfAndSymbol), ""));
        } else {
            window.history.pushState({}, "", url.replace(url.slice(pos - 1), ""));
        }
    }
    dividerByCategory();
}
// clear exist filter option on URL function
function clearFilterOptionOnURL(url, pos, posOfAndSymbol, value) {
    let posOfComma = url.slice(pos).indexOf(",");
    if (posOfComma !== -1) {
        if (url.slice(pos, posOfComma + pos).includes(value)) {
            window.history.pushState({}, '', url.replace(value + ',', ""));
        } else {
            window.history.pushState({}, '', url.replace(',' + value, ""));
        }
    } else {
        if (posOfAndSymbol !== -1) {
            window.history.pushState({}, '', url.replace(url.slice(pos - 1, posOfAndSymbol), ""));
        } else {
            window.history.pushState({}, '', url.replace(url.slice(pos - 1), ""));
        }
    }
}
// add new filter option on URL function
function addFilterOptionOnURL(url, pos, posOfAndSymbol, value) {
    if (posOfAndSymbol !== -1) {
        let replaceStr = url.slice(pos, posOfAndSymbol);
        window.history.pushState({}, '', url.replace(replaceStr, replaceStr + value));
    } else {
        window.history.pushState({}, '', window.location.href + value);
    }
}
// Check validate for price input function
function checkValidForPrice(min, max) {
    let error = document.querySelector(".error");
    error.style.color = "red";
    error.innerText = "";
    let flag = true;
    if (min < 0 || max < 0) {
        error.innerText = "Min price or max price must be greater than zero.";
        flag = false;
    }
    if (parseInt(min) >= parseInt(max) && min !== "" && max !== "") {
        error.innerText = "Max price must be greater than min price.";

        flag = false;
    }
    return flag;
}
// check type of pet for filter function
function dividerByCategory() {
    let results = [];
    let flag = 1;
    if (window.location.href.includes("=dog")) {
        dogList.map(dog => {
            filter(dog) ? results.push(dog) : null;
        })
    } else if (window.location.href.includes("=cat")) {
        catList.map(cat => {
            filter(cat) ? results.push(cat) : null;
        })
        flag = 2;
    } else if (window.location.href.includes("=pet")) {
        petList.map(pet => {
            filter(pet) ? results.push(pet) : null;
        })
        flag = 3;
    }
    let parentElement = document.getElementById("resultPart");
    let replaceElement = document.getElementById('pets_list');
    let newElement = document.createElement("div");
    if (results.length > 0) {
        flag === 1 ?
            results.map((dog) => { addDogToList(dog, newElement) }) :
            flag === 2 ?
                results.map((cat) => { addCatToList(cat, newElement) }) :
                results.map((pet) => { addPetToList(pet, newElement) })

    } else {
        var text = document.createElement("p");
        text.innerText = "There are no result!"
        text.id = "noResultText";
        text.className = "col-12";
        var image = document.createElement("img");
        image.src = "../ASSET/SadDog.png";
        image.alt = "A sad dog";
        image.id = "noResultIcon";
        image.className = "col-12";
        newElement.appendChild(image);
        newElement.appendChild(text);
    }
    newElement.className = "col-12 row position-relative ms-1";
    parentElement.replaceChild(newElement, replaceElement);
    newElement.id = "pets_list";
    document.getElementById('total').innerText = results.length + " puppies";
}
// filter function
function filter(obj) {
    let url = window.location.href;
    let pos = url.includes("&");
    if (pos !== -1) {
        let filterStr = url.slice(pos + 1);
        if (filterStr.includes("gender")) {
            let genderPos = filterStr.indexOf("gender");
            let posOfAndSymbol = filterStr.indexOf("&", genderPos);
            let arr = [];
            if (posOfAndSymbol !== -1) {
                arr = filterStr.slice(genderPos + 7, posOfAndSymbol).split(",");
            } else {
                arr = filterStr.slice(genderPos + 7).split(",");
            }
            if (arr.length !== 2) {
                if (!(obj.gene.toUpperCase() == arr[0].toUpperCase())) {
                    return false;
                }
            }
        }
        if (filterStr.includes("color")) {
            let colorPos = filterStr.indexOf("color");
            let posOfAndSymbol = filterStr.indexOf("&", colorPos);
            let arr = [];
            if (posOfAndSymbol !== -1) {
                arr = filterStr.slice(colorPos + 6, posOfAndSymbol).split(",");
            } else {
                arr = filterStr.slice(colorPos + 6).split(",");
            }
            if (arr.length !== 7) {
                let numOfMatch = 0;
                for (let item in arr) {
                    if (arr[item].toUpperCase() == obj.color.toUpperCase()) {
                        numOfMatch += 1;
                    }
                }
                if (numOfMatch === 0) { return false; }
            }
        }
        if (filterStr.includes("breed")) {
            let breedPos = filterStr.indexOf("breed");
            let posOfAndSymbol = filterStr.indexOf("&", breedPos);
            let arr = [];
            if (posOfAndSymbol !== -1) {
                arr = filterStr.slice(breedPos + 6, posOfAndSymbol).split(",");
            } else {
                arr = filterStr.slice(breedPos + 6).split(",");
            }
            if (arr.length !== 3) {
                let numOfMatch = 0;
                for (let item in arr) {
                    if (arr[item].toUpperCase() == obj.breed.toUpperCase()) {
                        numOfMatch += 1;
                    }
                }
                if (numOfMatch === 0) {
                    return false;
                }
            }
        }
        if (filterStr.includes("minPrice") && filterStr.includes("maxPrice") == false) {
            let pricePos = filterStr.indexOf("minPrice");
            let posOfAndSymbol = filterStr.indexOf("&", pricePos);
            let value = 0;
            if (posOfAndSymbol !== -1) {
                value = filterStr.slice(pricePos + 9, posOfAndSymbol);
            } else {
                value = filterStr.slice(pricePos + 9);
            }
            if (!(parseInt(obj.price) > parseInt(value))) {
                return false;
            }
        }
        if (filterStr.includes("maxPrice") && filterStr.includes("minPrice") == false) {
            let pricePos = filterStr.indexOf("maxPrice");
            let posOfAndSymbol = filterStr.indexOf("&", pricePos);
            let value = 0;
            if (posOfAndSymbol !== -1) {
                value = filterStr.slice(pricePos + 9, posOfAndSymbol);
            } else {
                value = filterStr.slice(pricePos + 9);
            }
            if (!(parseInt(obj.price) < parseInt(value))) {
                return false;
            }
        }
        if (filterStr.includes("minPrice") && filterStr.includes("maxPrice")) {
            let minPos = filterStr.indexOf("minPrice");
            let maxPos = filterStr.indexOf("maxPrice");
            let minPosOfAndSymbol = filterStr.indexOf("&", minPos);
            let maxPosOfAndSymbol = filterStr.indexOf("&", maxPos);
            let minValue = 0;
            let maxValue = 0;
            if (minPosOfAndSymbol !== -1) {
                minValue = filterStr.slice(minPos + 9, minPosOfAndSymbol);
            } else {
                minValue = filterStr.slice(minPos + 9);
            }
            if (maxPosOfAndSymbol !== -1) {
                maxValue = filterStr.slice(maxPos + 9, maxPosOfAndSymbol);
            } else {
                maxValue = filterStr.slice(maxPos + 9);
            }
            if (!(parseInt(obj.price) < parseInt(maxValue) && parseInt(obj.price) > parseInt(minValue))) {
                return false;
            }
        }

    } else {
        return false;
    }
    return true;
}
// add dog card to list function -----------------------------------------------
function addDogToList(value, node) {
    var html =
        '<div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 p-2">'
        + '<div class="card card-style p-2 dogCard">'
        + '<img src=' + value.image + ' class="card-img-top" alt="...">'
        + '<div class="card-body pb-0 ps-1 pe-1">'
        + '<h5 class="card-title dog-name fw-bold">' + value.name + '</h5>'
        + '<p class="dog-info d-inline">Gene: ' + value.gene + '</p> - <p class="dog-info d-inline">Age: ' + value.age + '</p>'
        + '<p class="dog-name fw-semibold mt-2 mb-1">' + value.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ" + '</p>'
        + '</div>'
        + '</div>'
        + '</div>';
    node.insertAdjacentHTML('beforeend', html);
}

// add cat card to list function ---------------------------------------------------------
function addCatToList(value, node) {
    var html =
        '<div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 p-2">'
        + '<div class="card card-style p-2 catCard">'
        + '<img src=' + value.image + ' class="card-img-top " alt="...">'
        + '<div class="card-body pb-0 ps-1 pe-1">'
        + '<h5 class="card-title dog-name fw-bold">' + value.name + '</h5>'
        + '<p class="dog-info d-inline">Gene: ' + value.gene + '</p> - <p class="dog-info d-inline">Age: ' + value.age + '</p>'
        + '<p class="dog-name fw-semibold mt-2 mb-1">' + value.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ" + '</p>'
        + '</div>'
        + '</div>'
        + '</div>';
    node.insertAdjacentHTML('beforeend', html);
}
// add pet card to list function ---------------------------------------------------------
function addPetToList(value, node) {
    var html =
        '<div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 p-2">'
        + '<div class="card card-style p-2 petCard">'
        + '<img src=' + value.image + ' class="card-img-top" alt="...">'
        + '<div class="card-body pb-0 ps-1 pe-1">'
        + '<h5 class="card-title dog-name fw-bold">' + value.name + '</h5>'
        + '<p class="dog-info d-inline">Gene: ' + value.gene + '</p> - <p class="dog-info d-inline">Age: ' + value.age + '</p>'
        + '<p class="dog-name fw-semibold mt-2 mb-1">' + value.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ" + '</p>'
        + '</div>'
        + '</div>'
        + '</div>';
    node.insertAdjacentHTML('beforeend', html);
}
/* set up filter when page is loading*/
//set up gender option
function setUpGenderFilter(arr) {
    if (arr.length === 1) {
        arr[0] === "male" ? isCheckMale = true : isCheckFemale = true;
        document.getElementById(arr[0]).setAttribute("checked", null);
    }
    else {
        isCheckMale = true;
        isCheckFemale = true;
        document.getElementById("male").setAttribute("checked", null);
        document.getElementById("female").setAttribute("checked", null);
    }
}
//set up color option
function setUpColorFilter(arr) {
    for (let color of arr) {
        switch (color) {
            case "apricot":
                isCheckApricot = true;
                document.getElementById("apricot").setAttribute("checked", null);
                break;
            case "black":
                isCheckBlack = true;
                document.getElementById("black").setAttribute("checked", null);
                break;
            case "blackWhite":
                isCheckBlackWhite = true;
                document.getElementById("blackWhite").setAttribute("checked", null);
                break;
            case "silver":
                isCheckSilver = true;
                document.getElementById("silver").setAttribute("checked", null);
                break;
            case "tan":
                isCheckTan = true;
                document.getElementById("tan").setAttribute("checked", null);
                break;
            case "red":
                isCheckRed = true;
                document.getElementById("red").setAttribute("checked", null);
                break;
        }
    }
}
//set up breed option
function setUpBreedFilter(arr) {

    for (let breed of arr) {
        switch (breed) {
            case "small":
                isCheckSmall = true;
                document.getElementById("small").setAttribute("checked", null);
                break;
            case "medium":
                isCheckMedium = true;
                document.getElementById("medium").setAttribute("checked", null);
                break;
            case "large":
                isCheckLarge = true;
                document.getElementById("large").setAttribute("checked", null);
                break;
        }
    }
}
//set up price option
function setUpMinPriceFilter(min) {
    document.getElementById("minPrice").value = min;
}
function setUpMaxPriceFilter(max) {
    document.getElementById("maxPrice").value = max;
}
//set up filter
function setUpFilter() {
    let url = window.location.href;
    let pos = url.includes("&");
    if (pos !== -1) {
        let filterStr = url.slice(pos + 1);
        if (filterStr.includes("gender")) {
            let genderPos = filterStr.indexOf("gender");
            let posOfAndSymbol = filterStr.indexOf("&", genderPos);
            let arr = [];
            if (posOfAndSymbol !== -1) {
                arr = filterStr.slice(genderPos + 7, posOfAndSymbol).split(",");
            } else {
                arr = filterStr.slice(genderPos + 7).split(",");
            }
            onLoad ? setUpGenderFilter(arr) : null;
        }
        if (filterStr.includes("color")) {
            let colorPos = filterStr.indexOf("color");
            let posOfAndSymbol = filterStr.indexOf("&", colorPos);
            let arr = [];
            if (posOfAndSymbol !== -1) {
                arr = filterStr.slice(colorPos + 6, posOfAndSymbol).split(",");
            } else {
                arr = filterStr.slice(colorPos + 6).split(",");
            }
            onLoad ? setUpColorFilter(arr) : null;
        }
        if (filterStr.includes("breed")) {
            let breedPos = filterStr.indexOf("breed");
            let posOfAndSymbol = filterStr.indexOf("&", breedPos);
            let arr = [];
            if (posOfAndSymbol !== -1) {
                arr = filterStr.slice(breedPos + 6, posOfAndSymbol).split(",");
            } else {
                arr = filterStr.slice(breedPos + 6).split(",");
            }
            onLoad ? setUpBreedFilter(arr) : null
        }
        if (filterStr.includes("minPrice") && filterStr.includes("maxPrice") == false) {
            let pricePos = filterStr.indexOf("minPrice");
            let posOfAndSymbol = filterStr.indexOf("&", pricePos);
            let value = 0;
            if (posOfAndSymbol !== -1) {
                value = filterStr.slice(pricePos + 9, posOfAndSymbol);
            } else {
                value = filterStr.slice(pricePos + 9);
            }
            onLoad ? setUpMinPriceFilter(value) : null;
        }
        if (filterStr.includes("maxPrice") && filterStr.includes("minPrice") == false) {
            let pricePos = filterStr.indexOf("maxPrice");
            let posOfAndSymbol = filterStr.indexOf("&", pricePos);
            let value = 0;
            if (posOfAndSymbol !== -1) {
                value = filterStr.slice(pricePos + 9, posOfAndSymbol);
            } else {
                value = filterStr.slice(pricePos + 9);
            }
            onLoad ? setUpMaxPriceFilter(value) : null;
        }
        if (filterStr.includes("minPrice") && filterStr.includes("maxPrice")) {
            let minPos = filterStr.indexOf("minPrice");
            let maxPos = filterStr.indexOf("maxPrice");
            let minPosOfAndSymbol = filterStr.indexOf("&", minPos);
            let maxPosOfAndSymbol = filterStr.indexOf("&", maxPos);
            let minValue = 0;
            let maxValue = 0;
            if (minPosOfAndSymbol !== -1) {
                minValue = filterStr.slice(minPos + 9, minPosOfAndSymbol);
            } else {
                minValue = filterStr.slice(minPos + 9);
            }
            if (maxPosOfAndSymbol !== -1) {
                maxValue = filterStr.slice(maxPos + 9, maxPosOfAndSymbol);
            } else {
                maxValue = filterStr.slice(maxPos + 9);
            }
            onLoad ? setUpMinPriceFilter(minValue) : null;
            onLoad ? setUpMaxPriceFilter(maxValue) : null;
        }
    }
}
//set up event click on card
for (let i = 1; i < document.getElementsByClassName("dogCard").length + 1; i++) {
    document.getElementsByClassName("dogCard")[i - 1].addEventListener('click', (e) => {
        e.preventDefault();
        window.location.assign("pet-detail.html?category=dog&id=" + i);
    })
}
for (let i = 1; i < document.getElementsByClassName("catCard").length + 1; i++) {
    document.getElementsByClassName("catCard")[i - 1].addEventListener('click', (e) => {
        e.preventDefault();
        window.location.assign("pet-detail.html?category=cat&id=" + i);
    })
}
for (let i = 1; i < document.getElementsByClassName("petCard").length + 1; i++) {
    document.getElementsByClassName("petCard")[i - 1].addEventListener('click', (e) => {
        e.preventDefault();
        window.location.assign("pet-detail.html?category=pet&id=" + i);
    })
}