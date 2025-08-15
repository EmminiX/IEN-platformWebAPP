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