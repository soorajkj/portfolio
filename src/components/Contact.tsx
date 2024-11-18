import * as React from "react";
import Container from "@/components/core/container";
import ContactForm from "./ContactForm";

export default function Contacts() {
  return (
    <section id="#contact">
      <Container>
        <div className="py-24">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-6">
              <h2 className="bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-400 bg-clip-text text-4xl font-semibold leading-tight text-transparent">
                Get In Touch
              </h2>
              <p className="mt-4 max-w-sm text-sm text-neutral-400">
                Although I’m not currently looking for any new opportunities, my
                inbox is always open. Whether you have a question or just want
                to say hi, I’ll try my best to get back to you!
              </p>
            </div>
            <div className="col-span-12 md:col-span-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
