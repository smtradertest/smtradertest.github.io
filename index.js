const hamburger = document.getElementById('hamburger');
const cross = document.getElementById('cross');
const menu = document.getElementById('menu');
const menuItems = document.querySelectorAll('#menu a');

// Function to close the menu
const closeMenu = () => {
    menu.classList.remove('active');
    menu.classList.add('closing');
    hamburger.classList.remove('hidden');
    cross.classList.remove('active');
};

hamburger.addEventListener('click', () => {
    if (menu.classList.contains('closing')) {
        menu.classList.remove('closing');
    }
    menu.classList.toggle('active');
    hamburger.classList.toggle('hidden');
    cross.classList.toggle('active');
});

cross.addEventListener('click', closeMenu);

menuItems.forEach(item => {
    item.addEventListener('click', closeMenu);
});

menu.addEventListener('animationend', (event) => {
    if (event.animationName === 'slideOut') {
        menu.classList.remove('closing');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.getElementById('current-year').textContent = new Date().getFullYear();
