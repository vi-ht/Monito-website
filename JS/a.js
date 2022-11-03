const doglist =
    [{ name: "MO231 - Pomeranian White", gene: "Male", age: "02 months", price: "5.000.000 VND", image: "ASSET/Dog1.png" },
    { name: "MO502 - Poodle Tiny Yellow", gene: "Female", age: "02 months", price: "3.900.000 VND", image: "ASSET/Dog2.png" },
    { name: "MO102 - Poodle Tiny Sepia", gene: "Male", age: "2 months", price: "4.000.000 VND", image: "ASSET/Dog3.png" },
    { name: "MO512 - Alaskan Malamute Grey", gene: "Male", age: "2 months", price: "8.900.000 VND", image: "ASSET/Dog4.png" },
    { name: "MO231 - Pembroke Corgi Cream", gene: "Male", age: "2 months", price: "7.900.000 VND", image: "ASSET/Dog5.png" },
    { name: "MO502 - Pembrole Corgi Tricolor", gene: "Male", age: "2 months", price: "9.000.000 VND", image: "ASSET/Dog6.png" },
    { name: "MO231 - Pomeranian White", gene: "Male", age: "2 months", price: "6.500.000 VND", image: "ASSET/Dog7.png" },
    { name: "MO231 - Poodle Tiny Dairy Cow", gene: "Female", age: "2 months", price: "5.000.000 VND", image: "ASSET/Dog8.png" }];
const add = doglist.map(addDogToList);
const url = window.location.href;
if(url.endsWith("dog")){
    document.getElementById("category").innerHTML = "Dog";
}else{
    document.getElementById("category").innerHTML = "Cat"
}
function addDogToList(value) {
    var html =
        '<div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 p-2">'
        + '<div class="card card-style p-2">'
        + '<img src=' + value.image + ' class="card-img-top" alt="...">'
        + '<div class="card-body pb-0 ps-1 pe-1">'
        + '<h5 class="card-title dog-name">' + value.name + '</h5>'
        + '<p class="dog-info d-inline">Gene: ' + value.gene + '</p> - <p class="dog-info d-inline">Age: ' + value.age + '</p>'
        + '<p class="dog-name fw-semibold mt-2 mb-1">' + value.price + '</p>'
        + '</div>'
        + '</div>'
        + '</div>';
    document.getElementById('pets_list').insertAdjacentHTML('beforeend', html);
}
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


document.getElementById("open_btn").style.display = "block";
document.getElementById("close_btn").style.display = "none";
function changeIcon(value){
    if(value === 1){
        document.getElementById("close_btn").style.display = "block";
        document.getElementById("open_btn").style.display = "none";
    }else{
        document.getElementById("close_btn").style.display = "none";
        document.getElementById("open_btn").style.display = "block";
    }
    

};
