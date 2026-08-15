import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'PercentLab Privacy Policy - Learn how we handle data, cookies, and your privacy. GDPR and CCPA compliant.',
  alternates: {
    canonical: 'https://www.percentlab.app/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-muted-foreground mb-8">
        <strong>Last Updated:</strong> January 2026
      </p>

      <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="text-muted-foreground">
            PercentLab ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website percentlab.app (the "Site"). This policy complies with the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
          </p>
          <p className="text-muted-foreground mt-3">
            By using our Site, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not access the Site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Information We Do NOT Collect</h2>
          <p className="text-muted-foreground">
            PercentLab is designed with privacy in mind. We want to be clear about what we DO NOT collect:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
            <li>We do not require user registration or accounts</li>
            <li>We do not collect names, email addresses, or contact information (except when voluntarily provided via our contact form)</li>
            <li>We do not store your calculation data or inputs</li>
            <li>We do not collect payment information (our service is free)</li>
            <li>We do not use cookies for tracking or identification purposes</li>
            <li>We do not sell, rent, or share any personally identifiable information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>

          <h3 className="text-xl font-semibold mb-3 mt-6">1. Analytics Data</h3>
          <p className="text-muted-foreground">
            We use Google Analytics 4 to understand how visitors use our Site. This service collects:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website</li>
            <li>Anonymized IP address (IP anonymization is enabled)</li>
            <li>General geographic location (country/city level only)</li>
          </ul>
          <p className="text-muted-foreground mt-3">
            <strong>Purpose:</strong> To understand usage patterns, improve our service, and identify technical issues.
          </p>
          <p className="text-muted-foreground mt-3">
            <strong>Legal Basis (GDPR):</strong> Legitimate interest in improving our service.
          </p>
          <p className="text-muted-foreground mt-3">
            <strong>Opt-Out:</strong> You can opt out by enabling Do Not Track in your browser settings, which we respect, or by using browser extensions like uBlock Origin.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">2. Advertising Data</h3>
          <p className="text-muted-foreground">
            We use Google AdSense to display advertisements on our Site. Google may use cookies and similar technologies to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
            <li>Serve ads based on your visit to this and other websites</li>
            <li>Collect data about your browsing behavior for ad personalization</li>
          </ul>
          <p className="text-muted-foreground mt-3">
            <strong>Purpose:</strong> To generate revenue that allows us to keep the service free.
          </p>
          <p className="text-muted-foreground mt-3">
            <strong>Third-Party Privacy Policy:</strong> Google's use of advertising cookies is governed by Google's Privacy Policy. You can learn more and opt out at{' '}
            <a href="https://policies.google.com/technologies/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" aria-label="Read Google's advertising privacy policy (opens in new tab)">
              https://policies.google.com/technologies/ads
            </a>
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">3. Contact Form Data</h3>
          <p className="text-muted-foreground">
            If you choose to contact us through our contact form, we collect:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
            <li>Name (optional)</li>
            <li>Email address</li>
            <li>Message content</li>
          </ul>
          <p className="text-muted-foreground mt-3">
            <strong>Purpose:</strong> To respond to your inquiries and provide customer support.
          </p>
          <p className="text-muted-foreground mt-3">
            <strong>Legal Basis (GDPR):</strong> Consent (by submitting the form) and legitimate interest in responding to inquiries.
          </p>
          <p className="text-muted-foreground mt-3">
            <strong>Retention:</strong> We retain contact form submissions for up to 2 years, unless you request deletion.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">How Your Calculations Are Processed</h2>
          <p className="text-muted-foreground">
            All percentage calculations are performed entirely in your web browser using JavaScript. Your calculation inputs and results:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
            <li>Never leave your device</li>
            <li>Are not transmitted to our servers</li>
            <li>Are not stored or logged anywhere</li>
            <li>Disappear when you close or refresh the page</li>
          </ul>
          <p className="text-muted-foreground mt-3">
            This design ensures complete privacy for your calculations and data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
          <p className="text-muted-foreground">
            Our Site uses the following types of cookies:
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">Essential Cookies</h3>
          <p className="text-muted-foreground">
            We use minimal essential cookies for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
            <li>Theme preference (dark/light mode)</li>
            <li>Basic site functionality</li>
          </ul>
          <p className="text-muted-foreground mt-3">
            These cookies do not identify you personally and are necessary for the Site to function properly.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">Analytics Cookies</h3>
          <p className="text-muted-foreground">
            Google Analytics cookies help us understand how visitors interact with our Site. These are anonymized and do not contain personally identifiable information.
          </p>

          <h3 className="text-xl font-semibold mb-3 mt-6">Advertising Cookies</h3>
          <p className="text-muted-foreground">
            Google AdSense may use cookies for ad personalization and measurement. You can control these through your Google Ad Settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Your Rights Under GDPR (EU/UK Users)</h2>
          <p className="text-muted-foreground">
            If you are located in the European Economic Area (EEA) or the United Kingdom, you have the following rights:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
            <li><strong>Right to Access:</strong> Request copies of your personal data</li>
            <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
            <li><strong>Right to Erasure:</strong> Request deletion of your data</li>
            <li><strong>Right to Restrict Processing:</strong> Request limitation of data processing</li>
            <li><strong>Right to Data Portability:</strong> Request transfer of your data</li>
            <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
            <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
          </ul>
          <p className="text-muted-foreground mt-3">
            To exercise any of these rights, please contact us at the email address provided in the Contact section below.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Your Rights Under CCPA (California Residents)</h2>
          <p className="text-muted-foreground">
            If you are a California resident, you have the following rights under the California Consumer Privacy Act:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
            <li><strong>Right to Know:</strong> Request information about data collected, used, disclosed, or sold</li>
            <li><strong>Right to Delete:</strong> Request deletion of personal information</li>
            <li><strong>Right to Opt-Out:</strong> Opt out of the sale of personal information (Note: We do not sell personal information)</li>
            <li><strong>Right to Non-Discrimination:</strong> Not receive discriminatory treatment for exercising CCPA rights</li>
          </ul>
          <p className="text-muted-foreground mt-3">
            To submit a request, please use the contact information provided below.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Do Not Track Signals</h2>
          <p className="text-muted-foreground">
            We respect Do Not Track (DNT) signals. If your browser has DNT enabled, we will not load Google Analytics or other tracking scripts on your device.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
          <p className="text-muted-foreground">
            We use the following third-party services:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
            <li>
              <strong>Google Analytics:</strong> Analytics service by Google LLC. Privacy Policy:{' '}
              <a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" aria-label="Read Google's privacy policy (opens in new tab)">
                https://policies.google.com/privacy
              </a>
            </li>
            <li>
              <strong>Google AdSense:</strong> Advertising service by Google LLC. Privacy Policy:{' '}
              <a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" aria-label="Read Google's privacy policy for AdSense (opens in new tab)">
                https://policies.google.com/privacy
              </a>
            </li>
            <li>
              <strong>Vercel:</strong> Hosting service. Privacy Policy:{' '}
              <a href="https://vercel.com/legal/privacy-policy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" aria-label="Read Vercel's privacy policy (opens in new tab)">
                https://vercel.com/legal/privacy-policy
              </a>
            </li>
          </ul>
          <p className="text-muted-foreground mt-3">
            These third parties have their own privacy policies governing their collection and use of information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Data Security</h2>
          <p className="text-muted-foreground">
            We implement appropriate technical and organizational security measures to protect your data, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
            <li>HTTPS encryption for all data transmission</li>
            <li>Regular security updates and patches</li>
            <li>Minimal data collection practices</li>
            <li>Access controls and monitoring</li>
          </ul>
          <p className="text-muted-foreground mt-3">
            However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
          <p className="text-muted-foreground">
            Our Site is not intended for children under the age of 13 (or 16 in the EEA). We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately so we can delete it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">International Data Transfers</h2>
          <p className="text-muted-foreground">
            Our Site is hosted on servers that may be located in various countries. By using our Site, you consent to the transfer of your information to countries outside your country of residence, which may have different data protection laws.
          </p>
          <p className="text-muted-foreground mt-3">
            For EEA/UK users: Data transfers to the United States and other countries are conducted in accordance with GDPR requirements, including the use of Standard Contractual Clauses where applicable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
          <p className="text-muted-foreground mt-3">
            We encourage you to review this Privacy Policy periodically for any changes. Changes are effective when posted on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about this Privacy Policy, want to exercise your privacy rights, or have concerns about how your data is handled, please contact us:
          </p>
          <div className="bg-muted p-4 rounded-lg mt-4">
            <p className="text-muted-foreground">
              <strong>PercentLab</strong><br />
              Email: privacy@percentlab.app<br />
              Contact Form: <a href="/contact" className="text-primary hover:underline" aria-label="Visit our contact page">/contact</a>
            </p>
          </div>
          <p className="text-muted-foreground mt-4">
            We will respond to your request within 30 days (or as required by applicable law).
          </p>
        </section>
      </div>
    </div>
  );
}
