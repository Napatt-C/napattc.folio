let emailBox = document.querySelector('.email-container');
let email = document.getElementById('email').textContent;
let clickcopyText = document.getElementById('clickcopy');

function copyEmail() {
    navigator.clipboard.writeText(email);
};

emailBox.addEventListener("click", () => {
    copyEmail();
    circleText.textContent = "Copied";
    circle.style.backgroundColor = "#EAB28A";

});

// click to copy text move along mousemove

const circle = document.querySelector('.circle');
const circleText = document.querySelector('.circle-text');

function circleFollow(e) {
    let moveValue = emailBox.getAttribute("data-value");
    let x = (e.clientX * moveValue) / 500;
    let y = (e.clientY * moveValue) / 500;

    circle.style.transform = "translateX(" + x + "px) translateY(" + y + "px)"; 
    circleText.style.transform = "translateX(" + x + "px) translateY(" + y + "px)"; 
};

emailBox.addEventListener("mousemove", circleFollow);


