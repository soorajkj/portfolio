import React from "react";
import Container from "@/components/core/container";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="#contact" className="relative overflow-hidden">
      <Container>
        <div className="py-24">
          <div className="flex flex-col items-center gap-4 pb-24 text-center">
            <h2 className="text-neutral max-w-screen-sm font-family-bebas text-5xl font-medium leading-none text-neutral-900">
              Let’s Create Something Awesome ! <br /> Get in Touch with me
            </h2>
            <p className="w-full max-w-lg text-base">
              Although I&apos;m not currently looking for any new opportunities,
              my inbox is always open. Whether you have a question or just want
              to say hi, I&apos;ll try my best to get back to you!
            </p>
          </div>
          <div className="mx-auto max-w-md">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
