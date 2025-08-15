# 🚀 IEN Platform SEO & Metadata Documentation

## 📋 Overview
This document captures all SEO optimizations, metadata configurations, and social media integrations implemented for the IEN Research Intelligence Platform during the development phase. Use this as a reference for future implementations.

## 🎯 Social Media Integration

### Social Media Image
- **File**: `public/social-media.jpg`
- **Dimensions**: 1200x630 pixels (optimal for Open Graph)
- **Format**: JPEG for compatibility
- **Alt Text**: "IEN Research Intelligence Platform - Advanced analytics for Ireland's environmental network"

### Open Graph Metadata (Facebook, LinkedIn)
```typescript
openGraph: {
  title: "IEN Research Platform | Irish Environmental Network",
  description: "AI-powered environmental research platform for Ireland. Access analytics from 41+ organizations across 6 key topics.",
  url: "/",
  siteName: "IEN Research Intelligence Platform",
  locale: "en_IE",
  type: "website",
  images: [
    {
      url: "/social-media.jpg",
      width: 1200,
      height: 630,
      alt: "IEN Research Intelligence Platform - Advanced analytics for Ireland's environmental network",
      type: "image/jpeg",
    }
  ]
}
```

### Twitter Card Metadata
```typescript
twitter: {
  card: "summary_large_image",
  site: "@IEN_Ireland",
  creator: "@IEN_Ireland",
  title: "IEN Research Platform | Irish Environmental Network",
  description: "AI-powered environmental research platform for Ireland. Access analytics from 41+ organizations.",
  images: {
    url: "/social-media.jpg",
    alt: "IEN Research Intelligence Platform - Advanced analytics for Ireland's environmental network featuring 41 organizations and 6 key environmental topics",
  },
}
```

## 🤖 Robots.txt Configuration

### Dynamic Robots.txt (`src/app/robots.ts`)
```typescript
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ien-platform.vercel.app'
  
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
        crawlDelay: 3,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  }
}
```

## 🗺️ Sitemap Configuration

### Dynamic Sitemap (`src/app/sitemap.ts`)
```typescript
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ien-platform.vercel.app'
  const now = new Date()

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
```

## 🔍 SEO Keywords Strategy

### Primary Keywords
- Irish Environmental Network
- IEN
- environmental research
- sustainability
- Ireland
- climate change
- environmental policy
- research intelligence

### Long-tail Keywords
- environmental analytics Ireland
- sustainability research platform
- climate analytics Ireland
- environmental monitoring tools
- biodiversity research Ireland
- renewable energy data Ireland
- water quality analysis Ireland
- carbon footprint tracking Ireland

### Location-specific Keywords
- offshore wind Ireland
- circular bioeconomy Ireland
- one health sustainability
- marine coastal research
- environmental restoration Ireland
- Irish climate targets 2030
- environmental compliance Ireland
- biodiversity conservation Ireland

## 📱 Progressive Web App (PWA) Configuration

### Manifest File (`public/manifest.json`)
```json
{
  "name": "IEN Research Intelligence Platform",
  "short_name": "IEN Research",
  "description": "Advanced analytics for Ireland's environmental network - 41 organizations, 6 key topics, infinite insights",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#2563eb",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "categories": ["education", "research", "environmental"],
  "lang": "en-IE",
  "dir": "ltr"
}
```

## 🏗️ Schema.org Structured Data

### Organization Schema
```json
{
  "@type": "Organization",
  "name": "Irish Environmental Network",
  "alternateName": "IEN",
  "description": "Ireland's leading environmental network connecting 41+ organizations across 6 key environmental topics",
  "url": "https://ien.ie",
  "foundingDate": "1992",
  "location": {
    "@type": "Place",
    "name": "Dublin, Ireland",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IE",
      "addressRegion": "Leinster",
      "addressLocality": "Dublin"
    }
  }
}
```

### WebApplication Schema
```json
{
  "@type": "WebApplication",
  "name": "IEN Research Intelligence Platform",
  "description": "Advanced analytics platform providing comprehensive intelligence on Ireland's environmental network",
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "Research Analytics",
  "operatingSystem": "Web Browser",
  "featureList": [
    "Environmental Research Analytics",
    "Organization Network Analysis",
    "Topic Intelligence Reports",
    "Real-time Data Insights",
    "Policy Research Tools",
    "Sustainability Metrics"
  ]
}
```

### Dataset Schema
```json
{
  "@type": "Dataset",
  "name": "Irish Environmental Network Organizations Dataset",
  "description": "Comprehensive dataset of 41 environmental organizations across Ireland, covering 6 key environmental topics",
  "spatialCoverage": {
    "@type": "Place",
    "name": "Ireland",
    "geo": {
      "@type": "GeoShape",
      "box": "51.4 -10.5 55.4 -5.4"
    }
  },
  "keywords": [
    "Irish Environmental Network",
    "Environmental Organizations",
    "Sustainability Research",
    "Climate Action",
    "Biodiversity",
    "Marine Conservation"
  ]
}
```

## 🚀 Performance Optimizations

### Font Loading
```typescript
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Optimize font loading
  preload: true,
});
```

### DNS Prefetch & Preconnect
```html
<link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link rel="dns-prefetch" href="//n8n.emmi.zone" />
```

### Security Headers
```html
<meta name="referrer" content="origin-when-cross-origin" />
<meta httpEquiv="X-Content-Type-Options" content="nosniff" />
<meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
```

## 📊 Core Web Vitals Monitoring

### Analytics Script
```javascript
const vitalsUrl = 'https://vitals.vercel-analytics.com/v1/vitals';
function sendToAnalytics(metric) {
  const body = JSON.stringify(metric);
  if (navigator.sendBeacon) {
    navigator.sendBeacon(vitalsUrl, body);
  } else {
    fetch(vitalsUrl, { body, method: 'POST', keepalive: true });
  }
}
```

## 🌍 Geographic & Language Targeting

### Geographic Metadata
```html
<meta name="geo.region" content="IE" />
<meta name="geo.country" content="Ireland" />
```

### Language Configuration
```html
<html lang="en-IE">
```

### Canonical URLs
```typescript
alternates: {
  canonical: "/",
  languages: {
    'en-IE': '/',
    'en': '/',
  },
}
```

## 📱 Mobile & Accessibility Optimizations

### Mobile Web App Configuration
```html
<meta name="theme-color" content="#059669" media="(prefers-color-scheme: light)" />
<meta name="theme-color" content="#1a365d" media="(prefers-color-scheme: dark)" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="default" />
<meta name="mobile-web-app-capable" content="yes" />
```

### Accessibility Features
```html
<meta name="color-scheme" content="light dark" />
<meta name="supported-color-schemes" content="light dark" />
```

## 🔧 Implementation Checklist

### ✅ Completed Features
- [x] Open Graph metadata for social sharing
- [x] Twitter Card integration
- [x] Dynamic robots.txt generation
- [x] XML sitemap with proper priorities
- [x] Comprehensive Schema.org structured data
- [x] PWA manifest configuration
- [x] Performance optimizations
- [x] Mobile-first responsive design
- [x] Security headers implementation
- [x] Core Web Vitals monitoring

### 📝 Required Files
1. `public/social-media.jpg` - Social media sharing image (1200x630)
2. `public/manifest.json` - PWA configuration
3. `src/app/robots.ts` - Dynamic robots.txt
4. `src/app/sitemap.ts` - Dynamic XML sitemap
5. Enhanced `src/app/layout.tsx` with full metadata

### 🔗 External Dependencies
- Google Fonts (Geist family)
- Vercel Analytics for Core Web Vitals
- n8n webhook for form submissions

## 📈 Expected SEO Benefits

1. **Social Media**: Rich previews on Facebook, Twitter, LinkedIn
2. **Search Rankings**: Comprehensive metadata and structured data
3. **Performance**: Optimized Core Web Vitals scores
4. **Accessibility**: Better user experience for all users
5. **Mobile**: Enhanced mobile web app experience
6. **Analytics**: Detailed performance monitoring

## 🎯 Next Steps for Simple Implementation

1. **Keep existing social-media.jpg in public folder**
2. **Implement basic Open Graph metadata only**
3. **Add simple robots.txt and sitemap.xml as static files**
4. **Focus on core functionality over complex animations**
5. **Test one feature at a time**

---

*Documentation created: January 2025*
*Platform: IEN Research Intelligence Platform*
*Framework: Next.js 15.4.6 with React 19.1.0*