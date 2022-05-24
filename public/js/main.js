const toggleIcon = document.querySelector(".toggle-icon");
const navMenu = document.querySelector(".nav-menu");

toggleIcon.addEventListener("click", mobileMenu);

function mobileMenu() {
    toggleIcon.classList.toggle("active");
    navMenu.classList.toggle("active");
}