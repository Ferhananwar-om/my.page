// Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Dot follows immediately
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline follows with slight delay (animation in CSS works, but we can animate positions too)
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Cursor Hover Effect
const links = document.querySelectorAll('a, button, .project-card, .skill-item');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorOutline.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        cursorOutline.style.borderColor = 'transparent';
    });
    link.addEventListener('mouseleave', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.backgroundColor = 'transparent';
        cursorOutline.style.borderColor = 'rgba(255, 255, 255, 0.5)';
    });
});

// Scroll Animations
const observeElements = document.querySelectorAll('section, h2, .project-card, .skill-item, .step');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Optional: stop observing once revealed
            // observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.1 });

observeElements.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// Mobile Menu
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
// Select links specifically within the nav list
const navItems = document.querySelectorAll('.nav-links a');

menuBtn.addEventListener('click', () => {
    toggleMenu();
});

// Close menu when a link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('active-menu')) {
            toggleMenu();
        }
    });
});

function toggleMenu() {
    navLinks.classList.toggle('active-menu');
    // Optional: toggle icon state if desired
}

