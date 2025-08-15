# Schema.org Validation Guide
## IEN Research Intelligence Platform

### Validation Testing Instructions

This guide provides step-by-step instructions for validating the implemented schema.org structured data using Google's recommended tools and methods.

### Testing Tools Overview

#### 1. Google Rich Results Test
**URL**: https://search.google.com/test/rich-results  
**Purpose**: Test Google-specific rich snippet eligibility  
**Best For**: Production URLs and rich snippet validation

#### 2. Schema Markup Validator
**URL**: https://validator.schema.org/  
**Purpose**: General schema.org syntax and structure validation  
**Best For**: JSON-LD code validation and debugging

#### 3. Google Search Console
**URL**: https://search.google.com/search-console  
**Purpose**: Monitor live rich snippet performance  
**Best For**: Ongoing monitoring and performance tracking

### Step-by-Step Validation Process

#### Step 1: Local Development Testing

**1.1 Start Development Server**
```bash
cd /Users/emmi/Projects/IEN-platformWebAPP
npm run dev
# or
bun dev
```

**1.2 View Source Code**
1. Navigate to `http://localhost:3000`
2. Right-click → "View Page Source"
3. Search for `application/ld+json`
4. Verify JSON-LD is present and properly formatted

**1.3 JSON-LD Syntax Validation**
```bash
# Extract JSON-LD from page source and validate syntax
node -e "
const fs = require('fs');
const jsonLd = /* PASTE JSON-LD CONTENT HERE */;
try {
  JSON.parse(JSON.stringify(jsonLd));
  console.log('✅ Valid JSON-LD syntax');
} catch (error) {
  console.log('❌ Invalid JSON-LD syntax:', error.message);
}
"
```

#### Step 2: Schema.org Validator Testing

**2.1 Manual Code Testing**
1. Go to https://validator.schema.org/
2. Select "Code" tab
3. Copy the entire JSON-LD block from the page source
4. Paste into the validator
5. Click "Validate"

**Expected Results**:
- ✅ No syntax errors
- ✅ All schema types recognized
- ✅ Properties validated correctly

**2.2 URL Testing (Production)**
1. Go to https://validator.schema.org/
2. Select "URL" tab
3. Enter production URL: `https://ien-platform.vercel.app`
4. Click "Validate"

#### Step 3: Google Rich Results Testing

**3.1 Production URL Testing**
1. Go to https://search.google.com/test/rich-results
2. Enter URL: `https://ien-platform.vercel.app`
3. Click "Test URL"
4. Wait for analysis to complete

**Expected Rich Results**:
- ✅ Organization rich results eligible
- ✅ Website sitelinks eligible
- ✅ Dataset discovery eligible
- ⚠️ Some schema types may not show rich results (normal)

**3.2 Code Testing**
1. Go to https://search.google.com/test/rich-results
2. Click "Test Code" tab
3. Paste complete HTML page source
4. Click "Run Test"

#### Step 4: Browser Developer Tools Verification

**4.1 Chrome DevTools**
```javascript
// Run in browser console to extract JSON-LD
const scripts = document.querySelectorAll('script[type="application/ld+json"]');
scripts.forEach((script, index) => {
  console.log(`JSON-LD Block ${index + 1}:`, JSON.parse(script.textContent));
});
```

**4.2 Structured Data Testing**
```javascript
// Verify schema structure
const jsonLd = JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent);
console.log('Schema Types Found:', 
  jsonLd['@graph'].map(item => item['@type']).join(', ')
);
```

### Validation Checklist

#### ✅ Required Elements
- [ ] **JSON-LD Format**: Uses `application/ld+json` script type
- [ ] **@context**: Points to "https://schema.org"
- [ ] **@graph Structure**: Contains array of related entities
- [ ] **Unique IDs**: Each entity has proper @id with fragment
- [ ] **Valid Syntax**: JSON.parse() succeeds without errors

#### ✅ Organization Schema
- [ ] **@type**: "Organization"
- [ ] **name**: "Irish Environmental Network"
- [ ] **url**: Points to ien.ie
- [ ] **location**: Dublin coordinates included
- [ ] **areaServed**: Ireland specified
- [ ] **sameAs**: External references included

#### ✅ WebSite Schema
- [ ] **@type**: "WebSite"
- [ ] **name**: Platform name included
- [ ] **inLanguage**: "en-IE" specified
- [ ] **publisher**: Links to Organization
- [ ] **potentialAction**: SearchAction included

#### ✅ WebApplication Schema
- [ ] **@type**: "WebApplication"
- [ ] **applicationCategory**: "BusinessApplication"
- [ ] **offers**: Price and availability included
- [ ] **featureList**: Six features listed
- [ ] **browserRequirements**: Specified

#### ✅ Dataset Schema
- [ ] **@type**: "Dataset"
- [ ] **spatialCoverage**: Ireland boundaries
- [ ] **temporalCoverage**: Current year
- [ ] **keywords**: Environmental terms
- [ ] **variableMeasured**: Six measurement types

#### ✅ Service Schema
- [ ] **@type**: "Service"
- [ ] **serviceType**: "Research Intelligence"
- [ ] **audience**: Professional targeting
- [ ] **hasOfferCatalog**: Three services listed

#### ✅ ResearchProject Schema
- [ ] **@type**: "ResearchProject"
- [ ] **status**: "Active"
- [ ] **about**: Wikipedia references
- [ ] **keywords**: Research terms

### Common Validation Issues

#### Issue 1: Template Literal Errors
**Problem**: `${process.env.NEXT_PUBLIC_BASE_URL}` not resolving  
**Solution**: Ensure environment variables are set
```bash
export NEXT_PUBLIC_BASE_URL="https://ien-platform.vercel.app"
```

#### Issue 2: JSON Syntax Errors
**Problem**: Invalid JSON structure  
**Solution**: Use JSON.stringify() wrapper and validate syntax
```javascript
JSON.stringify(structuredData, null, 2)
```

#### Issue 3: Schema Property Warnings
**Problem**: Unexpected properties in validator  
**Solution**: Check schema.org documentation for valid properties

#### Issue 4: Rich Results Not Showing
**Problem**: Valid schema but no rich results  
**Solution**: Normal behavior - not all schema types show rich results

### Testing Automation

#### Automated Validation Script
```bash
#!/bin/bash
# validate-schema.sh

echo "🔍 Testing Schema.org Implementation..."

# Test 1: Check if JSON-LD is present
echo "📋 Test 1: JSON-LD Presence"
if curl -s http://localhost:3000 | grep -q "application/ld+json"; then
  echo "✅ JSON-LD found"
else
  echo "❌ JSON-LD not found"
  exit 1
fi

# Test 2: Validate JSON syntax
echo "📋 Test 2: JSON Syntax"
node -e "
const html = require('child_process').execSync('curl -s http://localhost:3000').toString();
const match = html.match(/<script[^>]*type=\"application\/ld\+json\"[^>]*>(.*?)<\/script>/s);
if (match) {
  try {
    JSON.parse(match[1]);
    console.log('✅ Valid JSON syntax');
  } catch (e) {
    console.log('❌ Invalid JSON syntax');
    process.exit(1);
  }
} else {
  console.log('❌ JSON-LD not found');
  process.exit(1);
}
"

# Test 3: Schema types verification
echo "📋 Test 3: Schema Types"
node -e "
const html = require('child_process').execSync('curl -s http://localhost:3000').toString();
const match = html.match(/<script[^>]*type=\"application\/ld\+json\"[^>]*>(.*?)<\/script>/s);
const data = JSON.parse(match[1]);
const types = data['@graph'].map(item => item['@type']);
const expected = ['Organization', 'WebSite', 'WebApplication', 'Dataset', 'Service', 'ResearchProject'];
const missing = expected.filter(type => !types.includes(type));
if (missing.length === 0) {
  console.log('✅ All schema types present');
} else {
  console.log('❌ Missing schema types:', missing.join(', '));
  process.exit(1);
}
"

echo "🎉 All tests passed!"
```

#### Run Automated Tests
```bash
chmod +x validate-schema.sh
./validate-schema.sh
```

### Performance Monitoring

#### Google Search Console Setup
1. **Add Property**: Add your domain to Search Console
2. **Verify Ownership**: Use HTML tag or DNS verification
3. **Monitor Enhancements**: Check "Enhancements" section for rich results
4. **Track Performance**: Monitor click-through rates and impressions

#### Rich Results Monitoring
```sql
-- Example query for tracking rich results performance
-- (Use in Google Analytics or Search Console reporting)
SELECT 
  date,
  queries,
  impressions,
  clicks,
  ctr,
  position
FROM search_analytics 
WHERE appearance = 'rich_result'
ORDER BY date DESC;
```

### Troubleshooting Guide

#### No Rich Results Showing
1. **Wait Time**: Allow 1-2 weeks for Google to process
2. **Content Quality**: Ensure high-quality, relevant content
3. **Technical Issues**: Validate JSON-LD syntax
4. **Policy Compliance**: Check Google's quality guidelines

#### Validation Errors
1. **Property Warnings**: Check schema.org documentation
2. **Missing Required Properties**: Add mandatory fields
3. **Type Mismatches**: Verify property-type compatibility
4. **URL Issues**: Ensure all URLs are accessible

#### Performance Issues
1. **Page Speed**: Large JSON-LD can affect loading
2. **Content Updates**: Keep structured data synchronized
3. **Mobile Compatibility**: Test on mobile devices
4. **Accessibility**: Ensure screen readers can access content

---

**Last Updated**: 2025-08-15  
**Tools Version**: Current Google validation tools  
**Next Review**: 2025-09-15  

This validation guide ensures comprehensive testing and monitoring of the schema.org implementation for optimal search engine understanding and rich snippet performance.