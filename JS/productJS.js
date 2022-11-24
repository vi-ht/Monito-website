// data ------------------------------------------------------------

// import { productList } from "../JS/data.js";
// import { changeNav, changeIcon } from "../JS/navbar.js";
import { productList } from "../Monito-website/JS/data.js";
import { changeNav, changeIcon } from "../JS/Monito-website/navbar.js";

// call function ------------------------------------------------------

window.addEventListener("scroll", changeNav);
changeIcon();
document.getElementById("total").innerHTML = productList.length > 1 ? productList.length + " products" : productList.length + " product";

// button style ------------------------------------------------
var buttonList = document.getElementsByClassName("view_intro_btn");
for (let i = 0; i < buttonList.length; i++) {

    buttonList[i].addEventListener("mouseover", () => {
        document.querySelector(".view_intro_btn>iconify-icon").style.color = "white";
        document.querySelector(".view_intro_btn>iconify-icon").style.transition = "0.3s";
    })
    buttonList[i].addEventListener("mouseout", () => {
        document.querySelector(".view_intro_btn>iconify-icon").style.color = "#103559";
    })
}
// global var -----------------------------------------------------------------

var isCheckDog = false;
var isCheckCat = false;
var isCheckPet = false;
var isCheckFood = false;
var isCheckToy = false;
var isCheckCostume = false;
var isCheckSupplement = false;
var onLoad = false;

/* set up event for all filter options */
// onload event for body
document.body.onLoad = start();
function start() {
    onLoad = true;
    setUpFilter();
    dividerByCategory();
    onLoad = false;
}
// onChange event for dog option
var dogOption = document.getElementById("dog");
dogOption.addEventListener('change', (e) => {
    e.preventDefault();
    !onLoad ? isCheckDog = !(handleURL("category", "dog", isCheckDog)) : null;
});
// onChange event for cat option
var catOption = document.getElementById("cat");
catOption.addEventListener('change', (e) => {
    e.preventDefault();
    !onLoad ? isCheckCat = !(handleURL("category", "cat", isCheckCat)) : null;
});
// onChange event for pet color option
var petOption = document.getElementById("pet");
petOption.addEventListener('change', (e) => {
    e.preventDefault();
    !onLoad ? isCheckPet = !(handleURL("category", "pet", isCheckPet)) : null;
});
// onChange event for food option
var foodOption = document.getElementById("food");
foodOption.addEventListener('change', (e) => {
    e.preventDefault();
    !onLoad ? isCheckFood = !(handleURL("type", "food", isCheckFood)) : null;
});
// onChange event for toy option
var toyOption = document.getElementById("toy");
toyOption.addEventListener('change', (e) => {
    e.preventDefault();
    !onLoad ? isCheckToy = !(handleURL("type", "toy", isCheckToy)) : null;
});
// onChange event for costume option
var supOption = document.getElementById("sup");
supOption.addEventListener('change', (e) => {
    e.preventDefault();
    !onLoad ? isCheckSupplement = !(handleURL("type", "sup", isCheckSupplement)) : null;
});
// onChange event for supplement option
var costumeOption = document.getElementById("costume");
costumeOption.addEventListener('change', (e) => {
    e.preventDefault();
    !onLoad ? isCheckCostume = !(handleURL("type", "costume", isCheckCostume)) : null;
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
    productList.map(item => {
        filter(item) ? results.push(item) : null;
    })
    let parentElement = document.getElementById("resultPart");
    let replaceElement = document.getElementById('list_of_product');
    let newElement = document.createElement("div");
    if (results.length > 0) {
            results.map((item) => { addToList(item, newElement) })
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
    newElement.id = "list_of_product";
    document.getElementById('total').innerText = results.length + " products";
}
// filter function
function filter(obj) {
    let url = window.location.href;
    let pos = url.includes("&");
    if (pos !== -1) {
        let filterStr = url.slice(pos + 1);
        if (filterStr.includes("category")) {
            let catePos = filterStr.indexOf("category");
            let posOfAndSymbol = filterStr.indexOf("&", catePos);
            let arr = [];
            if (posOfAndSymbol !== -1) {
                arr = filterStr.slice(catePos + 9, posOfAndSymbol).split(",");
            } else {
                arr = filterStr.slice(catePos + 9).split(",");
            }
            if (arr.length !== 3) {
                let cateList = obj.cate.split(",");
                let numOfMatch = 0;
                for (let cate of cateList) {
                    for (let item in arr) {
                        if (arr[item].toUpperCase() == cate.toUpperCase()) {
                            numOfMatch += 1;
                        }
                    }
                }    
                if (numOfMatch === 0) { return false; }
            }
        }
        if (filterStr.includes("type")) {
            let typePos = filterStr.indexOf("type");
            let posOfAndSymbol = filterStr.indexOf("&", typePos);
            let arr = [];
            if (posOfAndSymbol !== -1) {
                arr = filterStr.slice(typePos + 5, posOfAndSymbol).split(",");
            } else {
                arr = filterStr.slice(typePos + 5).split(",");
            }
            if (arr.length !== 7) {
                let numOfMatch = 0;
                for (let item in arr) {
                    if (arr[item].toUpperCase() == obj.product.toUpperCase()) {
                        numOfMatch += 1;
                    }
                }
                if (numOfMatch === 0) { return false; }
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
function setUpFilter() {
    let url = window.location.href;
    let pos = url.includes("&");
    if (pos !== -1) {
        let filterStr = url.slice(pos + 1);
        if (filterStr.includes("category")) {
            let catePos = filterStr.indexOf("category");
            let posOfAndSymbol = filterStr.indexOf("&", catePos);
            let arr = [];
            if (posOfAndSymbol !== -1) {
                arr = filterStr.slice(catePos + 9, posOfAndSymbol).split(",");
            } else {
                arr = filterStr.slice(catePos + 9).split(",");
            }
            onLoad ? setUpCategoryFilter(arr) : null;
        }
        if (filterStr.includes("type")) {
            let typePos = filterStr.indexOf("color");
            let posOfAndSymbol = filterStr.indexOf("&", typePos);
            let arr = [];
            if (posOfAndSymbol !== -1) {
                arr = filterStr.slice(typePos + 5, posOfAndSymbol).split(",");
            } else {
                arr = filterStr.slice(typePos + 5).split(",");
            }
            onLoad ? setUpTypeFilter(arr) : null;
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
            onLoad ? setUpMinPriceFilter(minValue) : null;
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
            onLoad ? setUpMaxPriceFilter(maxValue) : null;
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

    } else {
        return false;
    }
    return true;
}
/* set up filter when page is loading*/
//set up type option
function setUpTypeFilter(arr) {
    for (let color of arr) {
        switch (color) {
            case "food":
                isCheckFood = true;
                document.getElementById("food").setAttribute("checked", null);
                break;
            case "toy":
                isCheckToy = true;
                document.getElementById("toy").setAttribute("checked", null);
                break;
            case "sup":
                isCheckSupplement = true;
                document.getElementById("sup").setAttribute("checked", null);
                break;
            case "costume":
                isCheckCostume = true;
                document.getElementById("costume").setAttribute("checked", null);
                break;
        }
    }
}
//set up category option
function setUpCategoryFilter(arr) {
    for (let breed of arr) {
        switch (breed) {
            case "dog":
                isCheckDog = true;
                document.getElementById("dog").setAttribute("checked", null);
                break;
            case "cat":
                isCheckCat = true;
                document.getElementById("cat").setAttribute("checked", null);
                break;
            case "pet":
                isCheckPet = true;
                document.getElementById("pet").setAttribute("checked", null);
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
//hover effect of a button-----------------------------------------------------------------

document.querySelector("#clear_btn").addEventListener("mouseover", () => {
    document.querySelector("#clear_btn>iconify-icon").style.color = "white";
    document.querySelector("#clear_btn>iconify-icon").style.transition = "0.3s";
})
document.querySelector("#clear_btn").addEventListener("mouseout", () => {
    document.querySelector("#clear_btn>iconify-icon").style.color = "#103559";
})

// add dog card to list function -----------------------------------------------
function addToList(product, node) {
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
    //create product type 
    let cardType = document.createElement("p");
    cardType.innerText = "Product: " + product.product;
    cardType.className = "dog-info d-inline";
    //create cardPrice
    let cardPrice = document.createElement("p");
    cardPrice.innerText = product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
    cardPrice.className = "dog-name fw-semibold mt-2 mb-1";
    // create card gift 
    let cardGift = document.createElement("div");
    cardGift.id = "present_tag";
    cardGift.className = "container rounded";
    // create gif iconify
    let icon = document.createElement("iconify-icon");
    icon.setAttribute("icon", "fxemoji:present");
    icon.style = "color: #103559;"
    icon.setAttribute("width", "24");
    icon.setAttribute("heigth", "24");
    icon.className = "mt-2";
    // create gif content
    let content = document.createElement("span");
    content.className = "position-relative ms-2";
    content.innerText = product.content;
    //------------------------------------------------------------------------
    //add icon, content to cardGif
    cardGift.appendChild(icon);
    cardGift.appendChild(content);
    //add cardName, cardType to info container
    cardInfo.appendChild(cardName);
    cardInfo.appendChild(cardType);
    if (product.size !== undefined) {
        //create product size 
        let cardSize = document.createElement("p");
        cardSize.innerText = " - Size: " + product.size;
        cardSize.className = "dog-info d-inline";
        cardInfo.appendChild(cardSize);
    }
    cardInfo.appendChild(cardPrice);
    cardInfo.appendChild(cardGift);
    //add cardImage and cardInfo to productCard
    productCard.appendChild(cardImage);
    productCard.appendChild(cardInfo);
    //add product card to container
    container.appendChild(productCard);
    //add container to list of product
    node.appendChild(container);
}


// productList.map(addProductToList)
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




