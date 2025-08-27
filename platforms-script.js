// AI Solutions Page Scripts

document.addEventListener('DOMContentLoaded', () => {
    // Animate service cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add staggered animation to feature list items
                const featureItems = entry.target.querySelectorAll('.feature-list li');
                featureItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Apply observer to service cards
    const serviceCards = document.querySelectorAll('.ai-service-card');
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(card);
        
        // Style feature list items for animation
        const featureItems = card.querySelectorAll('.feature-list li');
        featureItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
    });

    // Animate use case cards
    const useCaseCards = document.querySelectorAll('.use-case');
    useCaseCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Neural network animation enhancement
    const nodes = document.querySelectorAll('.node');
    nodes.forEach(node => {
        node.addEventListener('mouseenter', () => {
            nodes.forEach(otherNode => {
                if (otherNode !== node) {
                    otherNode.style.transform = 'scale(0.8)';
                    otherNode.style.opacity = '0.5';
                }
            });
            node.style.transform = 'scale(1.5)';
        });
        
        node.addEventListener('mouseleave', () => {
            nodes.forEach(otherNode => {
                otherNode.style.transform = 'scale(1)';
                otherNode.style.opacity = '0.8';
            });
        });
    });

    // Tech logo hover effect
    const techLogos = document.querySelectorAll('.tech-logo');
    techLogos.forEach(logo => {
        logo.addEventListener('mouseenter', () => {
            logo.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        logo.addEventListener('mouseleave', () => {
            logo.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Smooth scroll for navigation
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

    // CTA button interactions
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', () => {
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            console.log('CTA button clicked:', button.textContent);
        });
    });

    // Language toggle
    const languageBtn = document.querySelector('.language-btn');
    if (languageBtn) {
        languageBtn.addEventListener('click', () => {
            const currentLang = languageBtn.querySelector('span').textContent;
            if (currentLang === '한국어') {
                languageBtn.querySelector('span').textContent = 'English';
            } else {
                languageBtn.querySelector('span').textContent = '한국어';
            }
        });
    }

    // Add parallax effect to hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.ai-hero-content');
        
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
        }
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

    // Add glow effect to service icons on hover
    const serviceIcons = document.querySelectorAll('.service-icon');
    serviceIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            const glow = icon.querySelector('.icon-glow');
            if (glow) {
                glow.style.animation = 'glow 0.5s ease-in-out infinite';
            }
        });
        
        icon.addEventListener('mouseleave', () => {
            const glow = icon.querySelector('.icon-glow');
            if (glow) {
                glow.style.animation = 'glow 2s ease-in-out infinite';
            }
        });
    });
});

// Add ripple effect styles dynamically
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);