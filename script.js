// ============================================
// MOBILE NAVIGATION
// ============================================
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

if (burger) {
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('active');
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            burger.classList.remove('toggle');
        }
    });
});

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
const animatedElements = document.querySelectorAll(
    '.project-card-large, .contact-card, .stat-card, .tech-category'
);

animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease-out';
    observer.observe(element);
});

// ============================================
// ACTIVE LINK HIGHLIGHTING
// ============================================
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinksArray = document.querySelectorAll('.nav-links a');

navLinksArray.forEach(link => {
    const linkPage = link.getAttribute('href').split('#')[0];
    if (linkPage === currentPage || 
        (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
    }
});

// ============================================
// CONSOLE EASTER EGG
// ============================================
console.log('%c🚀 Welcome to My Portfolio!', 'font-size: 20px; color: #6366f1; font-weight: bold;');
console.log('%c💡 Interested in AI/ML development?', 'font-size: 14px; color: #8b5cf6;');
console.log('%c📧 Let\'s collaborate!', 'font-size: 14px; color: #10b981;');
console.log('%c🔗 GitHub: https://github.com/unknownfriend00007', 'font-size: 12px; color: #cbd5e1;');

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
// Lazy load images if needed in future
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}