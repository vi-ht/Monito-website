// data ------------------------------------------------------------

const productList =
    [{ name: "Reflex Plus Adult Cat Food Salmon", product: "Dog Food", size: "385gm", price: "140.000 VND", image: "ASSET/Product1.png", content: "Free Toy & Free Shaker" },
    { name: "Reflex Plus Adult Cat Food Salmon", product: "Cat Food", size: "1.5kg", price: "165.000 VND", image: "ASSET/Product2.png", content: "Free Toy & Free Shake" },
    { name: "Cat scratching ball toy kitten sisal rope ball", product: "Toy", price: "1.000.000 VND", image: "ASSET/Product3.png", content: "Free Cat Food" },
    { name: "Cute Pet Cat Warm Nest", product: "Toy", price: "400.000 VND", image: "ASSET/Product4.png", content: "Free Cat Food" },
    { name: "NaturVet Dogs - Omega-Gold Plus Salmon Oil", product: "Dog Food", size: "385 grams", price: "350.000 VND", image: "ASSET/Product5.png", content: "Free Toy & Free Shake" },
    { name: "Costumes Fashion Pet Clother Cowboy Rider", product: "Costume", size: "1.5kg", price: "500.000 VND", image: "ASSET/Product6.png", content: "Free Toy & Free Shake" },
    { name: "Costumes Chicken Drumsti ck Headband", product: "Costume", price: "400.000 VND", image: "ASSET/Product7.png", content: "Free Cat Food" },
    { name: "Plush Pet Toy", product: "Toy", price: "250.000 VND", image: "ASSET/Product8.png", content: "Free Food & Free Shake" },
    { name: "Pedigree Food", product: "Toy", price: "250.000 VND", image: "ASSET/Product9.png", content: "Free Food & Free Shake" }];

// global var -----------------------------------------------------------------

const addProduct = productList.map(addProductToList);
document.getElementById("total").innerHTML = productList.length > 1 ? productList.length + " products" : productList.length + " product";
// add dog card to list function -----------------------------------------------

function addProductToList(value) {
    var html =
        '<div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 p-2">'
        + '<div class="card card-style p-2">'
        + '<img src=' + value.image + ' class="card-img-top" alt="...">'
        + '<div class="card-body pb-0 ps-1 pe-1">'
        + '<h5 class="card-title dog-name">' + `${value.name.length < 30 ? value.name + '<span style="color:white">add whitespace to end</span>' : value.name}` + '</h5>'
        + '<p class="dog-info d-inline">Product: ' + value.product + '</p>' + `${value.size !== undefined ? ' - <p class="dog-info d-inline">Size: ' + value.size + '</p>' : ''}`
        + '<p class="dog-name fw-semibold mt-2 mb-1">' + value.price + '</p>'
        + '<div class="container rounded" id="present_tag">'
        + '<iconify-icon icon="fxemoji:present" style="color: #103559;" width="24" height="24" class="mt-2"></iconify-icon>'
        + '<span class="position-relative ms-2">' + value.content + '</span>'
        + '</div>'
        + '</div>'
        + '</div>'
        + '</div>';
    document.getElementById('list_of_product').insertAdjacentHTML('beforeend', html);
}

// listen scroll event to change style of navbar-----------------------------------------------

window.addEventListener("scroll", function (event) {
    var scroll_y = this.scrollY;
    if (scroll_y > 0) {
        document.getElementById("bg-nav").style.display = "block";
        document.getElementById("pageLogo").style.width = "110px";
        document.getElementById("pageLogo").style.height = "40px";
    } else {
        document.getElementById("bg-nav").style.display = "none";
        document.getElementById("pageLogo").style.width = "130px";
        document.getElementById("pageLogo").style.height = "50px";
    }
});

// Change state of navbar -----------------------------------------------

document.getElementById("open_btn").style.display = "block";
document.getElementById("close_btn").style.display = "none";
function changeIcon(value) {
    if (value === 1) {
        document.getElementById("close_btn").style.display = "block";
        document.getElementById("open_btn").style.display = "none";
    } else {
        document.getElementById("close_btn").style.display = "none";
        document.getElementById("open_btn").style.display = "block";
    }
};
