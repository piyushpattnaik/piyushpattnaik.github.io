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
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    const section = document.querySelector('.section');


    window.addEventListener('load', function () {
        loadingWrapper.style.display = 'none';
        header.style.display = 'block';
        footer.style.display = 'block';
        section.style.display = 'block';

    });
});
