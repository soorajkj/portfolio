import React from "react";

export default function SectionsTemp() {
  return (
    <React.Fragment>
      {["about", "experience", "projects", "blogs", "contact"].map((_, i) => (
        <section key={i} id={"#" + _}>
          <div className="container mx-auto w-full max-w-screen-xl px-4 lg:px-16">
            <div className="h-full"></div>
          </div>
        </section>
      ))}
    </React.Fragment>
  );
}
