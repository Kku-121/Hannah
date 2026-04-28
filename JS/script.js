
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

fadeElements.forEach(el => observer.observe(el));

const bookBtn = document.getElementById('bookBtn');

bookBtn.addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({
    behavior: 'smooth'
  });
});

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  alert('Your tattoo consultation request has been sent.');

  contactForm.reset();
});