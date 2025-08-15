# 🤖 Sitemap & Robots Configuration Backup

## 📁 Current File Structure
```
src/app/
├── robots.ts          # Dynamic robots.txt generation
├── sitemap.ts         # Dynamic XML sitemap generation
└── layout.tsx         # Enhanced with full metadata

public/
├── social-media.jpg   # Social sharing image (1200x630)
├── manifest.json      # PWA configuration
└── [other assets]
```

## 🤖 Robots.ts Configuration

### Full Implementation (`src/app/robots.ts`)
```typescript
import type { MetadataRoute } from 'next'

/**
 * Dynamic Robots.txt Generation for IEN Research Intelligence Platform
 * 
 * Implements Google's 2025 crawler guidelines with optimal crawling rules:
 * - Allows all public content for search engines
 * - Disallows Next.js build artifacts and API routes
 * - Includes sitemap reference for efficient discovery
 * - Implements crawl-delay for resource optimization
 * 
 * @returns {MetadataRoute.Robots} Robots configuration object
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ien-platform.vercel.app'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/_next/',           // Next.js build artifacts
          '/api/',             // API routes (if any future implementation)
          '/.well-known/',     // Security/config files
          '/admin/',           // Admin areas (if any future implementation)
          '/private/',         // Private content areas
          '/*.json$',          // JSON files
          '/*?*',              // Dynamic URLs with query parameters
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/_next/',
          '/api/',
          '/.well-known/',
          '/admin/',
          '/private/',
        ],
        crawlDelay: 1, // 1 second delay for polite crawling
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/_next/',
          '/api/',
          '/.well-known/',
          '/admin/',
          '/private/',
        ],
        crawlDelay: 2, // Slightly longer delay for Bing
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
```

### Generated robots.txt Output
```
User-agent: *
Allow: /
Disallow: /_next/
Disallow: /api/
Disallow: /.well-known/
Disallow: /admin/
Disallow: /private/
Disallow: /*.json$
Disallow: /*?*

User-agent: Googlebot
Allow: /
Disallow: /_next/
Disallow: /api/
Disallow: /.well-known/
Disallow: /admin/
Disallow: /private/
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Disallow: /_next/
Disallow: /api/
Disallow: /.well-known/
Disallow: /admin/
Disallow: /private/
Crawl-delay: 2

Sitemap: https://ien-platform.vercel.app/sitemap.xml
Host: https://ien-platform.vercel.app
```

## 🗺️ Sitemap.ts Configuration

### Full Implementation (`src/app/sitemap.ts`)
```typescript
import type { MetadataRoute } from 'next'

/**
 * Dynamic Sitemap.xml Generation for IEN Research Intelligence Platform
 * 
 * Implements 2025 technical SEO best practices:
 * - Priority-based page hierarchy for optimal crawler guidance
 * - Accurate lastModified timestamps for efficient re-crawling
 * - Appropriate changeFrequency hints for content freshness
 * - Structured for single-page application with key pages
 * 
 * @returns {MetadataRoute.Sitemap} Sitemap configuration array
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ien-platform.vercel.app'
  const lastModified = new Date()
  
  // Core pages with their SEO priorities and update frequencies
  const staticPages = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 1.0, // Highest priority for homepage
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.3, // Lower priority for legal pages
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.3, // Lower priority for legal pages
    },
  ]

  // Future dynamic pages can be added here
  // Example: If we add research pages, database pages, etc.
  const dynamicPages: MetadataRoute.Sitemap = []
  
  // Could be populated from database or API calls:
  // const researchPages = await getResearchPages()
  // const dynamicPages = researchPages.map(page => ({
  //   url: `${baseUrl}/research/${page.slug}`,
  //   lastModified: new Date(page.updatedAt),
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.8,
  // }))

  return [
    ...staticPages,
    ...dynamicPages,
  ]
}
```

### Generated sitemap.xml Output
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ien-platform.vercel.app</loc>
    <lastmod>2025-01-15T10:30:00.000Z</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ien-platform.vercel.app/privacy</loc>
    <lastmod>2025-01-15T10:30:00.000Z</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://ien-platform.vercel.app/terms</loc>
    <lastmod>2025-01-15T10:30:00.000Z</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
```

## 📱 PWA Manifest Configuration

### Current manifest.json (`public/manifest.json`)
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

## 🎯 Simple Static Alternatives

### Simple robots.txt (static file approach)
If reverting to static files, create `public/robots.txt`:
```
User-agent: *
Allow: /
Disallow: /_next/
Disallow: /api/

Sitemap: https://ien-platform.vercel.app/sitemap.xml
```

### Simple sitemap.xml (static file approach)
If reverting to static files, create `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ien-platform.vercel.app</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ien-platform.vercel.app/privacy</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://ien-platform.vercel.app/terms</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
```

## 🔧 Implementation Notes

### Benefits of Dynamic Approach
- Automatic environment URL adaptation
- Easy to extend with database-driven pages
- Consistent with Next.js 15 best practices
- Automatic timestamp updates

### Benefits of Static Approach
- Simple and reliable
- No build-time complexity
- Easy to modify manually
- Faster page builds

---

*Configuration backup created: January 2025*
*Platform: IEN Research Intelligence Platform*
*Next.js Version: 15.4.6*