// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    
    const navbar = document.getElementById('navbar');
    const contactForm = document.getElementById('contact-form');

    // 1. Navbar Scroll Effect
    // Adds a shadow to the nav once you scroll down
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
            navbar.style.padding = '1rem 10%';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '1.5rem 10%';
        }
    });

    // 2. Form Submission Handling
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values (can be sent to an API)
            const name = contactForm.querySelector('input[type="text"]').value;
            
            alert(`Thanks for reaching out, ${name}! This form is currently a demo, but your message was captured.`);
            
            contactForm.reset();
        });
    }

    // 3. Smooth scroll offset adjustment 
    // (Optional: ensures the nav doesn't cover section headings)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const offset = 80; // height of the navbar
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = target.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
});