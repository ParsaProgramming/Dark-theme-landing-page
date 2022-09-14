let button = document.querySelector("i.bi-justify");
let menu = document.querySelector(".links");
let menuTimes = document.querySelector("i.bi-x-lg");

function OpenMenu(){
    menu.style.right = "0px";
    menuTimes.style.display = "block";
}

function CloseMenu(){
    menu.style.right = "-200px";
    menuTimes.style.display = "none";
}

menuTimes.addEventListener("click", CloseMenu)

button.addEventListener("click", OpenMenu);