// Optional Web Vitals implementation
// This file provides web-vitals functionality without causing runtime errors

export function initWebVitals() {
  // Only load web-vitals in production and when analytics is available
  if (typeof window === 'undefined' || typeof gtag === 'undefined') {
    return;
  }

  function sendToGoogleAnalytics({ name, delta, id }) {
    if (typeof gtag !== 'undefined') {
      gtag('event', name, {
        event_category: 'Web Vitals',
        event_label: id,
        value: Math.round(name === 'CLS' ? delta * 1000 : delta),
        non_interaction: true,
      });
    }
  }

  // Use native Performance API as fallback for basic metrics
  if ('performance' in window) {
    // Measure First Contentful Paint
    try {
      const paintEntries = performance.getEntriesByType('paint');
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        sendToGoogleAnalytics({
          name: 'FCP',
          delta: fcpEntry.startTime,
          id: 'fcp-native'
        });
      }
    } catch (e) {
      console.log('Performance API not fully supported');
    }

    // Measure Largest Contentful Paint
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        sendToGoogleAnalytics({
          name: 'LCP',
          delta: lastEntry.startTime,
          id: 'lcp-native'
        });
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.log('LCP measurement not supported');
    }

    // Measure First Input Delay
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const delay = entry.processingStart - entry.startTime;
          sendToGoogleAnalytics({
            name: 'FID',
            delta: delay,
            id: 'fid-native'
          });
        });
      });
      observer.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.log('FID measurement not supported');
    }

    // Measure Cumulative Layout Shift
    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        sendToGoogleAnalytics({
          name: 'CLS',
          delta: clsValue,
          id: 'cls-native'
        });
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.log('CLS measurement not supported');
    }
  }
}

// Auto-initialize if gtag is available
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    setTimeout(initWebVitals, 1000); // Delay to ensure gtag is loaded
  });
}