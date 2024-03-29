// Smooth scrolling
document.addEventListener("DOMContentLoaded", function () {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    // Toggle icon
    const currentIcon = darkModeToggle.querySelector('i');
    currentIcon.classList.toggle('fa-moon');
    currentIcon.classList.toggle('fa-sun');
});

//Loading//
document.addEventListener("DOMContentLoaded", function () {
    const loadingWrapper = document.querySelector('.loading-wrapper');
    const home = document.querySelector('.home');

    window.addEventListener('load', function () {
        loadingWrapper.style.display = 'none';
        home.style.display = 'block';
    });
});

// Disable right-click context menu
document.addEventListener('contextmenu', event => {event.preventDefault();});

const nav = document.querySelector(".nav"),
    navOpenBtn = document.querySelector(".navOpenBtn"),
    navCloseBtn = document.querySelector(".navCloseBtn");

navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");
    nav.classList.remove("openSearch");
    searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
});
// JavaScript to close nav when links are clicked
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-links');
    const navCloseBtn = document.querySelector('.navCloseBtn');
    const nav = document.querySelector('.nav');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('openNav');
        });
    });

    navCloseBtn.addEventListener('click', () => {
        nav.classList.remove('openNav');
    });
});