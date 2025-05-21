
// Initialize Feather icons
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Feather Icons
  feather.replace();
  
  // Set current year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Handle form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      // Validate form (simple validation)
      if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos do formulário.');
        return;
      }
      
      // In a real application, you would send this data to a server
      // For now, just show a success message
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        // Get height of the navbar for offset
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        
        // Scroll to element with offset
        window.scrollTo({
          top: target.offsetTop - navbarHeight - 20,
          behavior: 'smooth'
        });
        
        // If we're on mobile, close the navbar after clicking
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        if (window.getComputedStyle(navbarToggler).display !== 'none' && navbarCollapse.classList.contains('show')) {
          // Use Bootstrap's collapse API to hide the navbar
          bootstrap.Collapse.getInstance(navbarCollapse).hide();
        }
      }
    });
  });
  
  // Add scroll animations
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in, .slide-in');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementHeight = element.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // If element is in viewport
      if (elementTop < windowHeight - elementHeight / 3) {
        if (element.classList.contains('fade-in')) {
          element.style.opacity = '1';
        } else if (element.classList.contains('slide-in')) {
          element.style.transform = 'translateY(0)';
          element.style.opacity = '1';
        }
      }
    });
  };
  
  // Apply initial animations
  window.addEventListener('load', animateOnScroll);
  window.addEventListener('scroll', animateOnScroll);
});