// Initialize skill progress bars
document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const value = bar.getAttribute('data-value');
        bar.style.width = `${value}%`;
    });
});

// Navigation active state on scroll
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const footer = document.querySelector('footer');
    const navLinks = document.querySelectorAll('.nav-links a');

    function setActiveLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        // Special handling for footer/contact section
        const footerTop = footer.offsetTop;
        if (window.scrollY >= footerTop - 150) {
            current = 'contact';
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);
    window.addEventListener('load', setActiveLink);
});

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('show');
        navToggle.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
        }
        // Close mobile menu after clicking a link
        navLinks.classList.remove('show');
        navToggle.classList.remove('active');
    });
}); 