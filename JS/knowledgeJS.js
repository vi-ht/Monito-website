// data 
// import { knowledgeList } from "../JS/data.js";
// import { changeNav, changeIcon } from "../JS/navbar.js";
import { knowledgeList } from "../Monito-website/JS/data.js";
import { changeNav, changeIcon } from "../Monito-website/JS/navbar.js";
// call function -----------------------------------------------------------------

window.addEventListener("scroll", changeNav);
changeIcon();

// hover style of button ----------------------------------------------------------------
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

//Display knowledge list

knowledgeList.map(addKnowledgeToList);
document.getElementById("total").innerHTML = knowledgeList.length > 1 ? knowledgeList.length + " tips" : knowledgeList.length + " tip";
function addKnowledgeToList(value) {
    var html =
        '<div class="col-lg-4 col-md-4 p-2 knowledgeCard">'
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

var cardList = document.getElementsByClassName("knowledgeCard");
for (let i=1; i<cardList.length+1; i++) {
    cardList[i-1].addEventListener('click', (e) => {
        e.preventDefault();
        window.location.assign("knowledge-detail.html?id="+i);
    })
}