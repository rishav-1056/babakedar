// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
    navLinks.style.left = "0";
}
menuCloseBtn.onclick = function () {
    navLinks.style.left = "-100%";
}



let arrow1 = document.querySelector(".arrow1");
arrow1.onclick = function () {
    navLinks.classList.toggle("show1");
}

let arrow2 = document.querySelector(".arrow2");
arrow2.onclick = function () {
    navLinks.classList.toggle("show2");
}

let arrow3 = document.querySelector(".arrow3");
arrow3.onclick = function () {
    navLinks.classList.toggle("show3");
}

let arrow4 = document.querySelector(".arrow4");
arrow4.onclick = function () {
    navLinks.classList.toggle("show4");
}