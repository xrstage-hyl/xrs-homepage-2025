// Smooth scrolling for navigation links
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

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = 'rgb(0, 0, 0)';
        navbar.style.backdropFilter = 'none';
    }
});

// Intersection Observer for fade-in animations
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

// Apply observer to elements
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to sections
    const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .about-text');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(element);
    });

    // Hero text animation
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const ctaButton = document.querySelector('.cta-button');
    
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(50px)';
        setTimeout(() => {
            heroTitle.style.transition = 'opacity 1s ease, transform 1s ease';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 200);
    }
    
    if (heroSubtitle) {
        heroSubtitle.style.opacity = '0';
        heroSubtitle.style.transform = 'translateY(30px)';
        setTimeout(() => {
            heroSubtitle.style.transition = 'opacity 1s ease, transform 1s ease';
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
        }, 400);
    }
    
    if (ctaButton) {
        ctaButton.style.opacity = '0';
        ctaButton.style.transform = 'translateY(20px)';
        setTimeout(() => {
            ctaButton.style.transition = 'opacity 1s ease, transform 1s ease';
            ctaButton.style.opacity = '1';
            ctaButton.style.transform = 'translateY(0)';
        }, 600);
    }
});

// Language toggle functionality
const languageBtn = document.querySelector('.language-btn');
if (languageBtn) {
    languageBtn.addEventListener('click', () => {
        const currentLang = languageBtn.querySelector('span').textContent;
        if (currentLang === '한국어') {
            languageBtn.querySelector('span').textContent = 'English';
            // Here you could implement actual language switching
        } else {
            languageBtn.querySelector('span').textContent = '한국어';
        }
    });
}

// CTA Button click handlers
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
        // You can add form modal or redirect logic here
        console.log('Contact button clicked');
        // For now, let's scroll to contact section
        const contactSection = document.querySelector('.contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Portfolio item hover effect enhancement
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.02)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    
    if (heroImage && scrolled < window.innerHeight) {
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add cursor glow effect
document.addEventListener('mousemove', (e) => {
    const glowEffect = document.createElement('div');
    glowEffect.className = 'cursor-glow';
    glowEffect.style.left = e.pageX + 'px';
    glowEffect.style.top = e.pageY + 'px';
    
    // Remove this for now as it may cause performance issues
    // Uncomment if you want a glow effect following the cursor
    // document.body.appendChild(glowEffect);
    // setTimeout(() => glowEffect.remove(), 1000);
});

// Mobile menu toggle (if needed in the future)
function createMobileMenu() {
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    if (window.innerWidth <= 810) {
        // Add mobile menu logic here if needed
    }
}

// Initialize on load
window.addEventListener('load', () => {
    createMobileMenu();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
});