// ===== MAIN JAVASCRIPT =====

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            backToTop.classList.add('visible');
        } else {
            navbar.classList.remove('scrolled');
            backToTop.classList.remove('visible');
        }
    });
    
    // ===== MOBILE MENU TOGGLE =====
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // ===== ACTIVE NAV LINK =====
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
    
    // ===== COUNTER ANIMATION =====
    const counters = document.querySelectorAll('.counter');
    let counted = false;
    
    function startCounter() {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const speed = 50;
            const increment = target / speed;
            let count = 0;
            
            const updateCount = () => {
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCount, 30);
                } else {
                    counter.innerText = target + '+';
                }
            };
            updateCount();
        });
    }
    
    // Trigger counter when scrolled to stats section
    window.addEventListener('scroll', function() {
        if (!counted) {
            const statsSection = document.querySelector('.hero-stats');
            if (statsSection) {
                const position = statsSection.getBoundingClientRect();
                if (position.top < window.innerHeight) {
                    startCounter();
                    counted = true;
                }
            }
        }
    });
    
    // ===== BACK TO TOP BUTTON =====
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ===== FORM SUBMISSION =====
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        
        // Show loading state
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.innerText;
        submitBtn.innerText = 'Sending...';
        submitBtn.disabled = true;
        
        // Send form data
        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert('Thank you! Your inquiry has been sent successfully. We will get back to you within 2 hours.');
                contactForm.reset();
            } else {
                alert('Oops! Something went wrong. Please email us directly at info.storyandsmiles@gmail.com');
            }
        })
        .catch(error => {
            alert('Oops! Something went wrong. Please email us directly at info.storyandsmiles@gmail.com');
        })
        .finally(() => {
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
        });
    });
});

// ===== WHATSAPP FUNCTIONALITY =====
const whatsappMainBtn = document.getElementById('whatsappMainBtn');
const whatsappPopup = document.getElementById('whatsappPopup');
const whatsappPopupClose = document.getElementById('whatsappPopupClose');

// Toggle WhatsApp popup
whatsappMainBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    whatsappPopup.classList.toggle('active');
});

// Close popup when clicking close button
whatsappPopupClose.addEventListener('click', function() {
    whatsappPopup.classList.remove('active');
});

// Close popup when clicking outside
document.addEventListener('click', function(e) {
    if (!whatsappPopup.contains(e.target) && e.target !== whatsappMainBtn) {
        whatsappPopup.classList.remove('active');
    }
});

// Close popup on scroll
window.addEventListener('scroll', function() {
    if (whatsappPopup.classList.contains('active')) {
        whatsappPopup.classList.remove('active');
    }
});