import { Container } from "@/components/ui/Container";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = {
  title: "Terms of Service | KinChat",
  description: `Terms of Service for ${SITE_CONFIG.name}`,
};

const CONTACT_EMAIL = "app.kinchat@gmail.com";

export default function Terms() {
  const tableOfContents = [
    { id: "acceptance", title: "1. Acceptance of Terms" },
    { id: "eligibility", title: "2. Eligibility" },
    { id: "your-account", title: "3. Your Account" },
    { id: "messaging", title: "4. Messaging & User Content" },
    { id: "acceptable-use", title: "5. Acceptable Use" },
    { id: "prohibited-content", title: "6. Prohibited Content" },
    { id: "privacy", title: "7. Privacy" },
    { id: "intellectual-property", title: "8. Intellectual Property" },
    { id: "service-availability", title: "9. Service Availability" },
    { id: "third-party-services", title: "10. Third-Party Services" },
    { id: "termination", title: "11. Suspension & Termination" },
    { id: "disclaimers", title: "12. Disclaimers" },
    { id: "limitation", title: "13. Limitation of Liability" },
    { id: "changes", title: "14. Changes to These Terms" },
    { id: "governing-law", title: "15. Governing Law" },
    { id: "contact", title: "16. Contact Us" },
  ];

  return (
    <div className="py-16 md:py-24 bg-zinc-950 selection:bg-zinc-800 selection:text-white min-h-screen">
      <Container>
        {/* Header */}
        <header className="max-w-5xl mx-auto mb-16 text-center md:text-left border-b border-zinc-800/80 pb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            Terms of Service
          </h1>

          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />

            <p className="text-zinc-400 text-sm font-medium">
              Last Updated:{" "}
              <span className="text-zinc-200">
                {SITE_CONFIG.lastUpdated}
              </span>
            </p>
          </div>
        </header>

        {/* Main Layout */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 relative">
          {/* Table of Contents */}
          <aside className="hidden md:block w-64 shrink-0">
            <div className="sticky top-24">
              <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4">
                Contents
              </h4>

              <nav className="flex flex-col gap-1 border-l border-zinc-800">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-sm text-zinc-400 hover:text-white hover:bg-zinc-900 py-2 px-4 border-l-2 border-transparent hover:border-zinc-500 transition-all rounded-r-md"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <article className="flex-1 max-w-3xl">
            <div className="text-zinc-300 text-[17px] leading-relaxed space-y-16">
              {/* Introduction */}
              <section className="text-lg text-zinc-400">
                <p className="mb-5">
                  These Terms of Service ("Terms") govern your access to and
                  use of{" "}
                  <strong className="text-white font-semibold">
                    KinChat
                  </strong>
                  , including the KinChat mobile application, website, and
                  related services (collectively, the "Service").
                </p>

                <p>
                  By downloading, installing, accessing, or using KinChat, you
                  agree to be bound by these Terms. If you do not agree with
                  these Terms, you should not use the Service.
                </p>
              </section>

              {/* Section 1 */}
              <section id="acceptance" className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  1. Acceptance of Terms
                </h2>

                <p className="text-zinc-400 mb-5">
                  These Terms form a legal agreement between you and KinChat
                  regarding your use of the Service.
                </p>

                <p className="text-zinc-400">
                  Your continued use of KinChat after any changes to these Terms
                  means that you accept the revised Terms, subject to any
                  additional notice that may be required by applicable law.
                </p>
              </section>

              {/* Section 2 */}
              <section id="eligibility" className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  2. Eligibility
                </h2>

                <p className="text-zinc-400 mb-5">
                  You may use KinChat only if you are legally permitted to use
                  the Service under the laws applicable to you.
                </p>

                <p className="text-zinc-400">
                  If you are below the age required to independently consent to
                  online services in your jurisdiction, you may use KinChat
                  only where permitted by applicable law and, where required,
                  with appropriate parental or guardian consent.
                </p>
              </section>

              {/* Section 3 */}
              <section id="your-account" className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  3. Your Account
                </h2>

                <p className="text-zinc-400 mb-5">
                  Some features of KinChat require an account. You are
                  responsible for providing accurate information and keeping
                  your account information up to date.
                </p>

                <p className="text-zinc-400 mb-5">
                  You are responsible for maintaining the confidentiality of
                  your account credentials and for activity occurring through
                  your account, except where unauthorized activity results from
                  circumstances outside your reasonable control.
                </p>

                <p className="text-zinc-400">
                  You must notify us promptly if you believe that your account
                  has been accessed or used without authorization.
                </p>
              </section>

              {/* Section 4 */}
              <section id="messaging" className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  4. Messaging & User Content
                </h2>

                <p className="text-zinc-400 mb-5">
                  KinChat allows users to send messages, media, files, replies,
                  reactions, and other supported content to other users.
                </p>

                <p className="text-zinc-400 mb-5">
                  You retain ownership of content that you create and submit
                  through the Service, subject to the rights and permissions
                  reasonably necessary for KinChat to operate the Service.
                </p>

                <p className="text-zinc-400 mb-5">
                  By submitting content through KinChat, you grant us a
                  limited, non-exclusive, worldwide license to host, store,
                  reproduce, transmit, process, and display that content only
                  as necessary to provide and operate the Service.
                </p>

                <p className="text-zinc-400">
                  You are responsible for the content you send and for ensuring
                  that you have the necessary rights and permissions to submit
                  such content.
                </p>
              </section>

              {/* Section 5 */}
              <section id="acceptable-use" className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  5. Acceptable Use
                </h2>

                <p className="mb-6 text-zinc-400">
                  You agree to use KinChat lawfully, responsibly, and in a way
                  that does not interfere with the rights, safety, privacy, or
                  security of others.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    "Use the Service only for lawful purposes",
                    "Respect the privacy and rights of other users",
                    "Keep your account credentials secure",
                    "Provide accurate information when required",
                    "Use the Service without attempting to disrupt its operation",
                    "Comply with applicable laws and regulations",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-5"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-500 mt-1 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>

                      <span className="text-zinc-300">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 6 */}
              <section id="prohibited-content" className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  6. Prohibited Content & Activities
                </h2>

                <p className="text-zinc-400 mb-6">
                  You must not use KinChat to engage in unlawful, abusive,
                  harmful, fraudulent, or disruptive activities.
                </p>

                <div className="space-y-4">
                  {[
                    "Use KinChat for illegal activities or to facilitate unlawful conduct.",
                    "Harass, threaten, stalk, intimidate, or target other users.",
                    "Send malicious software, harmful code, phishing attempts, or deceptive content.",
                    "Attempt to gain unauthorized access to accounts, systems, servers, or data.",
                    "Interfere with, overload, reverse engineer, or disrupt the Service.",
                    "Impersonate another person, organization, or entity in a deceptive manner.",
                    "Use automated systems, bots, scripts, or scraping tools to abuse or disrupt the Service.",
                    "Distribute content that unlawfully infringes copyrights, trademarks, privacy rights, or other rights.",
                    "Use KinChat to conduct fraud, scams, spam, or other abusive activity.",
                    "Circumvent security, authentication, access controls, or usage restrictions.",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-5"
                    >
                      <span className="text-red-400 font-bold mt-0.5">×</span>
                      <span className="text-zinc-400">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 7 */}
              <section id="privacy" className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  7. Privacy
                </h2>

                <p className="text-zinc-400 mb-5">
                  Your use of KinChat is also subject to our Privacy Policy,
                  which explains how we collect, use, store, protect, and
                  disclose information.
                </p>

                <p className="text-zinc-400">
                  By using the Service, you acknowledge that you have read our
                  Privacy Policy and understand the practices described there.
                </p>
              </section>

              {/* Section 8 */}
              <section id="intellectual-property" className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  8. Intellectual Property
                </h2>

                <p className="text-zinc-400 mb-5">
                  KinChat and its original software, design, branding, logos,
                  visual elements, features, documentation, and other
                  intellectual property are owned by or licensed to KinChat,
                  except for content provided by users or third parties.
                </p>

                <p className="text-zinc-400 mb-5">
                  Unless expressly permitted by us or applicable law, you may
                  not copy, modify, distribute, sell, lease, sublicense,
                  reverse engineer, or create derivative works from the
                  Service or its proprietary components.
                </p>

                <p className="text-zinc-400">
                  Nothing in these Terms grants you ownership of KinChat's
                  trademarks, branding, software, or other proprietary
                  materials.
                </p>
              </section>

              {/* Section 9 */}
              <section id="service-availability" className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  9. Service Availability
                </h2>

                <p className="text-zinc-400 mb-5">
                  We work to keep KinChat available and reliable, but the
                  Service may occasionally be unavailable because of
                  maintenance, updates, technical failures, network problems,
                  security incidents, or circumstances beyond our reasonable
                  control.
                </p>

                <p className="text-zinc-400">
                  We do not guarantee that KinChat will always be available,
                  uninterrupted, error-free, or compatible with every device,
                  operating system, network, or configuration.
                </p>
              </section>

              {/* Section 10 */}
              <section id="third-party-services" className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  10. Third-Party Services
                </h2>

                <p className="text-zinc-400 mb-5">
                  KinChat may rely on third-party technologies, infrastructure,
                  network services, app-store services, notification systems,
                  media services, and other external providers to operate
                  certain features.
                </p>

                <p className="text-zinc-400 mb-5">
                  Your use of certain third-party services may also be subject
                  to the terms and policies of those providers.
                </p>

                <p className="text-zinc-400">
                  We are not responsible for the availability, security,
                  functionality, or content of third-party services that are
                  outside our reasonable control.
                </p>
              </section>

              {/* Section 11 */}
              <section id="termination" className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  11. Suspension & Termination
                </h2>

                <p className="text-zinc-400 mb-5">
                  You may stop using KinChat at any time. Where available, you
                  may also delete your account through the provided account
                  deletion functionality.
                </p>

                <p className="text-zinc-400 mb-5">
                  We may suspend, restrict, or terminate access to the Service
                  if we reasonably believe that you have violated these Terms,
                  created a security risk, engaged in unlawful or abusive
                  activity, or otherwise misused the Service.
                </p>

                <p className="text-zinc-400">
                  We may also suspend or terminate access when necessary to
                  protect the Service, its users, or to comply with applicable
                  law or legal obligations.
                </p>
              </section>

              {/* Section 12 */}
              <section id="disclaimers" className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  12. Disclaimers
                </h2>

                <p className="text-zinc-400 mb-5">
                  KinChat is provided on an "as is" and "as available" basis to
                  the extent permitted by applicable law.
                </p>

                <p className="text-zinc-400 mb-5">
                  We do not warrant that the Service will always be accurate,
                  uninterrupted, secure, or free from defects or harmful
                  components.
                </p>

                <p className="text-zinc-400">
                  You use KinChat at your own discretion and risk. Nothing in
                  these Terms excludes or limits rights or protections that
                  cannot lawfully be excluded or limited under applicable law.
                </p>
              </section>

              {/* Section 13 */}
              <section id="limitation" className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  13. Limitation of Liability
                </h2>

                <p className="text-zinc-400 mb-5">
                  To the maximum extent permitted by applicable law, KinChat
                  and its operators, contributors, and service providers will
                  not be liable for indirect, incidental, special,
                  consequential, or punitive damages arising from or related
                  to your use of the Service.
                </p>

                <p className="text-zinc-400 mb-5">
                  This may include loss of data, loss of profits, loss of
                  business opportunities, service interruptions, or other
                  indirect losses, except where such limitations are prohibited
                  by applicable law.
                </p>

                <p className="text-zinc-400">
                  Nothing in these Terms limits liability that cannot legally be
                  limited under applicable law.
                </p>
              </section>

              {/* Section 14 */}
              <section id="changes" className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  14. Changes to These Terms
                </h2>

                <p className="text-zinc-400 mb-5">
                  We may update these Terms from time to time to reflect
                  changes to KinChat, new features, security requirements,
                  business practices, or applicable legal requirements.
                </p>

                <p className="text-zinc-400 mb-5">
                  When appropriate, we may provide notice of material changes
                  through the Service or other reasonable communication
                  methods.
                </p>

                <p className="text-zinc-400">
                  The "Last Updated" date displayed at the top of this page
                  indicates when these Terms were most recently revised.
                </p>
              </section>

              {/* Section 15 */}
              <section id="governing-law" className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  15. Governing Law
                </h2>

                <p className="text-zinc-400 mb-5">
                  These Terms shall be interpreted and applied in accordance
                  with applicable laws governing the relationship between you
                  and KinChat, subject to any mandatory consumer protection or
                  other rights that apply in your jurisdiction.
                </p>

                <p className="text-zinc-400">
                  If you have a legal concern regarding these Terms, we
                  encourage you to contact us first so that we can attempt to
                  resolve the matter directly.
                </p>
              </section>

              {/* Section 16 */}
              <section id="contact" className="scroll-mt-24 pt-8">
                <div className="border-t border-zinc-800/80 pt-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    16. Contact Us
                  </h2>

                  <p className="text-zinc-400 mb-8">
                    If you have questions about these Terms, need assistance
                    with your account, or want to report a legal or policy
                    concern, please contact us.
                  </p>

                  <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-8 md:p-10 rounded-3xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        Need help?
                      </h3>

                      <p className="text-zinc-400 max-w-md">
                        Contact the KinChat team for questions, account
                        assistance, or concerns regarding these Terms.
                      </p>
                    </div>

                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="shrink-0 group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold text-zinc-950 bg-white rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
                    >
                      <div className="absolute inset-0 bg-zinc-200 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />

                      <svg
                        className="w-5 h-5 relative z-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>

                      <span className="relative z-10">
                        {CONTACT_EMAIL}
                      </span>
                    </a>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <footer className="pt-12 pb-8 border-t border-zinc-900">
                <p className="text-sm text-zinc-500 text-center md:text-left">
                  These Terms of Service are intended to describe the rules and
                  conditions for using KinChat. They are not legal advice and
                  may not cover every legal requirement applicable to your
                  particular situation.
                </p>
              </footer>
            </div>
          </article>
        </div>
      </Container>
    </div>
  );
}
