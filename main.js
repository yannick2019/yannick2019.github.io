const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");


function mobileMenu() {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
}

hamburger.addEventListener("click", mobileMenu);

