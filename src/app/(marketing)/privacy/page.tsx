import { Container } from "@/components/ui/Container";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy | KinChat",
  description: `Privacy Policy for ${SITE_CONFIG.name}`,
};

const CONTACT_EMAIL = "app.kinchat@gmail.com";

export default function Privacy() {
  const tableOfContents = [
    { id: "information-we-collect", title: "1. Information We Collect" },
    { id: "how-we-use-information", title: "2. How We Use Information" },
    { id: "messages-and-content", title: "3. Messages & Content" },
    { id: "push-notifications", title: "4. Push Notifications" },
    { id: "data-sharing", title: "5. Data Sharing & Disclosure" },
    { id: "third-party-services", title: "6. Service Providers" },
    { id: "data-security", title: "7. Data Security" },
    { id: "data-retention", title: "8. Data Retention" },
    { id: "account-deletion", title: "9. Account Deletion" },
    { id: "your-privacy-rights", title: "10. Your Privacy Rights" },
    { id: "children-privacy", title: "11. Children's Privacy" },
    { id: "international-processing", title: "12. International Processing" },
    { id: "policy-changes", title: "13. Changes to This Policy" },
    { id: "contact-us", title: "14. Contact Us" },
  ];

  return (
    <div className="py-16 md:py-24 bg-zinc-950 selection:bg-zinc-800 selection:text-white min-h-screen">
      <Container>
        {/* Header */}
        <header className="max-w-5xl mx-auto mb-16 text-center md:text-left border-b border-zinc-800/80 pb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            Privacy Policy
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
                  This Privacy Policy explains how{" "}
                  <strong className="text-white font-semibold">
                    KinChat
                  </strong>{" "}
                  ("KinChat", "we", "us", or "our") collects, uses, stores,
                  protects, and discloses information when you use our mobile
                  application, website, and related services (collectively, the
                  "Service").
                </p>

                <p>
                  We are committed to respecting your privacy and handling your
                  information responsibly. This policy describes the types of
                  information we handle, why we use it, how it may be shared,
                  how long it may be retained, and the choices available to
                  you.
                </p>
              </section>

              {/* Section 1 */}
              <section
                id="information-we-collect"
                className="scroll-mt-24"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  1. Information We Collect
                </h2>

                <p className="mb-8 text-zinc-400">
                  We collect and process information that is reasonably
                  necessary to provide, secure, maintain, and improve KinChat.
                  The information we handle may include the following:
                </p>

                <div className="space-y-6">
                  <div className="bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800/50">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Account Information
                    </h3>

                    <p className="text-zinc-400">
                      When you create or use a KinChat account, we may collect
                      information associated with your account, such as your
                      email address, authentication information, username,
                      display name, profile information, and account-related
                      identifiers.
                    </p>
                  </div>

                  <div className="bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800/50">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Messages and User Content
                    </h3>

                    <p className="text-zinc-400">
                      KinChat processes the content you choose to send through
                      the Service, including text messages, replies, reactions,
                      and other content associated with your conversations.
                    </p>
                  </div>

                  <div className="bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800/50">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Photos, Videos, and Other Attachments
                    </h3>

                    <p className="text-zinc-400">
                      When you choose to send an image, video, document, or
                      other supported file, the selected content may be
                      uploaded and processed in order to deliver it to the
                      intended recipient and provide related features.
                    </p>
                  </div>

                  <div className="bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800/50">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Device and Technical Information
                    </h3>

                    <p className="text-zinc-400">
                      We may process technical information necessary for
                      application functionality, security, and diagnostics,
                      such as push notification tokens, operating system
                      information, application version, connectivity-related
                      information, crash information, and other technical
                      diagnostics.
                    </p>
                  </div>

                  <div className="bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800/50">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Information You Provide to Us
                    </h3>

                    <p className="text-zinc-400">
                      We may collect information you voluntarily provide when
                      contacting support, reporting a problem, submitting
                      feedback, requesting account deletion, or otherwise
                      communicating with us.
                    </p>
                  </div>

                  <div className="bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800/50">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Permissions and Device Content
                    </h3>

                    <p className="text-zinc-400">
                      KinChat may request access to certain device features or
                      content when required for a feature you choose to use,
                      such as selecting photos, videos, files, or using the
                      camera. We do not access personal files or device content
                      merely because the application is installed. Content is
                      accessed when you initiate a relevant feature and grant
                      the applicable permission when required.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section
                id="how-we-use-information"
                className="scroll-mt-24"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  2. How We Use Information
                </h2>

                <p className="mb-8 text-zinc-400">
                  We use information for purposes reasonably necessary to
                  operate and improve KinChat, including:
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    "Creating and maintaining your account",
                    "Authenticating users and protecting accounts",
                    "Delivering messages and attachments",
                    "Synchronizing conversations and account data",
                    "Supporting offline access and reliable message delivery",
                    "Sending push notifications",
                    "Providing requested application features",
                    "Detecting and preventing abuse, fraud, and security incidents",
                    "Diagnosing technical problems and improving reliability",
                    "Responding to support requests",
                    "Complying with applicable legal obligations",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-zinc-300"
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

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-8 text-zinc-400">
                  We do not use personal or sensitive information for purposes
                  unrelated to providing, securing, or improving the Service
                  unless otherwise disclosed and permitted by applicable law.
                </p>
              </section>

              {/* Section 3 */}
              <section
                id="messages-and-content"
                className="scroll-mt-24"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  3. Messages & Content
                </h2>

                <p className="text-zinc-400 mb-5">
                  KinChat is a messaging service. To provide messaging
                  functionality, messages and other content you choose to send
                  may be transmitted through and stored within the systems used
                  to operate the Service.
                </p>

                <p className="text-zinc-400 mb-5">
                  Depending on the feature and device state, messages and
                  related data may also be stored locally on your device. Local
                  storage may be used to support offline access, message
                  composition, synchronization, caching, and reliable delivery.
                </p>

                <p className="text-zinc-400">
                  When you upload a photo, video, document, or other
                  attachment, the selected file may be processed and stored as
                  necessary to deliver and display that content in your
                  conversation.
                </p>
              </section>

              {/* Section 4 */}
              <section
                id="push-notifications"
                className="scroll-mt-24"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  4. Push Notifications
                </h2>

                <p className="text-zinc-400 mb-5">
                  KinChat may use push notification infrastructure to notify you
                  about new messages and other relevant events.
                </p>

                <p className="text-zinc-400">
                  A device-specific push notification token may be processed for
                  this purpose. Depending on the type of notification and your
                  settings, notification data may include the information
                  necessary to identify the relevant event or conversation.
                </p>

                <p className="text-zinc-400 mt-5">
                  You can control notifications through the notification
                  settings available on your device and, where provided,
                  within KinChat.
                </p>
              </section>

              {/* Section 5 */}
              <section id="data-sharing" className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  5. Data Sharing & Disclosure
                </h2>

                <p className="text-zinc-400 mb-5">
                  We do not sell your personal information or private messages
                  for monetary consideration.
                </p>

                <p className="text-zinc-400 mb-5">
                  We may disclose or transfer information when reasonably
                  necessary to operate the Service, including to infrastructure
                  and technology providers that process information on our
                  behalf.
                </p>

                <div className="space-y-4">
                  <div className="bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800/50">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Service Operation
                    </h3>
                    <p className="text-zinc-400">
                      Information may be processed by providers that support
                      authentication, databases, cloud infrastructure,
                      synchronization, file storage, media delivery, analytics,
                      security, or push notifications.
                    </p>
                  </div>

                  <div className="bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800/50">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Legal and Safety Reasons
                    </h3>
                    <p className="text-zinc-400">
                      We may disclose information when required by applicable
                      law, valid legal process, or where reasonably necessary to
                      protect the security, rights, property, or safety of
                      KinChat, our users, or others.
                    </p>
                  </div>

                  <div className="bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800/50">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Business Transactions
                    </h3>
                    <p className="text-zinc-400">
                      If KinChat is involved in a merger, acquisition,
                      restructuring, financing, or sale of assets, information
                      may be transferred as part of that transaction, subject
                      to applicable law and appropriate safeguards.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section
                id="third-party-services"
                className="scroll-mt-24"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  6. Service Providers
                </h2>

                <p className="mb-8 text-zinc-400">
                  We rely on specialized technology and infrastructure providers
                  to operate different parts of KinChat. These providers may
                  process information on our behalf only as necessary for the
                  services they provide.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-4">
                      <svg
                        className="w-5 h-5 text-zinc-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M3 7.5A2.5 2.5 0 015.5 5h13A2.5 2.5 0 0121 7.5v9a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 16.5v-9z"
                        />
                      </svg>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">
                      Cloud Infrastructure
                    </h3>

                    <p className="text-sm text-zinc-400">
                      Used for account data, message synchronization, backend
                      functionality, and reliable operation of the Service.
                    </p>
                  </div>

                  <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-4">
                      <svg
                        className="w-5 h-5 text-zinc-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M15.5 14.5L19 18m-7.5-9.5a4 4 0 100 8 4 4 0 000-8z"
                        />
                      </svg>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">
                      Media Infrastructure
                    </h3>

                    <p className="text-sm text-zinc-400">
                      Used to upload, process, store, and deliver media or
                      attachments that you choose to send.
                    </p>
                  </div>

                  <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-4">
                      <svg
                        className="w-5 h-5 text-zinc-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M18 8a6 6 0 10-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M10 21h4"
                        />
                      </svg>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">
                      Notification Infrastructure
                    </h3>

                    <p className="text-sm text-zinc-400">
                      Used to deliver push notifications and other
                      notification-related events to supported devices.
                    </p>
                  </div>

                  <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-4">
                      <svg
                        className="w-5 h-5 text-zinc-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M12 6v6l4 2m5-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">
                      Security & Reliability
                    </h3>

                    <p className="text-sm text-zinc-400">
                      Additional services may be used when necessary for
                      security, fraud prevention, monitoring, diagnostics, or
                      reliability.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7 */}
              <section id="data-security" className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  7. Data Security
                </h2>

                <p className="text-zinc-400 mb-5">
                  We use reasonable technical and organizational measures
                  designed to protect information against unauthorized access,
                  alteration, disclosure, loss, or destruction.
                </p>

                <p className="text-zinc-400 mb-5">
                  Depending on the type of data and the feature involved, these
                  measures may include encrypted network communication, access
                  controls, authentication mechanisms, restricted system
                  permissions, and other security practices.
                </p>

                <p className="text-zinc-400">
                  No internet service, electronic storage system, or method of
                  transmission can be guaranteed to be completely secure.
                  Therefore, while we work to protect your information, we
                  cannot guarantee absolute security.
                </p>
              </section>

              {/* Section 8 */}
              <section id="data-retention" className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  8. Data Retention
                </h2>

                <p className="text-zinc-400 mb-5">
                  We retain information for as long as reasonably necessary to
                  provide the Service, maintain account functionality, support
                  security and reliability, resolve disputes, enforce our
                  agreements, and comply with applicable legal obligations.
                </p>

                <p className="text-zinc-400 mb-5">
                  Retention periods may vary depending on the type of
                  information, the purpose for which it was collected, and
                  operational or legal requirements.
                </p>

                <p className="text-zinc-400">
                  Information that is no longer required may be deleted,
                  anonymized, or otherwise disposed of in accordance with
                  applicable requirements and our operational processes.
                </p>
              </section>

              {/* Section 9 */}
              <section id="account-deletion" className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  9. Account Deletion
                </h2>

                <p className="text-zinc-400 mb-5">
                  You may request deletion of your KinChat account and
                  associated personal information through the account deletion
                  functionality provided by the Service or by contacting us at
                  the email address provided below.
                </p>

                <p className="text-zinc-400 mb-5">
                  When a valid deletion request is processed, we will delete or
                  anonymize information associated with the account, except
                  where retention is reasonably necessary for legal
                  compliance, security, fraud prevention, dispute resolution,
                  or other lawful purposes.
                </p>

                <p className="text-zinc-400">
                  Some information may remain temporarily in encrypted backups
                  or system logs until those systems are routinely overwritten
                  or the information is no longer required.
                </p>
              </section>

              {/* Section 10 */}
              <section
                id="your-privacy-rights"
                className="scroll-mt-24"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  10. Your Privacy Rights
                </h2>

                <p className="text-zinc-400 mb-5">
                  Depending on your location and applicable law, you may have
                  certain rights regarding your personal information.
                </p>

                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      Request access to personal information we hold about you.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      Request correction or updating of inaccurate information.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      Request deletion of personal information, subject to
                      applicable exceptions.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      Request restriction of or object to certain processing,
                      where applicable.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>
                      Request a copy of certain information in a portable
                      format where required by applicable law.
                    </span>
                  </li>
                </ul>

                <p className="text-zinc-400 mt-6">
                  To exercise a privacy right, contact us using the information
                  in the "Contact Us" section. We may take reasonable steps to
                  verify your identity before fulfilling certain requests.
                </p>
              </section>

              {/* Section 11 */}
              <section id="children-privacy" className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  11. Children's Privacy
                </h2>

                <p className="text-zinc-400 mb-5">
                  KinChat is not intended for children who are below the minimum
                  age required by applicable law to use online services without
                  appropriate parental consent.
                </p>

                <p className="text-zinc-400">
                  We do not knowingly collect personal information from children
                  in violation of applicable law. If you believe that a child
                  has provided personal information to KinChat, please contact
                  us so that we can investigate and take appropriate action.
                </p>
              </section>

              {/* Section 12 */}
              <section
                id="international-processing"
                className="scroll-mt-24"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  12. International Processing
                </h2>

                <p className="text-zinc-400 mb-5">
                  Depending on where you live and where the Service or our
                  service providers operate, your information may be processed
                  or stored in countries other than your own.
                </p>

                <p className="text-zinc-400">
                  Where required by applicable law, we take reasonable measures
                  intended to provide appropriate protection for information
                  transferred or processed across borders.
                </p>
              </section>

              {/* Section 13 */}
              <section id="policy-changes" className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  13. Changes to This Privacy Policy
                </h2>

                <p className="text-zinc-400 mb-5">
                  We may update this Privacy Policy from time to time to
                  reflect changes to KinChat, our data practices, technology, or
                  applicable legal requirements.
                </p>

                <p className="text-zinc-400 mb-5">
                  When we make material changes, we may provide additional
                  notice where appropriate.
                </p>

                <p className="text-zinc-400">
                  The "Last Updated" date displayed at the top of this page
                  indicates when this Privacy Policy was most recently revised.
                </p>
              </section>

              {/* Section 14 */}
              <section id="contact-us" className="scroll-mt-24 pt-8">
                <div className="border-t border-zinc-800/80 pt-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    14. Contact Us
                  </h2>

                  <p className="text-zinc-400 mb-8">
                    If you have questions, privacy concerns, data requests, or
                    account deletion requests, please contact us using the
                    email address below.
                  </p>

                  <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-8 md:p-10 rounded-3xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        Privacy & Support
                      </h3>

                      <p className="text-zinc-400 max-w-md">
                        We will review your request and respond as appropriate.
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

              {/* Footer Note */}
              <footer className="pt-12 pb-8 border-t border-zinc-900">
                <p className="text-sm text-zinc-500 text-center md:text-left">
                  This Privacy Policy is intended to provide transparent
                  information about KinChat's privacy and data practices. It is
                  not legal advice and does not create a contractual
                  relationship between you and KinChat.
                </p>
              </footer>
            </div>
          </article>
        </div>
      </Container>
    </div>
  );
}
