// data 
const doglist = [{ name: "MO231 - Pomeranian White", gene: "Male", age: "02 months", price: "5.000.000 VND", image: "ASSET/Dog1.png" },
{ name: "MO502 - Poodle Tiny Yellow", gene: "Female", age: "02 months", price: "3.900.000 VND", image: "ASSET/Dog2.png" },
{ name: "MO102 - Poodle Tiny Sepia", gene: "Male", age: "2 months", price: "4.000.000 VND", image: "ASSET/Dog3.png" },
{ name: "MO512 - Alaskan Malamute Grey", gene: "Male", age: "2 months", price: "8.900.000 VND", image: "ASSET/Dog4.png" },
{ name: "MO231 - Pembroke Corgi Cream", gene: "Male", age: "2 months", price: "7.900.000 VND", image: "ASSET/Dog5.png" },
{ name: "MO502 - Pembrole Corgi Tricolor", gene: "Male", age: "2 months", price: "9.000.000 VND", image: "ASSET/Dog6.png" },
{ name: "MO231 - Pomeranian White", gene: "Male", age: "2 months", price: "6.500.000 VND", image: "ASSET/Dog7.png" },
{ name: "MO231 - Poodle Tiny Dairy Cow", gene: "Female", age: "2 months", price: "5.000.000 VND", image: "ASSET/Dog8.png" }];
const productList =
    [{ name: "Reflex Plus Adult Cat Food Salmon", product: "Dog Food", size: "385gm", price: "140.000 VND", image: "ASSET/Product1.png", content: "Free Toy & Free Shaker" },
    { name: "Reflex Plus Adult Cat Food Salmon", product: "Cat Food", size: "1.5kg", price: "165.000 VND", image: "ASSET/Product2.png", content: "Free Toy & Free Shake" },
    { name: "Cat scratching ball toy kitten sisal rope ball", product: "Toy", price: "1.000.000 VND", image: "ASSET/Product3.png", content: "Free Cat Food" },
    { name: "Cute Pet Cat Warm Nest", product: "Toy", price: "400.000 VND", image: "ASSET/Product4.png", content: "Free Cat Food" },
    { name: "NaturVet Dogs - Omega-Gold Plus Salmon Oil", product: "Dog Food", size: "385 grams", price: "350.000 VND", image: "ASSET/Product5.png", content: "Free Toy & Free Shake" },
    { name: "Costumes Fashion Pet Clother Cowboy Rider", product: "Costume", size: "1.5kg", price: "500.000 VND", image: "ASSET/Product6.png", content: "Free Toy & Free Shake" },
    { name: "Costumes Chicken Drumsti ck Headband", product: "Costume", price: "400.000 VND", image: "ASSET/Product7.png", content: "Free Cat Food" },
    { name: "Plush Pet Toy", product: "Toy", price: "250.000 VND", image: "ASSET/Product8.png", content: "Free Food & Free Shake" }];

// var declaration

    const add = doglist.map(addDogToList);
    const addProduct = productList.map(addProductToList);

// function 

function addDogToList(value) {
    var html =
        '<div class="col-lg-3 col-md-4 p-2 ">'
        + '<div class="card card-style p-2">'
        + '<img src=' + value.image + ' class="card-img-top" alt="...">'
        + '<div class="card-body pb-0 ps-1 pe-1">'
        + '<h5 class="card-title dog-name">' + value.name + '</h5>'
        + '<p class="dog-info d-inline">Gene: ' + value.gene + '</p> - <p class="dog-info d-inline">Age: ' + value.age + '</p>'
        + '<p class="dog-name fw-semibold mt-2 mb-1">' + value.price + '</p>'
        + '</div>'
        + '</div>'
        + '</div>';
    document.getElementById('list_of_card').insertAdjacentHTML('beforeend', html);
}

function addProductToList(value) {
    var html =
        '<div class="col-lg-3 col-md-4 p-2 ">'
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

// get scroll position
// var position = document.getElementById('position'); 
// position.innerHTML = "" 

window.addEventListener("scroll", function (event) {

    var scroll_y = this.scrollY;
    var scroll_x = this.scrollX;
    // console.log(scroll_x, scroll_y); 
    // position.innerHTML = " X-axis : " 
    // + scroll_x + " và Y-axis : " + scroll_y 
}); 