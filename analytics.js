// ============================================
// Visitor Analytics & Tracking
// ============================================

(function() {
  'use strict';

  // Generate a unique visitor ID (fingerprint)
  function generateVisitorId() {
    // Try to get existing ID from localStorage
    let visitorId = localStorage.getItem('portfolio-visitor-id');
    
    if (!visitorId) {
      // Create a fingerprint based on browser characteristics
      const fingerprint = [
        navigator.userAgent,
        navigator.language,
        screen.width + 'x' + screen.height,
        new Date().getTimezoneOffset(),
        navigator.platform
      ].join('|');
      
      // Create a simple hash
      let hash = 0;
      for (let i = 0; i < fingerprint.length; i++) {
        const char = fingerprint.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
      }
      
      visitorId = 'visitor_' + Math.abs(hash) + '_' + Date.now();
      localStorage.setItem('portfolio-visitor-id', visitorId);
      localStorage.setItem('portfolio-first-visit', new Date().toISOString());
    }
    
    return visitorId;
  }

  // Track page visit
  function trackVisit() {
    const visitorId = generateVisitorId();
    const isFirstVisit = !sessionStorage.getItem('portfolio-session-tracked');
    const visitData = {
      visitorId: visitorId,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      referrer: document.referrer || 'direct',
      isFirstVisit: isFirstVisit,
      userAgent: navigator.userAgent,
      language: navigator.language,
      screenSize: screen.width + 'x' + screen.height
    };

    // Mark this session as tracked
    sessionStorage.setItem('portfolio-session-tracked', 'true');

    // Send to your tracking endpoint
    // Option 1: Use Formspree or similar service
    sendToTrackingService(visitData);

    // Option 2: Log to console (for development)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.log('📊 Visit Tracked:', visitData);
    }
  }

  // Send data to tracking service
  function sendToTrackingService(data) {
    // Replace with your Formspree endpoint or custom API
    const TRACKING_ENDPOINT = 'YOUR_FORMSPREE_ENDPOINT_HERE'; // You'll get this from Formspree
    
    // Only send if endpoint is configured
    if (TRACKING_ENDPOINT === 'YOUR_FORMSPREE_ENDPOINT_HERE') {
      // Store locally as fallback
      storeLocalVisit(data);
      return;
    }

    // Use fetch to send data (Formspree example)
    fetch(TRACKING_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'visit',
        visitorId: data.visitorId,
        timestamp: data.timestamp,
        url: data.url,
        referrer: data.referrer,
        isFirstVisit: data.isFirstVisit,
        userAgent: data.userAgent,
        language: data.language,
        screenSize: data.screenSize
      })
    }).catch(error => {
      console.error('Tracking error:', error);
      // Fallback to local storage
      storeLocalVisit(data);
    });
  }

  // Store visit locally as fallback
  function storeLocalVisit(data) {
    try {
      const visits = JSON.parse(localStorage.getItem('portfolio-visits') || '[]');
      visits.push(data);
      // Keep only last 50 visits
      if (visits.length > 50) {
        visits.shift();
      }
      localStorage.setItem('portfolio-visits', JSON.stringify(visits));
    } catch (e) {
      console.error('Error storing visit locally:', e);
    }
  }

  // Guestbook: Save visitor name
  function saveVisitorName(name) {
    if (!name || name.trim() === '') return;
    
    const visitorId = generateVisitorId();
    const nameData = {
      visitorId: visitorId,
      name: name.trim(),
      timestamp: new Date().toISOString()
    };

    // Store name locally
    localStorage.setItem('portfolio-visitor-name', name.trim());
    
    // Send to tracking service
    const TRACKING_ENDPOINT = 'YOUR_FORMSPREE_ENDPOINT_HERE';
    if (TRACKING_ENDPOINT !== 'YOUR_FORMSPREE_ENDPOINT_HERE') {
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'name',
          ...nameData
        })
      }).catch(error => {
        console.error('Error saving name:', error);
      });
    }
  }

  // Get stored visitor name
  function getVisitorName() {
    return localStorage.getItem('portfolio-visitor-name') || '';
  }

  // Initialize tracking
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', trackVisit);
  } else {
    trackVisit();
  }

  // Export functions for use in other scripts
  window.portfolioAnalytics = {
    saveVisitorName: saveVisitorName,
    getVisitorName: getVisitorName,
    generateVisitorId: generateVisitorId
  };

})();

