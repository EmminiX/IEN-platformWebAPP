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