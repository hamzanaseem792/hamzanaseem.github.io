// ============================================
// Portfolio JavaScript - Dark Theme with i18n
// ============================================

(function() {
  'use strict';

  // ============================================
  // Language Detection & Switching
  // ============================================
  
  // Detect user's language preference
  function detectLanguage() {
    // Check localStorage first (user preference)
    const savedLang = localStorage.getItem('portfolio-lang');
    if (savedLang) {
      return savedLang;
    }
    
    // Auto-detect from browser
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split('-')[0].toLowerCase();
    
    // If German or from Germany, use German
    if (langCode === 'de' || browserLang.toLowerCase().includes('de')) {
      return 'de';
    }
    
    // Default to English
    return 'en';
  }
  
  // Get translation by key path (e.g., "nav.about")
  function getTranslation(key, lang) {
    const keys = key.split('.');
    let value = translations[lang];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  }
  
  // Update all elements with translations
  function updateTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = getTranslation(key, lang);
      
      // Handle HTML content
      if (translation.includes('<strong>')) {
        element.innerHTML = translation;
      } else {
        element.textContent = translation;
      }
    });
    
    // Update language switcher button
    const langSwitcher = document.getElementById('langSwitcher');
    if (langSwitcher) {
      const langCode = langSwitcher.querySelector('.lang-code');
      if (langCode) {
        langCode.textContent = lang.toUpperCase();
      }
    }
    
    // Save preference
    localStorage.setItem('portfolio-lang', lang);
  }
  
  // Initialize language
  let currentLang = detectLanguage();
  updateTranslations(currentLang);
  
  // Language switcher button
  const langSwitcher = document.getElementById('langSwitcher');
  if (langSwitcher) {
    langSwitcher.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'de' : 'en';
      updateTranslations(currentLang);
    });
  }

  // Set current year in footer
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offsetTop = target.offsetTop - 70; // Account for fixed nav
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Navbar scroll effect
  let lastScroll = 0;
  const nav = document.querySelector('.nav');
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      nav.style.backgroundColor = 'rgba(0, 31, 63, 0.95)';
    } else {
      nav.style.backgroundColor = 'rgba(0, 31, 63, 0.85)';
    }
    
    lastScroll = currentScroll;
  });

  // Intersection Observer for fade-in animations
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

  // Observe sections
  document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
  });

  // Highlight active nav link on scroll
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Console greeting
  console.log('%c👋 Thanks for checking out my portfolio!', 'font-size: 16px; font-weight: bold; color: #64ffda;');
  console.log('%cFeel free to reach out if you\'d like to collaborate.', 'font-size: 12px; color: #8892b0;');

})();





