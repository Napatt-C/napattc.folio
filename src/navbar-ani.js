// click hamburger to reveal hidden navbar page

const hamBar = document.querySelector('.nav-hamburger');
const wrapCon = document.querySelector('.wrapped-navbar-container');


hamBar.addEventListener("click", () => {
    wrapCon.classList.toggle('change');
});


// self-image move opposite way mousemove: welcome page

let welPageCon = document.querySelector('.welcome-page-container');
let pattImg = document.querySelector('.patt-img');

welPageCon.addEventListener("mousemove", mouseFollow);

function mouseFollow(e) {
    let movingVal = pattImg.getAttribute("data-value");
    let x = (e.clientX * movingVal) / 300;
    let y = (e.clientY * movingVal) / 300;

    pattImg.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
};

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

