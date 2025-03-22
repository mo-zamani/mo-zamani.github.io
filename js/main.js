// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scrolled');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scrolled')) {
        // Scrolling down
        header.classList.add('scrolled');
    } else if (currentScroll < lastScroll && header.classList.contains('scrolled')) {
        // Scrolling up
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if (barPosition < screenPosition) {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = `${progress}%`;
        }
    });
};

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// Typing effect for hero subtitle
const heroSubtitle = document.querySelector('.hero-subtitle');
const text = heroSubtitle.textContent;
heroSubtitle.textContent = '';

let i = 0;
const typeWriter = () => {
    if (i < text.length) {
        heroSubtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
};

// Start typing effect when the page loads
window.addEventListener('load', typeWriter);

// Parallax effect for hero section
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
});

// Add hover effect to publication cards
const publicationCards = document.querySelectorAll('.publication-card');
publicationCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add loading animation for images
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('load', () => {
        img.classList.add('loaded');
    });
});

// Add intersection observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.about-content, .timeline-item, .research-card, .skill-category, .publication-card, .contact-card').forEach(el => {
    observer.observe(el);
}); 