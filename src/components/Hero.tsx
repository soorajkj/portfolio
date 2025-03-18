import * as React from "react";
import Container from "@/components/core/container";

export default function Hero() {
  return (
    <section id="#home" className="relative overflow-hidden">
      <Container>
        <div className="flex flex-col py-24 pt-48">
          <div className="col-span-12">
            <div className="flex flex-col items-center gap-6">
              <h2 className="mx-auto w-full max-w-screen-md text-center font-family-bebas text-7xl font-bold leading-none text-neutral-900">
                I build high quality solutions for the internet.
              </h2>
              <p className="mx-auto w-full max-w-xl text-center text-lg">
                Specializing in crafting high-quality, user-centric digital
                experiences. I collaborate with clients to build scalable and
                accessible products that meet business goals while delivering
                exceptional results.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
