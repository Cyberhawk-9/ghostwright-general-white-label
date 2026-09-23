export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="container max-w-7xl mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tighter mb-6">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using our website and services, you agree to be bound by these Terms of Service. If you
              disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              We provide web design and development services as described on our website. The specific scope, timeline,
              and deliverables for each project will be outlined in a separate project agreement or statement of work.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Payment is $99 upon completion of your website. After launch, you pay $20/month for hosting, SSL
              certificates, and ongoing updates. Payment terms are as follows:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>$149 is due upon completion and approval of each partner website</li>
              <li>$25/month begins the month after launch for hosting, SSL, and maintenance</li>
              <li>Payments are processed through secure third-party platforms</li>
              <li>Refunds are subject to the platform's refund policy and project completion status</li>
              <li>Additional work beyond the agreed scope will be billed separately</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Project Timeline</h2>
            <p className="text-muted-foreground leading-relaxed">
              We strive to meet all agreed-upon deadlines. However, timelines may be affected by factors such as client
              feedback delays, scope changes, or unforeseen technical issues. We will communicate any delays promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Revisions</h2>
            <p className="text-muted-foreground leading-relaxed">
              We offer unlimited revisions to ensure you are perfectly happy with the finished product. We work with you
              until the website meets your expectations and requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Client Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Clients are responsible for:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Providing timely feedback and approvals</li>
              <li>Supplying necessary content, images, and brand materials</li>
              <li>Ensuring all provided content is legally owned or licensed</li>
              <li>Maintaining their own hosting and domain services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              We are not liable for any indirect, incidental, or consequential damages arising from the use of our
              services. Our total liability shall not exceed the amount paid for the specific project in question.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              Either party may terminate a project with written notice. In the event of termination, payment for
              completed work will be due, and any remaining balance may be refunded at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which we
              operate, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting
              to this page. Your continued use of our services constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms of Service, please contact us through our contact page.
            </p>
          </section>
        </div>
      </section>
    </div>
  )
}
