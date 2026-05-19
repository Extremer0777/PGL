document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const phone = document.getElementById('contact-phone').value || 'Not provided';
            const service = document.getElementById('contact-service').value;
            const message = document.getElementById('contact-message').value;
            
            const emailTo = 'info@perfectglazinglondon.com';
            const subject = encodeURIComponent(`Perfect Glazing London - Quote Request from ${name}`);
            
            const body = encodeURIComponent(
                `Hello Perfect Glazing London,\n\n` +
                `You have received a new quote inquiry from your website:\n\n` +
                `Name: ${name}\n` +
                `Email: ${email}\n` +
                `Phone: ${phone}\n` +
                `Service of Interest: ${service}\n\n` +
                `Message Details:\n${message}\n\n` +
                `Best regards,\n${name}`
            );
            
            // Redirect to standard mailto link to trigger client email composer
            window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
        });
    }
});
