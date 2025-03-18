import React from "react";
import Container from "@/components/core/container";

export default function PrivacyPolicy() {
  return (
    <section className="relative overflow-hidden">
      <Container>
        <article className="mx-auto max-w-screen-md py-24">
          <div className="mx-auto max-w-screen-md pb-24 text-center">
            <h1 className="font-family-bebas text-4xl text-neutral-800">
              Privacy Policy
            </h1>
            <p>
              <strong>Last Updated:</strong> [Insert Date]
            </p>
          </div>
          <div className="flex flex-col gap-4 text-base">
            <div>
              <h2 className="text-xl font-semibold">
                1. Information Collected
              </h2>
              <p>
                When you submit the <strong>Get in Touch</strong> form, I
                collect the following details:
              </p>
              <ul>
                <li>
                  <strong>Name</strong>
                </li>
                <li>
                  <strong>Email Address</strong>
                </li>
                <li>
                  <strong>Company</strong> (optional)
                </li>
                <li>
                  <strong>Message Content</strong>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold">
                2. How Your Information is Used
              </h2>
              <p>
                The collected information is only used to receive your message
                and respond to your inquiry. No data is stored on databases or
                shared with third parties. The details you provide are simply
                sent via email to my inbox.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">3. Data Retention</h2>
              <p>
                Since the form data is not stored on the website, it only exists
                in my email inbox and will not be used for marketing or any
                other purpose.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">4. Third-Party Services</h2>
              <p>
                This website does not use cookies or tracking related to form
                submissions. However, I may use analytics tools to track general
                website visits (without collecting personal data).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">5. Your Rights</h2>
              <p>
                If you’ve sent me a message and wish to have it deleted, you can
                contact me at <a href="mailto:[Your Email]">[Your Email]</a> to
                request its removal.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">6. Contact Me</h2>
              <p>
                For any privacy concerns, feel free to reach out via email at{" "}
                <a href="mailto:[Your Email]">[Your Email]</a>.
              </p>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}
