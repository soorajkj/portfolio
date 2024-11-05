import * as React from "react";
import Container from "@/components/core/container";

export default function Contacts() {
  return (
    <section id="#contact">
      <Container>
        <div className="py-24">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-6">
              <h2 className="bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-400 bg-clip-text text-4xl font-semibold leading-tight text-transparent">
                Get In Touch
              </h2>
              <p className="mt-4 max-w-sm text-sm text-neutral-400">
                Although I’m not currently looking for any new opportunities, my
                inbox is always open. Whether you have a question or just want
                to say hi, I’ll try my best to get back to you!
              </p>
            </div>
            <div className="col-span-6">
              <form className="w-full rounded-lg border border-neutral-800/50 bg-neutral-900/50">
                <div className="border-b border-neutral-800/50 px-8 py-4 text-sm">
                  <h4 className="font-semibold">Tell me how I can help</h4>
                </div>
                <div className="space-y-4 px-8 py-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-neutral-500">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Kevin Flynn"
                      className="rounded-lg border border-neutral-800/50 bg-white/5 px-4 py-2 text-sm placeholder:text-sm placeholder:text-white/30"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-neutral-500">Email</label>
                    <input
                      type="text"
                      placeholder="kevin@example.com"
                      className="rounded-lg border border-neutral-800/50 bg-white/5 px-4 py-2 text-sm placeholder:text-sm placeholder:text-white/30"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-neutral-500">Company</label>
                    <input
                      type="text"
                      placeholder="Example.inc"
                      className="rounded-lg border border-neutral-800/50 bg-white/5 px-4 py-2 text-sm placeholder:text-sm placeholder:text-white/30"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-neutral-500">
                      How can I help?
                    </label>
                    <textarea
                      placeholder="I'm interested in your services for my project and would love to learn more about..."
                      className="h-24 rounded-lg border border-neutral-800/50 bg-white/5 px-4 py-2 text-sm placeholder:text-sm placeholder:text-white/30"
                    />
                  </div>
                  <div className="relative !mt-6 flex items-center gap-4">
                    <p className="flex-1 text-xs text-neutral-500">
                      You can also email me at{" "}
                      <a
                        href="mailto:soorajkj46@gmail.com"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-neutral-50"
                      >
                        soorajkj46@gmail.com
                      </a>
                    </p>
                    <button className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-neutral-800 bg-neutral-800 px-4 py-2 font-family-roboto-pt-mono text-xs font-semibold uppercase text-white">
                      <span className="leading-none">Send message</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
