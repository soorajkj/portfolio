import React from "react";
import Link from "@components/core/link";

export default function Footer() {
  return (
    <footer className="hidden cf-relative">
      <div className="cf-container">
        <div className="cf-flex cf-flex-col">
          <div className="cf-flex cf-flex-col cf-items-center cf-justify-between cf-py-8 lg:cf-flex-row lg:cf-items-end">
            <div className="cf-static">
              <p className="cf-max-w-md cf-text-center cf-font-family-roboto-mono cf-text-sm cf-leading-normal lg:cf-text-left">
                Designed in <Link href={""}>Figma</Link> and coded in{" "}
                <Link href={""}>Visual Studio Code</Link>. Built with{" "}
                <Link href={""}>Next.js</Link> and{" "}
                <Link href={""}>Tailwind CSS</Link>, deployed with{" "}
                <Link href={""}>Vercel</Link>.
              </p>
            </div>
            <div className="cf-flex cf-items-center cf-gap-6 cf-whitespace-nowrap cf-font-family-roboto-mono cf-text-sm">
              <Link className="-cf-mx-1 cf-hidden cf-px-1 lg:cf-block" href="">
                +91-9946953968
              </Link>
              <Link className="-cf-mx-1 cf-hidden cf-px-1 lg:cf-block" href="">
                soorajkj46@gmail.com
              </Link>
            </div>
          </div>
        </div>
        <div className="cf-flex cf-flex-col cf-items-center cf-justify-between cf-py-4 cf-font-family-roboto-mono cf-text-sm lg:cf-flex-row">
          <p>© {new Date().getFullYear()} codefolio.inc</p>
        </div>
      </div>
    </footer>
  );
}
