// listen scroll event to change style of navbar-----------------------------------------------

function changeNav(event) {
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
}
// Change state of navbar -----------------------------------------------

function changeIcon() {
    var closeBtn = document.getElementById("close_btn");
    var openBtn = document.getElementById("open_btn");
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
    document.querySelector("#open_btn").addEventListener('click', () => {
        closeBtn.style.display = "block";
        openBtn.style.display = "none";
    });
    document.querySelector("#close_btn").addEventListener('click', () => {
        closeBtn.style.display = "none";
        openBtn.style.display = "block";
    });
}

export { changeNav, changeIcon };
