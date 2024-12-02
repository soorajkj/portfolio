import React from "react";
import Container from "@/components/core/container";
import ContactForm from "@/components/ContactForm";

export default function GetInTouch() {
  return (
    <section
      id="#contact"
      className="relative overflow-hidden before:absolute before:inset-0 before:bg-[url('/images/new.webp')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-80"
    >
      <Container>
        <div className="py-24">
          <div className="grid">
            <div className="mb-16 flex flex-col items-center gap-4 text-center">
              <h2 className="max-w-screen-sm bg-gradient-to-b from-zinc-50 via-zinc-300 to-zinc-400 bg-clip-text text-4xl font-semibold leading-tight text-transparent">
                Get In Touch
              </h2>
              <p className="w-full max-w-md text-sm">
                Although I&apos;m not currently looking for any new
                opportunities, my inbox is always open. Whether you have a
                question or just want to say hi, I&apos;ll try my best to get
                back to you!
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
