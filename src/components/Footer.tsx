import * as React from "react";
import Container from "@/components/core/container";
import SocialMedias from "@/components/SocialMedias";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-zinc-900">
      <Container>
        <div className="py-0">
          <div className="flex flex-col items-center justify-between py-8 lg:flex-row lg:items-end">
            <div className="relative flex">
              <p className="hidden max-w-sm lg:block">
                Better Stack lets you see inside any stack, debug any issue, and
                resolve any incident.
              </p>
            </div>
            <div className="flex items-center gap-6 whitespace-nowrap">
              <a className="" href="tel:+1 (201) 500-2007">
                +1 (201) 500-2007
              </a>
              <a className="" href="mailto:hello@betterstack.com">
                hello@betterstack.com
              </a>
              <SocialMedias />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between border-zinc-300/10 py-4 text-xs lg:flex-row lg:border-t">
            <div className="flex items-center gap-6 whitespace-nowrap dark:text-zinc-300">
              <a href="">Terms of Use</a>
              <a href="">Privacy Policy</a>
              <a href="">GDPR</a>
              <a href="">System status</a>
            </div>
            <div className="flex items-center text-zinc-300">
              <p>© 2024 Better Stack, Inc.</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
