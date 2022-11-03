// data ------------------------------------------------------------
const dogList =
    [{ name: "MO231 - Pomeranian White", gene: "Male", age: "02 months", price: "5.000.000 VND", image: "ASSET/Dog1.png" },
    { name: "MO502 - Poodle Tiny Yellow", gene: "Female", age: "02 months", price: "3.900.000 VND", image: "ASSET/Dog2.png" },
    { name: "MO102 - Poodle Tiny Sepia", gene: "Male", age: "2 months", price: "4.000.000 VND", image: "ASSET/Dog3.png" },
    { name: "MO512 - Alaskan Malamute Grey", gene: "Male", age: "2 months", price: "8.900.000 VND", image: "ASSET/Dog4.png" },
    { name: "MO231 - Pembroke Corgi Cream", gene: "Male", age: "2 months", price: "7.900.000 VND", image: "ASSET/Dog5.png" },
    { name: "MO502 - Pembrole Corgi Tricolor", gene: "Male", age: "2 months", price: "9.000.000 VND", image: "ASSET/Dog6.png" },
    { name: "MO231 - Pomeranian White", gene: "Male", age: "2 months", price: "6.500.000 VND", image: "ASSET/Dog7.png" },
    { name: "MO231 - Poodle Tiny Dairy Cow", gene: "Female", age: "2 months", price: "5.000.000 VND", image: "ASSET/Dog8.png" }];

const catList =
    [{ name: "British Long Hair", gene: "Male", age: "02 months", price: "5.000.000 VND", image: "ASSET/Cat.png" },
    { name: "American Bobtail Cat Breed", gene: "Female", age: "02 months", price: "3.900.000 VND", image: "ASSET/Cat1.jpg" },
    { name: "American Curl Cat Breed", gene: "Male", age: "2 months", price: "4.000.000 VND", image: "ASSET/Cat2.jpg" },
    { name: "American Short hair Cat", gene: "Male", age: "2 months", price: "8.900.000 VND", image: "ASSET/Cat3.jpg" },
    { name: "Abyssinian Cat", gene: "Male", age: "2 months", price: "7.900.000 VND", image: "ASSET/Cat4.jpg" },
    { name: "American Wirehair Cat Breed", gene: "Male", age: "2 months", price: "9.000.000 VND", image: "ASSET/Cat5.jpg" },
    { name: "Bombay Cat", gene: "Male", age: "2 months", price: "6.500.000 VND", image: "ASSET/Cat6.jpg" },
    { name: "Chartreux Cat Breed", gene: "Female", age: "2 months", price: "5.000.000 VND", image: "ASSET/Cat7.jpg" },
    { name: "Birman Cat Breed", gene: "Female", age: "2 months", price: "5.000.000 VND", image: "ASSET/Cat8.jpg" }];

    const petList =
    [{ name: "Hamster yellow hair", gene: "Male", age: "02 months", price: "5.000.000 VND", image: "ASSET/Pet.jpg" },
    { name: "Hamster robo", gene: "Female", age: "02 months", price: "3.900.000 VND", image: "ASSET/Pet1.jpg" },
    { name: "White alcapa", gene: "Male", age: "2 months", price: "4.000.000 VND", image: "ASSET/Pet3.png" },
    { name: "Big parrot", gene: "Male", age: "02 months", price: "5.000.000 VND", image: "ASSET/Pet4.png" },
    { name: "Grey hamster", gene: "Female", age: "02 months", price: "3.900.000 VND", image: "ASSET/Pet6.jpg" },
    { name: "Yellow bird", gene: "Male", age: "2 months", price: "4.000.000 VND", image: "ASSET/Pet5.jpg" },
    ];

// global var -----------------------------------------------------------------

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
