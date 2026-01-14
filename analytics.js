// ============================================
// Silent Visitor Tracking - No UI, Just Numbers
// ============================================

(function() {
  'use strict';

  // Generate unique visitor ID based on browser fingerprint
  function generateVisitorId() {
    let visitorId = localStorage.getItem('portfolio-visitor-id');
    
    if (!visitorId) {
      // Create fingerprint from browser characteristics
      const fingerprint = [
        navigator.userAgent,
        navigator.language,
        screen.width + 'x' + screen.height,
        new Date().getTimezoneOffset(),
        navigator.platform,
        navigator.hardwareConcurrency || 'unknown'
      ].join('|');
      
      // Simple hash
      let hash = 0;
      for (let i = 0; i < fingerprint.length; i++) {
        const char = fingerprint.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
      }
      
      visitorId = 'v_' + Math.abs(hash) + '_' + Date.now();
      localStorage.setItem('portfolio-visitor-id', visitorId);
      localStorage.setItem('portfolio-first-visit', new Date().toISOString());
      
      // Increment unique visitor count
      incrementUniqueVisitorCount();
    }
    
    return visitorId;
  }

  // Track unique visitor count
  function incrementUniqueVisitorCount() {
    try {
      const count = parseInt(localStorage.getItem('portfolio-unique-count') || '0', 10);
      localStorage.setItem('portfolio-unique-count', (count + 1).toString());
      localStorage.setItem('portfolio-last-visit', new Date().toISOString());
    } catch (e) {
      // Silent fail
    }
  }

  // Track page visit silently
  function trackVisit() {
    const visitorId = generateVisitorId();
    const isFirstVisit = !sessionStorage.getItem('portfolio-session-tracked');
    
    if (isFirstVisit) {
      sessionStorage.setItem('portfolio-session-tracked', 'true');
      
      // Store visit data locally
      try {
        const visits = JSON.parse(localStorage.getItem('portfolio-visits') || '[]');
        visits.push({
          visitorId: visitorId,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          referrer: document.referrer || 'direct'
        });
        
        // Keep only last 100 visits
        if (visits.length > 100) {
          visits.shift();
        }
        
        localStorage.setItem('portfolio-visits', JSON.stringify(visits));
      } catch (e) {
        // Silent fail
      }
    }
  }

  // Initialize - completely silent
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', trackVisit);
  } else {
    trackVisit();
  }

  // Export function to get stats (for your use only)
  window.portfolioStats = {
    getUniqueCount: function() {
      return parseInt(localStorage.getItem('portfolio-unique-count') || '0', 10);
    },
    getVisitorId: function() {
      return localStorage.getItem('portfolio-visitor-id');
    },
    getVisits: function() {
      try {
        return JSON.parse(localStorage.getItem('portfolio-visits') || '[]');
      } catch (e) {
        return [];
      }
    }
  };

})();


