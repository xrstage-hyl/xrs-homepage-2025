// Portfolio filtering functionality
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    const categories = card.getAttribute('data-category').split(' ');
                    if (categories.includes(filterValue)) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                }
            });
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

    // Project card click handler
    document.querySelectorAll('.project-view-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            // Here you could open a modal or navigate to project details
            console.log('View project details');
        });
    });

    // Animate stats on scroll
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    animateValue(stat);
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        observer.observe(statsSection);
    }

    // Animate number counting
    function animateValue(element) {
        const value = element.textContent;
        const number = parseInt(value.replace(/[^0-9]/g, ''));
        const suffix = value.replace(/[0-9]/g, '');
        const duration = 2000;
        const step = number / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= number) {
                current = number;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + suffix;
        }, 16);
    }

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

    // CTA button handler
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', () => {
            console.log('Contact button clicked');
        });
    });
});