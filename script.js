// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initScrollEffects();
    initContactForm();
    initAnimations();
});

// Navigation functionality
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });
}

// Scroll effects and animations
function initScrollEffects() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.tech-item, .rd-item, .portfolio-item, .about-content, .contact-content');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const elements = document.querySelectorAll('.element');
        
        if (hero) {
            const rate = scrolled * -0.5;
            elements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.1);
                element.style.transform = `translateY(${rate * speed}px)`;
            });
        }
    });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
            this.reset();
            closeContactForm();
        });
    }
}

// Animation initialization
function initAnimations() {
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('.tech-item, .rd-item, .portfolio-item, .cta-button');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Hero title appears immediately without typing animation
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // Title is already in HTML, no animation needed
    }
}

// Utility functions
function scrollToContact() {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function openContactForm() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeContactForm() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function toggleLanguage() {
    const langText = document.querySelector('.lang-text');
    const currentLang = langText.textContent;
    
    if (currentLang === '한국어') {
        langText.textContent = 'English';
        // Add Korean language content here
        updateContentToKorean();
    } else {
        langText.textContent = '한국어';
        // Add English language content here
        updateContentToEnglish();
    }
}

function updateContentToKorean() {
    // Update hero section
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = '<span class="title-line">AI로 재정의하는</span><span class="title-line highlight">XR의 세계</span>';
    }
    
    const heroDescription = document.querySelector('.hero-description');
    if (heroDescription) {
        heroDescription.textContent = 'AI와 XR을 융합하여 차세대 현실 경험을 창조합니다.';
    }
    
    // Update about section
    const aboutDescription = document.querySelector('.about-description');
    if (aboutDescription) {
        aboutDescription.textContent = '우리는 인공지능과 몰입형 기술을 융합하여 확장현실의 미래를 선도합니다.';
    }
    
    // Update contact section
    const contactTitle = document.querySelector('.contact .section-title');
    if (contactTitle) {
        contactTitle.textContent = '파트너십에 관심이 있으신가요?';
    }
    
    const contactSubtitle = document.querySelector('.contact-subtitle');
    if (contactSubtitle) {
        contactSubtitle.textContent = '지금 연락하세요.';
    }
}

function updateContentToEnglish() {
    // Update hero section
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = '<span class="title-line">Redefining</span><span class="title-line highlight">XR with AI</span>';
    }
    
    const heroDescription = document.querySelector('.hero-description');
    if (heroDescription) {
        heroDescription.textContent = 'Blending AI and XR to create next-gen real world experiences.';
    }
    
    // Update about section
    const aboutDescription = document.querySelector('.about-description');
    if (aboutDescription) {
        aboutDescription.textContent = 'We are pioneering the future of extended reality by seamlessly integrating artificial intelligence with immersive technologies.';
    }
    
    // Update contact section
    const contactTitle = document.querySelector('.contact .section-title');
    if (contactTitle) {
        contactTitle.textContent = 'Interested in partnership?';
    }
    
    const contactSubtitle = document.querySelector('.contact-subtitle');
    if (contactSubtitle) {
        contactSubtitle.textContent = 'Contact us now.';
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        background: ${type === 'success' ? 'linear-gradient(45deg, #00d4ff, #ff6b6b)' : '#ff4757'};
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    const modal = document.getElementById('contactModal');
    if (e.target === modal) {
        closeContactForm();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeContactForm();
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add particle effect to hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(0, 212, 255, 0.3);
            border-radius: 50%;
            pointer-events: none;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 50}%;
            animation-delay: ${Math.random() * 2}s;
            z-index: 1;
        `;
        hero.appendChild(particle);
    }
}

// Hero image enhancement
function enhanceHeroImage() {
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        // Add subtle animation on load
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            heroImage.style.transition = 'opacity 1s ease, transform 1s ease';
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'scale(1)';
        }, 500);
    }
}

// Portfolio carousel functionality
let currentSlide = 0;
const totalSlides = 5;

function slidePortfolio(direction) {
    const track = document.querySelector('.carousel-track');
    const dots = document.querySelectorAll('.dot');
    
    if (direction === 'next') {
        currentSlide = (currentSlide + 1) % totalSlides;
    } else {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    }
    
    const translateX = -currentSlide * (400 + 32); // 400px width + 32px gap
    track.style.transform = `translateX(${translateX}px)`;
    
    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    const track = document.querySelector('.carousel-track');
    const dots = document.querySelectorAll('.dot');
    
    const translateX = -currentSlide * (400 + 32);
    track.style.transform = `translateX(${translateX}px)`;
    
    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Auto-slide functionality
function autoSlide() {
    slidePortfolio('next');
}

// Start auto-slide
let autoSlideInterval = setInterval(autoSlide, 5000);

// Pause auto-slide on hover
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.portfolio-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });
        
        carousel.addEventListener('mouseleave', () => {
            autoSlideInterval = setInterval(autoSlide, 5000);
        });
    }
});

// Initialize particles and image enhancement
setTimeout(createParticles, 1000);
setTimeout(enhanceHeroImage, 500); 