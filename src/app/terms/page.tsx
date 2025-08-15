import Link from 'next/link';

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Terms of Use
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: January 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-6">
            By accessing and using the IEN Research Intelligence Platform ("Platform"), you accept and agree 
            to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Platform Description</h2>
          <p className="text-gray-700 mb-4">
            The IEN Research Intelligence Platform is an AI-powered research tool that provides:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Environmental research analysis for Irish organizations</li>
            <li>Intelligence reports based on publicly available information</li>
            <li>Data synthesis from multiple environmental sources</li>
            <li>Research assistance for environmental decision-making</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. AI System Disclosure</h2>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
            <p className="text-amber-800 font-medium">
              <strong>AI Usage Notice:</strong> This platform uses artificial intelligence systems to generate 
              research reports and analysis. All content is AI-generated and should be used as research assistance only.
            </p>
          </div>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li><strong>Human Oversight Required:</strong> AI-generated content should be reviewed by qualified professionals</li>
            <li><strong>Not Professional Advice:</strong> Reports are for informational purposes only</li>
            <li><strong>Source Verification:</strong> Users should verify information independently</li>
            <li><strong>Limitations:</strong> AI systems may have biases or inaccuracies</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Acceptable Use</h2>
          <p className="text-gray-700 mb-4">You agree to use the Platform only for:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Legitimate environmental research purposes</li>
            <li>Educational and informational activities</li>
            <li>Supporting environmental decision-making in Ireland</li>
            <li>Non-commercial research activities</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Prohibited Uses</h2>
          <p className="text-gray-700 mb-4">You agree NOT to use the Platform for:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Any illegal or unauthorized purpose</li>
            <li>Generating harmful or misleading content</li>
            <li>Attempting to reverse engineer or compromise the system</li>
            <li>Overloading the system with excessive requests</li>
            <li>Commercial purposes without prior authorization</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Data Processing</h2>
          <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
            <p className="text-green-800 font-medium">
              <strong>Zero Storage Policy:</strong> We do not store your queries, email addresses, or any personal information on our servers.
            </p>
          </div>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Queries are processed through an agentic workflow without memory retention</li>
            <li>Processing occurs via OpenAI models and Tavily search services</li>
            <li>No data persistence beyond active session processing</li>
            <li>Email delivery is handled by third-party services temporarily</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. EU AI Act Compliance</h2>
          <p className="text-gray-700 mb-4">
            This platform complies with the EU Artificial Intelligence Act:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li><strong>Risk Category:</strong> Limited-risk AI system for research assistance</li>
            <li><strong>Transparency:</strong> Clear disclosure of AI usage and limitations</li>
            <li><strong>Human Oversight:</strong> Designed to augment, not replace, human decision-making</li>
            <li><strong>Accuracy Measures:</strong> Quality controls for research output</li>
            <li><strong>Fundamental Rights:</strong> Respects user privacy and data protection</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Intellectual Property</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>The Platform and its original content are owned by the Irish Environmental Network</li>
            <li>AI-generated reports are provided for your use but may contain third-party information</li>
            <li>Users are responsible for respecting intellectual property in source materials</li>
            <li>Platform design and code remain proprietary to IEN</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Disclaimers</h2>
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
            <p className="text-red-800 font-medium">
              <strong>Important Disclaimers:</strong>
            </p>
            <ul className="list-disc pl-6 text-red-800 mt-2">
              <li>AI-generated content may contain errors or inaccuracies</li>
              <li>Reports are for informational purposes only</li>
              <li>Not a substitute for professional environmental consulting</li>
              <li>Users must verify information independently</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Limitation of Liability</h2>
          <p className="text-gray-700 mb-6">
            The Irish Environmental Network shall not be liable for any indirect, incidental, special, 
            consequential, or punitive damages resulting from your use of the Platform.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Service Availability</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Platform provided "as is" without warranty of uninterrupted service</li>
            <li>We reserve the right to modify or discontinue the service</li>
            <li>Maintenance and updates may cause temporary unavailability</li>
            <li>Usage limits may apply to ensure fair access</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Governing Law</h2>
          <p className="text-gray-700 mb-6">
            These Terms of Use are governed by and construed in accordance with the laws of Ireland 
            and the European Union, including GDPR and the EU AI Act.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">13. Contact Information</h2>
          <p className="text-gray-700 mb-6">
            For questions about these Terms of Use, please contact:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-gray-700">
              <strong>Irish Environmental Network</strong><br />
              Email: info@ien.ie<br />
              Website: https://ien.ie
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">14. Changes to Terms</h2>
          <p className="text-gray-700 mb-6">
            We reserve the right to modify these terms at any time. Changes will be posted on this page 
            with an updated "Last updated" date. Continued use of the Platform constitutes acceptance of modified terms.
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