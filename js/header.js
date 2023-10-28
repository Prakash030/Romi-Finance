const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
document.addEventListener('DOMContentLoaded', function() {
    // Get the close button element
    var closeButton = document.querySelector('.nav-menu::before');

    // Add click event listener to the close button
    closeButton.addEventListener('click', function() {
        // Get the menu element
        // var menu = document.querySelector('.nav-menu');

        // Remove the 'active' class to hide the menu
        navMenu.classList.remove('active');
    });
});