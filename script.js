// js/script.js

document.addEventListener('DOMContentLoaded', function() {
  // Menu mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    this.classList.toggle('active');
  });
  
  // Compte à rebours pour la promotion
  function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;
    
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7); // 7 jours à partir de maintenant
    
    const now = new Date();
    const diff = endDate - now;
    
    if (diff <= 0) {
      countdownElement.textContent = "Promotion terminée!";
      return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    countdownElement.textContent = `${days}j ${hours}h ${minutes}m ${seconds}s`;
  }
  
  setInterval(updateCountdown, 1000);
  updateCountdown();
  
  // Animation au scroll
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.product-card, .category-card, .testimonial-card');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (elementPosition < screenPosition) {
        element.classList.add('animated');
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();
  
  // Gestion du formulaire de contact
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Ici vous ajouteriez le code pour envoyer le formulaire
      alert('Merci pour votre message! Nous vous contacterons bientôt.');
      this.reset();
    });
  }
  
  // Gestion de la newsletter
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = this.querySelector('input[type="email"]');
      alert(`Merci pour votre inscription avec l'email: ${emailInput.value}`);
      emailInput.value = '';
    });
  }
});