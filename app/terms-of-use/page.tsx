import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'PercentLab Terms of Use - Read our terms and conditions for using our free percentage calculator service.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfUsePage() {
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Terms of Use</h1>
      <p className="text-muted-foreground mb-8">
        <strong>Last Updated:</strong> January 2025
      </p>

      <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
          <p className="text-muted-foreground">
            These Terms of Use ("Terms") govern your access to and use of PercentLab ("we," "our," or "us"), available at percentlab.app (the "Site"). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use the Site.
          </p>
          <p className="text-muted-foreground mt-3">
            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Site after any changes constitutes acceptance of the modified Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Description of Service</h2>
          <p className="text-muted-foreground">
            PercentLab provides a free online percentage calculator service that allows users to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
            <li>Calculate what a percentage of a number equals</li>
            <li>Determine what percentage one number is of another</li>
            <li>Calculate percentage increases and decreases</li>
            <li>Access educational explanations and examples for each calculation</li>
          </ul>
          <p className="text-muted-foreground mt-3">
            The Service is provided free of charge and is supported by advertising.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Informational Purposes Only</h2>
          <p className="text-muted-foreground">
            <strong>IMPORTANT:</strong> The calculations and information provided by PercentLab are for informational and educational purposes only. While we strive for accuracy, we make no guarantees about the completeness, reliability, or accuracy of the calculations or information provided.
          </p>
          <p className="text-muted-foreground mt-3">
            The Service is NOT intended to provide:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
            <li>Financial advice or recommendations</li>
            <li>Professional accounting or tax guidance</li>
            <li>Medical, legal, or other professional advice</li>
            <li>Guarantees for business or investment decisions</li>
          </ul>
          <p className="text-muted-foreground mt-3">
            You should always consult with qualified professionals (financial advisors, accountants, lawyers, etc.) for specific advice related to your situation. Do not rely solely on our calculations for important financial, business, or personal decisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">No Warranties</h2>
          <p className="text-muted-foreground">
            THE SITE AND SERVICE ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
            <li>Warranties of merchantability</li>
            <li>Fitness for a particular purpose</li>
            <li>Non-infringement</li>
            <li>Accuracy or completeness of calculations</li>
            <li>Uninterrupted or error-free operation</li>
            <li>Freedom from viruses or harmful components</li>
          </ul>
          <p className="text-muted-foreground mt-3">
            We do not warrant that:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
            <li>The Site will meet your requirements</li>
            <li>The Site will be available at any particular time or location</li>
            <li>Any defects or errors will be corrected</li>
            <li>The results obtained from using the Site will be accurate or reliable</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
          <p className="text-muted-foreground">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, PERCENTLAB AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, PARTNERS, AND LICENSORS SHALL NOT BE LIABLE FOR:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
            <li>Any indirect, incidental, special, consequential, or punitive damages</li>
            <li>Loss of profits, revenue, data, or use</li>
            <li>Loss of business opportunities</li>
            <li>Financial losses resulting from calculation errors</li>
            <li>Decisions made based on information from the Site</li>
          </ul>
          <p className="text-muted-foreground mt-3">
            This limitation applies whether the claim is based on warranty, contract, tort (including negligence), or any other legal theory, even if we have been advised of the possibility of such damages.
          </p>
          <p className="text-muted-foreground mt-3">
            IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES EXCEED ONE HUNDRED DOLLARS ($100.00 USD).
          </p>
          <p className="text-muted-foreground mt-3">
            Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so the above limitations may not apply to you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
          <p className="text-muted-foreground">
            When using the Site, you agree to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
            <li>Use the Service only for lawful purposes</li>
            <li>Not attempt to interfere with, compromise, or disrupt the Site</li>
            <li>Not use automated tools to access the Site in a manner that could damage or overburden our servers</li>
            <li>Verify important calculations independently</li>
            <li>Not rely solely on our calculations for critical decisions</li>
            <li>Comply with all applicable local, state, national, and international laws</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Intellectual Property Rights</h2>
          <p className="text-muted-foreground">
            The Site and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, and design) are owned by PercentLab and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </p>
          <p className="text-muted-foreground mt-3">
            You may not:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
            <li>Copy, modify, or create derivative works of the Site</li>
            <li>Reverse engineer or attempt to extract source code</li>
            <li>Remove any copyright or proprietary notices</li>
            <li>Use the Site's content for commercial purposes without permission</li>
          </ul>
          <p className="text-muted-foreground mt-3">
            You may use the calculator for personal or business purposes, but you may not republish, distribute, or sell the calculator itself or substantial portions of the Site's content.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Third-Party Links and Services</h2>
          <p className="text-muted-foreground">
            The Site may contain links to third-party websites or services (such as Google Analytics and Google AdSense) that are not owned or controlled by PercentLab.
          </p>
          <p className="text-muted-foreground mt-3">
            We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused by your use of any such content or services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Advertising</h2>
          <p className="text-muted-foreground">
            The Site displays advertisements provided by third parties, including Google AdSense. We do not endorse, warrant, or guarantee any products, services, or content advertised on the Site.
          </p>
          <p className="text-muted-foreground mt-3">
            Your interactions with advertisers and any resulting transactions are solely between you and the advertiser. We are not responsible for any losses or damages incurred as a result of such interactions or transactions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
          <p className="text-muted-foreground">
            You agree to indemnify, defend, and hold harmless PercentLab and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
            <li>Your use of the Site</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any rights of another party</li>
            <li>Decisions made based on calculations from the Site</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Termination</h2>
          <p className="text-muted-foreground">
            We reserve the right to terminate or suspend your access to the Site immediately, without prior notice or liability, for any reason, including but not limited to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
            <li>Violation of these Terms</li>
            <li>Abusive or harmful behavior</li>
            <li>Interference with the Site's operation</li>
            <li>Fraudulent or illegal activity</li>
          </ul>
          <p className="text-muted-foreground mt-3">
            Upon termination, your right to use the Site will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Governing Law and Jurisdiction</h2>
          <p className="text-muted-foreground">
            These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
          </p>
          <p className="text-muted-foreground mt-3">
            Any legal action or proceeding arising out of or related to these Terms or the Site shall be brought exclusively in the federal or state courts located in Delaware, and you consent to the personal jurisdiction of such courts.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Dispute Resolution</h2>
          <p className="text-muted-foreground">
            If you have any concern or dispute about the Service, you agree to first try to resolve the dispute informally by contacting us at the email address provided below.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Severability</h2>
          <p className="text-muted-foreground">
            If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions will continue in full force and effect. The invalid or unenforceable provision will be deemed modified to the extent necessary to make it valid and enforceable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Entire Agreement</h2>
          <p className="text-muted-foreground">
            These Terms, together with our Privacy Policy, constitute the entire agreement between you and PercentLab regarding the use of the Site and supersede all prior agreements and understandings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">No Waiver</h2>
          <p className="text-muted-foreground">
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. Any waiver of any provision must be in writing and signed by an authorized representative.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-muted-foreground">
            If you have any questions about these Terms of Use, please contact us:
          </p>
          <div className="bg-muted p-4 rounded-lg mt-4">
            <p className="text-muted-foreground">
              <strong>PercentLab</strong><br />
              Email: legal@percentlab.app<br />
              Contact Form: <a href="/contact" className="text-primary hover:underline">/contact</a>
            </p>
          </div>
        </section>

        <section className="border-t pt-6 mt-8">
          <p className="text-sm text-muted-foreground italic">
            By using PercentLab, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
          </p>
        </section>
      </div>
    </div>
  );
}
