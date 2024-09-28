// script.js

// Select the hamburger icon and menu
const menuIcon = document.getElementById('mobile-menu-icon');
const navMenu = document.getElementById('nav-menu');

// Toggle the 'active' class on the menu when hamburger icon is clicked
menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
