const { performance } = require('perf_hooks');

// Simple performance monitoring script for development
function measurePerformance() {
  console.log('🚀 Performance Monitoring Started...\n');
  
  // Measure Page Load Time
  if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      const timing = window.performance.timing;
      const loadTime = timing.loadEventEnd - timing.navigationStart;
      const domReady = timing.domContentLoadedEventEnd - timing.navigationStart;
      
      console.log('📊 Performance Metrics:');
      console.log(`⏱️ Page Load Time: ${loadTime}ms`);
      console.log(`🏗️ DOM Ready Time: ${domReady}ms`);
      console.log(`🎨 First Paint: ${performance.getEntriesByName('first-paint')[0]?.startTime || 'N/A'}ms`);
      console.log(`📄 First Contentful Paint: ${performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 'N/A'}ms`);
    });
  }
  
  // Monitor Animation Performance
  let frameCount = 0;
  let lastTime = performance.now();
  
  function countFPS() {
    frameCount++;
    const currentTime = performance.now();
    
    if (currentTime - lastTime >= 1000) {
      console.log(`🎮 FPS: ${frameCount} frames per second`);
      frameCount = 0;
      lastTime = currentTime;
    }
    
    requestAnimationFrame(countFPS);
  }
  
  if (typeof requestAnimationFrame !== 'undefined') {
    requestAnimationFrame(countFPS);
  }
}

// Web Vitals monitoring (for production)
function measureWebVitals() {
  try {
    // Check if web-vitals is available
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      if (typeof getCLS === 'function') {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      }
    }).catch(() => {
      console.log('📊 Web Vitals library not installed. Install with: npm install web-vitals');
    });
  } catch (error) {
    console.log('📊 Web Vitals not available:', error.message);
  }
}

// Memory usage monitoring
function monitorMemory() {
  if (performance.memory) {
    setInterval(() => {
      const memory = performance.memory;
      console.log(`💾 Memory Usage:
        Used: ${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)} MB
        Total: ${(memory.totalJSHeapSize / 1024 / 1024).toFixed(2)} MB
        Limit: ${(memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2)} MB`);
    }, 5000);
  }
}

// Bundle size analysis
function analyzeBundleSize() {
  console.log('📦 Bundle Analysis:');
  console.log('Run: npm run build && npx @next/bundle-analyzer');
}

module.exports = {
  measurePerformance,
  measureWebVitals,
  monitorMemory,
  analyzeBundleSize
};