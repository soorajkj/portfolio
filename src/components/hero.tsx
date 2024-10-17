import Button from "@components/core/button";

export default function Hero() {
  return (
    <section className="cf-relative cf-bg-cover cf-bg-center cf-bg-no-repeat cf-pb-24 cf-pt-24">
      <div className="cf-conatiner">
        <div className="cf-flex cf-h-full cf-min-h-96 cf-flex-col cf-items-center cf-justify-center">
          <h1 className="cf-mx-auto cf-mb-4 cf-text-center cf-font-family-bebas-neue cf-text-7xl cf-text-white">
            I build things for the Web
          </h1>
          <p className="cf-mx-auto cf-max-w-xl cf-text-center cf-font-medium">
            I&apos;m a software engineer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I&apos;m focused on building accessible, human-centered products at
            Stratagile.
          </p>
          <div className="cf-mt-8 cf-flex cf-flex-wrap cf-justify-center cf-gap-4">
            <Button variant="primary">Download Resume</Button>
            <Button variant="primary">Download Resume</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
