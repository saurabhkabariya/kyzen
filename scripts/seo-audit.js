#!/usr/bin/env node
// scripts/seo-audit.js - Comprehensive SEO audit script

import fetch from 'node-fetch';
import { readFileSync } from 'fs';
import { join } from 'path';

const baseUrl = 'http://localhost:3000';
const siteUrl = 'https://codecatalystweb.vercel.app';

// SEO audit checklist
const seoChecks = {
  sitemap: {
    name: 'Sitemap Accessibility',
    check: async () => {
      try {
        const response = await fetch(`${baseUrl}/sitemap.xml`);
        return {
          status: response.ok ? 'PASS' : 'FAIL',
          message: response.ok ? 'Sitemap is accessible' : `Sitemap returned ${response.status}`,
          url: `${baseUrl}/sitemap.xml`
        };
      } catch (error) {
        return {
          status: 'FAIL',
          message: `Sitemap error: ${error.message}`,
          url: `${baseUrl}/sitemap.xml`
        };
      }
    }
  },

  robots: {
    name: 'Robots.txt Accessibility',
    check: async () => {
      try {
        const response = await fetch(`${baseUrl}/robots.txt`);
        const content = await response.text();
        const hasSitemap = content.includes('Sitemap:');
        
        return {
          status: response.ok && hasSitemap ? 'PASS' : 'FAIL',
          message: response.ok ? 
            (hasSitemap ? 'Robots.txt is accessible and includes sitemap' : 'Robots.txt missing sitemap reference') :
            `Robots.txt returned ${response.status}`,
          url: `${baseUrl}/robots.txt`
        };
      } catch (error) {
        return {
          status: 'FAIL',
          message: `Robots.txt error: ${error.message}`,
          url: `${baseUrl}/robots.txt`
        };
      }
    }
  },

  metaTags: {
    name: 'Essential Meta Tags',
    check: async () => {
      try {
        const response = await fetch(baseUrl);
        const html = await response.text();
        
        const requiredMeta = [
          'meta name="description"',
          'meta property="og:title"',
          'meta property="og:description"',
          'meta property="og:url"',
          'meta property="og:type"',
          'meta name="twitter:card"',
          'meta name="viewport"',
          'link rel="canonical"'
        ];

        const missing = requiredMeta.filter(meta => !html.includes(meta));
        
        return {
          status: missing.length === 0 ? 'PASS' : 'WARN',
          message: missing.length === 0 ? 
            'All essential meta tags present' : 
            `Missing meta tags: ${missing.join(', ')}`,
          details: {
            total: requiredMeta.length,
            present: requiredMeta.length - missing.length,
            missing: missing
          }
        };
      } catch (error) {
        return {
          status: 'FAIL',
          message: `Meta tags check error: ${error.message}`
        };
      }
    }
  },

  structuredData: {
    name: 'Structured Data (JSON-LD)',
    check: async () => {
      try {
        const response = await fetch(baseUrl);
        const html = await response.text();
        
        const hasStructuredData = html.includes('application/ld+json');
        const hasOrganization = html.includes('"@type":"Organization"') || html.includes('"@type": "Organization"');
        const hasLocalBusiness = html.includes('"@type":"LocalBusiness"') || html.includes('"@type": "LocalBusiness"');
        
        return {
          status: hasStructuredData ? 'PASS' : 'FAIL',
          message: hasStructuredData ? 
            'Structured data is present' : 
            'No structured data found',
          details: {
            hasOrganization,
            hasLocalBusiness,
            hasStructuredData
          }
        };
      } catch (error) {
        return {
          status: 'FAIL',
          message: `Structured data check error: ${error.message}`
        };
      }
    }
  },

  pageSpeed: {
    name: 'Basic Performance Check',
    check: async () => {
      try {
        const start = Date.now();
        const response = await fetch(baseUrl);
        const loadTime = Date.now() - start;
        
        const html = await response.text();
        const hasPreload = html.includes('rel="preload"');
        const hasDNSPrefetch = html.includes('rel="dns-prefetch"');
        
        return {
          status: loadTime < 3000 ? 'PASS' : 'WARN',
          message: `Page load time: ${loadTime}ms`,
          details: {
            loadTime,
            hasPreload,
            hasDNSPrefetch,
            contentLength: html.length
          }
        };
      } catch (error) {
        return {
          status: 'FAIL',
          message: `Performance check error: ${error.message}`
        };
      }
    }
  },

  accessibility: {
    name: 'Basic Accessibility Check',
    check: async () => {
      try {
        const response = await fetch(baseUrl);
        const html = await response.text();
        
        const checks = {
          hasLangAttribute: html.includes('<html lang='),
          hasTitle: html.includes('<title>'),
          hasMetaCharset: html.includes('charset='),
          hasViewport: html.includes('name="viewport"'),
          hasSkipLinks: html.includes('skip-to-content') || html.includes('skip-link'),
          hasAltTags: !html.includes('<img ') || html.includes('alt=')
        };

        const passed = Object.values(checks).filter(Boolean).length;
        const total = Object.keys(checks).length;
        
        return {
          status: passed >= total * 0.8 ? 'PASS' : 'WARN',
          message: `Accessibility score: ${passed}/${total}`,
          details: checks
        };
      } catch (error) {
        return {
          status: 'FAIL',
          message: `Accessibility check error: ${error.message}`
        };
      }
    }
  }
};

// Run SEO audit
async function runSEOAudit() {
  console.log('\n🔍 Starting SEO Audit for Code Catalyst...\n');
  console.log('=' .repeat(60));
  
  const results = {};
  
  for (const [key, check] of Object.entries(seoChecks)) {
    console.log(`\n📋 ${check.name}`);
    console.log('-' .repeat(40));
    
    try {
      const result = await check.check();
      results[key] = result;
      
      const statusIcon = result.status === 'PASS' ? '✅' : result.status === 'WARN' ? '⚠️' : '❌';
      console.log(`${statusIcon} ${result.status}: ${result.message}`);
      
      if (result.details) {
        console.log('   Details:', JSON.stringify(result.details, null, 4));
      }
      
      if (result.url) {
        console.log(`   URL: ${result.url}`);
      }
    } catch (error) {
      console.log(`❌ ERROR: ${error.message}`);
      results[key] = { status: 'ERROR', message: error.message };
    }
  }
  
  // Summary
  console.log('\n' + '=' .repeat(60));
  console.log('📊 SEO AUDIT SUMMARY');
  console.log('=' .repeat(60));
  
  const summary = {
    PASS: 0,
    WARN: 0,
    FAIL: 0,
    ERROR: 0
  };
  
  Object.values(results).forEach(result => {
    summary[result.status]++;
  });
  
  console.log(`✅ Passed: ${summary.PASS}`);
  console.log(`⚠️  Warnings: ${summary.WARN}`);
  console.log(`❌ Failed: ${summary.FAIL}`);
  console.log(`🚫 Errors: ${summary.ERROR}`);
  
  const totalScore = (summary.PASS / Object.keys(results).length) * 100;
  console.log(`\n🎯 Overall SEO Score: ${totalScore.toFixed(1)}%`);
  
  if (totalScore >= 90) {
    console.log('🚀 Excellent! Your site is SEO-optimized for maximum traffic!');
  } else if (totalScore >= 70) {
    console.log('👍 Good SEO foundation, minor improvements needed.');
  } else {
    console.log('⚠️  SEO needs attention for better search visibility.');
  }
  
  console.log('\n🔗 Next Steps:');
  console.log('1. Submit sitemap to Google Search Console');
  console.log('2. Submit to Bing Webmaster Tools');
  console.log('3. Monitor Core Web Vitals regularly');
  console.log('4. Update content regularly for freshness');
  console.log('5. Build quality backlinks');
  
  console.log('\n✨ SEO Audit Complete!\n');
}

// Export for use in other scripts
export { seoChecks, runSEOAudit };

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runSEOAudit().catch(console.error);
}
