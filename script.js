// ============================================
// Portfolio Interactive JavaScript
// ============================================

(function() {
  'use strict';

  // Set current year in footer
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Add intersection observer for fade-in animations on scroll
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

  // Observe cards for scroll animations
  document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(card);
  });

  // Add subtle parallax effect to header photo (disabled for better UX)
  // Uncomment below if you want parallax effect:
  /*
  const photo = document.querySelector('.photo');
  if (photo) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * 0.05;
      if (scrolled < 500) {
        photo.style.transform = `translateY(${parallax}px)`;
      }
    });
  }
  */

  // Add active state to navigation links (if you add navigation later)
  const currentPath = window.location.pathname;
  document.querySelectorAll('a[href]').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  // Add copy email functionality
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
  emailLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const email = this.getAttribute('href').replace('mailto:', '');
      // Optional: Copy to clipboard
      if (navigator.clipboard) {
        e.preventDefault();
        navigator.clipboard.writeText(email).then(() => {
          const originalText = this.textContent;
          this.textContent = 'Email copied!';
          setTimeout(() => {
            this.textContent = originalText;
          }, 2000);
        }).catch(() => {
          // Fallback: allow default mailto behavior
        });
      }
    });
  });

  // Add keyboard navigation support
  document.addEventListener('keydown', (e) => {
    // ESC key to reset any focus states
    if (e.key === 'Escape') {
      document.activeElement?.blur();
    }
  });

  // Performance: Lazy load images (if you add more images later)
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src;
    });
  } else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
  }

  // Add subtle cursor effects for interactive elements
  const interactiveElements = document.querySelectorAll('a, .card, .pill');
  interactiveElements.forEach(el => {
    el.style.cursor = 'pointer';
    el.setAttribute('tabindex', '0');
  });

  // Console greeting (optional, remove if not wanted)
  console.log('%c👋 Thanks for checking out my portfolio!', 'font-size: 16px; font-weight: bold; color: #0066ff;');
  console.log('%cFeel free to reach out if you\'d like to collaborate.', 'font-size: 12px; color: #666;');

})();



