import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy - SnapRec',
  description: 'Privacy Policy for SnapRec screen recording application',
}

export default function Privacy() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 mb-4">
              SnapRec ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our screen recording application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              <strong>SnapRec does not collect any personal information.</strong> Our application runs entirely on your local computer and does not transmit any data to external servers.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>We do not collect usage data</li>
              <li>We do not collect personal information</li>
              <li>We do not use analytics or tracking</li>
              <li>We do not store your recordings on our servers</li>
              <li>All your recordings stay on your local device</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Local Data Storage</h2>
            <p className="text-gray-600 mb-4">
              SnapRec stores the following data locally on your computer:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Your application settings and preferences</li>
              <li>Screen recordings (in the folder you specify)</li>
              <li>Screenshots (in the folder you specify)</li>
              <li>GIF recordings (in the folder you specify)</li>
            </ul>
            <p className="text-gray-600 mt-4">
              This data never leaves your computer unless you choose to share it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-600 mb-4">
              SnapRec does not integrate with any third-party services that collect user data. The application works completely offline.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-600 mb-4">
              SnapRec does not knowingly collect any information from children. Since we don't collect any data at all, there is no risk of collecting children's data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us through our GitHub repository.
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
