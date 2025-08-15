import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: January 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
          <p className="text-gray-700 mb-6">
            The IEN Research Intelligence Platform ("we," "our," or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we handle information when you use our AI-powered research platform.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Data We Do NOT Collect or Store</h2>
          <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
            <p className="text-green-800 font-medium">
              <strong>Zero Data Storage Policy:</strong> We do not collect, store, or retain any personal information, 
              email addresses, search queries, or research history on our servers.
            </p>
          </div>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>No email addresses are stored permanently</li>
            <li>No search history or query logs are maintained</li>
            <li>No user profiles or accounts are created</li>
            <li>No personal data is retained after session completion</li>
            <li>No cookies are used for tracking purposes</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. How Our AI System Works</h2>
          <p className="text-gray-700 mb-4">
            Our platform uses an <strong>agentic workflow</strong> that processes your research queries without memory retention:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li><strong>Stateless Processing:</strong> Each query is processed independently without storing previous interactions</li>
            <li><strong>Third-Party AI Models:</strong> Queries are processed via OpenAI models and Tavily search services</li>
            <li><strong>Temporary Processing:</strong> Data is only held in memory during active processing</li>
            <li><strong>No Model Training:</strong> Your queries are not used to train or improve AI models</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. EU AI Act Compliance</h2>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="text-blue-800">
              <strong>EU AI Act Classification:</strong> Our system is designed as a limited-risk AI system 
              focused on environmental research assistance.
            </p>
          </div>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li><strong>Transparency:</strong> We clearly disclose AI usage in our research platform</li>
            <li><strong>Human Oversight:</strong> All AI-generated reports are provided as research assistance only</li>
            <li><strong>Accuracy:</strong> We implement measures to ensure research quality and source attribution</li>
            <li><strong>Fundamental Rights:</strong> Our system respects privacy and data protection rights</li>
            <li><strong>Risk Assessment:</strong> Regular assessments ensure minimal risk to users</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Third-Party Services</h2>
          <p className="text-gray-700 mb-4">
            We use the following third-party services for processing:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li><strong>OpenAI:</strong> For natural language processing and research synthesis</li>
            <li><strong>Tavily:</strong> For web search and information retrieval</li>
          </ul>
          <p className="text-gray-700 mb-6">
            These services may have their own privacy policies. We recommend reviewing their policies 
            for information about their data handling practices.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. GDPR Compliance</h2>
          <p className="text-gray-700 mb-4">
            Under the General Data Protection Regulation (GDPR), you have the following rights:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li><strong>Right to Information:</strong> This privacy policy provides transparent information</li>
            <li><strong>Right of Access:</strong> Since we don't store data, there's no personal data to access</li>
            <li><strong>Right to Rectification:</strong> Not applicable as we don't store personal data</li>
            <li><strong>Right to Erasure:</strong> Not applicable as we don't store personal data</li>
            <li><strong>Right to Data Portability:</strong> Not applicable as we don't store personal data</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Security Measures</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Secure HTTPS encryption for all communications</li>
            <li>No persistent data storage reduces security risks</li>
            <li>Regular security assessments and updates</li>
            <li>Compliance with industry security standards</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Contact Information</h2>
          <p className="text-gray-700 mb-6">
            For questions about this Privacy Policy or our data practices, please contact:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-gray-700">
              <strong>Irish Environmental Network</strong><br />
              Email: info@ien.ie<br />
              Website: https://ien.ie
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Changes to This Policy</h2>
          <p className="text-gray-700 mb-6">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page 
            with an updated "Last updated" date.
          </p>

          <div className="border-t pt-8 mt-12">
            <Link 
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Platform
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}