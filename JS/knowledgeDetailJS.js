// data 
// import { knowledgeList } from "../JS/data.js";
// import { changeNav, changeIcon } from "../JS/navbar.js";
import { knowledgeList } from "/Monito-website/JS/data.js";
import { changeNav, changeIcon } from "/Monito-website/JS/navbar.js";

// call function -----------------------------------------------------------------

window.addEventListener("scroll", changeNav);
changeIcon();

//global var -----------------------------------------------------------------

var id = window.location.search.slice(4);
var onLoad = false;

function getData(id) {
    for (let i in knowledgeList) {
        if (knowledgeList[i].id == id) {
            return knowledgeList[i];
        }
    }
}

var knowledge = getData(id);
document.getElementById("knowledge-name").innerText = knowledge.name;
// set event ----------------------------------------------------------------
document.body.addEventListener("onload", () => { })

document.getElementById("knowledge-title").innerText = knowledge.name;
document.getElementById("knowledge-image").src = knowledge.banner;
document.getElementById("ref").innerText = knowledge.name;
document.getElementById("ref").href = knowledge.src;
var content = document.createElement("p");
content.innerText = knowledge.content;
document.getElementById("knowledge-data").appendChild(content);
for (let i = 1; i < knowledge.main.length + 1; i++) {
    let title = document.createElement("h3");
    let titleMark = document.createElement("a");
    let content = document.createElement("p");
    title.id = "item-" + i;
    titleMark.className = "nav-link";
    titleMark.href = "#item-" + i;
    titleMark.innerHTML = knowledge.main[i - 1].title;
    title.innerText = knowledge.main[i - 1].title;
    content.innerText = knowledge.main[i - 1].content;
    let ul;
    if (knowledge.main[i - 1].list !== undefined) {
        let list = knowledge.main[i - 1].list.split(",");
        ul = document.createElement("ul")
        for (let i = 0; i < list.length; i++) {
            let li = document.createElement("li");
            li.innerText = list[i];
            ul.appendChild(li);
        }
    }
    let child;
    let childMark;
    if (knowledge.main[i - 1].childContent !== undefined) {
        child = document.createElement("div");
        child.id = "knowledge-child";
        childMark = document.createElement("nav");
        childMark.className = "nav nav-pills flex-column";
        let list = knowledge.main[i - 1].childContent;
        for (let j = 0; j < list.length; j++) {
            let childTitle = document.createElement("h4");
            childTitle.id = "item-" + i + "-" + j;
            childTitle.innerText = list[j].title;
            let childContent = document.createElement("p");
            childContent.innerText = list[j].content;
            let titleMark = document.createElement("a");
            titleMark.className = "nav-link ms-3 my-1";
            titleMark.href = "#item-" + i + "-" + j;
            titleMark.innerText = list[j].title;
            child.appendChild(childTitle);
            child.appendChild(childContent);
            childMark.appendChild(titleMark);
        }
    }
    document.getElementById("knowledge-data").appendChild(title);
    document.getElementById("knowledge-data").appendChild(content);
    document.getElementById("knowledge-mark").appendChild(titleMark);
    ul !== undefined ? document.getElementById("knowledge-data").appendChild(ul) : null;
    child !== undefined ? document.getElementById("knowledge-data").appendChild(child) : null;
    child !== undefined ? titleMark.appendChild(childMark) : null;

}

//Display knowledge list
function displayKnowledgeList() {
    let flag = 0;
    for (let i = 0; i < knowledgeList.length; i++) {

        if (knowledgeList[i].id !== knowledge.id) {
            console.log(flag)
            if (flag < 3) {
                addKnowledgeToList(knowledgeList[i]);
                flag += 1;
            } else {
                break;
            }
        }
    }
}
displayKnowledgeList();

function addKnowledgeToList(value) {
    var html =
        '<div class="col-lg-4 col-md-4 p-2 knowledgeCard">'
        + '<div class="card card-style p-2">'
        + '<img src=' + value.image + ' class="card-img-top" alt="...">'
        + '<div class="card-body pb-0 ps-1 pe-1">'
        + '<h5><span class="badge rounded-pill text-bg-primary fw-normal p-2">Pet knowledge</span></h5>'
        + '<h5 class="card-title dog-name lh-base">' + `${value.name.length < 30 ? value.name + '<span style="color:white">add whitespace to end</span>' : value.name}` + '</h5>'
        + '<p class="dog-info d-inline lh-1" style="text-overflow:ellipsis">' + value.content.slice(0, 150) + "..." + '</p>'
        + '</div>'
        + '</div>'
        + '</div>';
    document.getElementById('list_of_knowledge').insertAdjacentHTML('beforeend', html);
}

var cardList = document.getElementsByClassName("knowledgeCard");
for (let i = 1; i < cardList.length + 1; i++) {
    cardList[i - 1].addEventListener('click', (e) => {
        e.preventDefault();
        window.location.assign("knowledge-detail.html?id=" + i);
    })
}