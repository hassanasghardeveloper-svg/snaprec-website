import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service - SnapRec',
  description: 'Terms of Service for SnapRec screen recording application',
}

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-gray-900">SnapRec</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By downloading, installing, or using SnapRec, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our software.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. License</h2>
            <p className="text-gray-600 mb-4">
              SnapRec is provided under the MIT License. You are free to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Use the software for personal or commercial purposes</li>
              <li>Modify the software</li>
              <li>Distribute the software</li>
              <li>Use the software privately</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Acceptable Use</h2>
            <p className="text-gray-600 mb-4">
              You agree to use SnapRec only for lawful purposes. You must not use the software to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Record content without proper authorization or consent</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the intellectual property rights of others</li>
              <li>Record confidential or private information without permission</li>
              <li>Create content that is illegal, harmful, or offensive</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              The SnapRec name, logo, and branding are the property of SnapRec. The software source code is available under the MIT License.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Disclaimer of Warranties</h2>
            <p className="text-gray-600 mb-4">
              SnapRec is provided "AS IS" without warranty of any kind, express or implied. We do not guarantee that the software will be error-free, secure, or uninterrupted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              In no event shall SnapRec or its developers be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the software.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. User Responsibility</h2>
            <p className="text-gray-600 mb-4">
              You are solely responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Obtaining necessary permissions before recording</li>
              <li>Complying with all applicable laws in your jurisdiction</li>
              <li>The content you create using SnapRec</li>
              <li>Securing your recordings and data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Updates and Changes</h2>
            <p className="text-gray-600 mb-4">
              We may update SnapRec and these Terms of Service at any time. Continued use of the software after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Termination</h2>
            <p className="text-gray-600 mb-4">
              You may stop using SnapRec at any time by uninstalling the software. These terms will remain in effect for any content you created using the software.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Service, please contact us through our GitHub repository.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="text-red-500 hover:text-red-600 font-medium">
            ← Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center text-sm">
          <p>© {new Date().getFullYear()} SnapRec. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
