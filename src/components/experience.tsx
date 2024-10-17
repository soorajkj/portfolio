import { experience } from "@constants/experience";
import { Icon } from "@components/core/icon";

export default function Experience() {
  return (
    <section className="cf-relative cf-pb-24 cf-pt-24">
      <div className="cf-container">
        {experience.map((_, i) => (
          <div key={i} className="lg:cf-flex">
            <div className="cf-relative cf-z-10 lg:cf-w-3/12 lg:cf-pb-20 lg:cf-ps-0 lg:cf-text-end">
              <div className="lg:cf-sticky lg:cf-end-0 lg:cf-top-24">
                <div className="-cf-ms-7 cf-flex cf-items-center cf-gap-x-3 cf-rounded-full cf-border cf-border-transparent cf-px-3.5 lg:-cf-me-7">
                  <div className="cf-order-2 cf-mb-2 cf-grow lg:cf-order-1 lg:cf-mb-0">
                    <span className="cf-whitespace-nowrap cf-rounded cf-border cf-px-2 cf-py-1 cf-text-xs cf-font-semibold cf-text-white dark:cf-border-violet-800/40 dark:cf-bg-violet-400/5 dark:cf-text-violet-600">
                      {_.period}
                    </span>
                  </div>
                  <div className="cf-order-1 cf-flex cf-h-7 cf-w-7 cf-flex-shrink-0 cf-items-center cf-justify-center cf-rounded-full cf-border cf-border-zinc-200 cf-bg-white cf-shadow-sm cf-grayscale lg:cf-order-2 dark:cf-border-zinc-900 dark:cf-bg-zinc-900/80">
                    <Icon icon={"tailwindCss"} width={16} height={16} />
                  </div>
                </div>
              </div>
            </div>
            <div className="cf-relative cf-pb-12 cf-ps-7 lg:cf-w-9/12 lg:cf-pb-20 lg:cf-ps-12">
              <div className="-me-px cf-absolute cf-bottom-0 cf-start-0 cf-top-0 cf-w-px cf-bg-zinc-200 lg:cf-end-0 lg:-cf-ms-px lg:cf-me-0 dark:cf-bg-zinc-900" />
              <h3 className="cf-mb-3 cf-text-lg cf-font-semibold cf-text-white">
                {_.role}
              </h3>
              <h4 className="cf-mb-8 cf-cursor-pointer cf-font-medium cf-text-zinc-400">
                <span>{_.organisation}</span> | <span>{_.location}</span>
              </h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
                non voluptatibus maxime. Nihil modi culpa consequuntur, dolor
                ipsum laborum saepe eveniet quia odit nam asperiores quod at
                cupiditate, corporis deserunt temporibus. Voluptas enim vel
                recusandae rem repudiandae atque natus officia ipsa quidem quam
                harum, magnam, maxime explicabo dolore quia unde similique
                error. Provident assumenda temporibus soluta quasi ducimus qui
                tenetur, magnam, facere tempore corporis sapiente expedita quo
                perspiciatis inventore quidem suscipit ab! Saepe alias a est
                totam amet modi maxime iusto quisquam eum necessitatibus? Velit
                alias nulla reiciendis consectetur sint itaque facere ad
                assumenda aut magni iure similique aperiam dolore dicta minima
                quasi debitis harum ipsum consequuntur tempore, amet laborum
                quos inventore? Ab consequatur, numquam necessitatibus
                voluptates incidunt iste dolorum dolores facere culpa esse optio
                facilis quod maxime voluptas illo aliquam neque autem,
                praesentium hic aperiam cum obcaecati velit! Fuga sapiente
                consectetur alias magnam pariatur. Voluptates, delectus! Fugiat
                enim molestiae, error culpa modi facere laboriosam quasi cumque
                nam quo quam repudiandae blanditiis libero harum necessitatibus
                cupiditate earum eveniet accusantium ipsa odio voluptates
                repellat animi doloribus corrupti! Amet quis inventore eaque
                recusandae voluptatem totam, dolorem, corporis nihil non
                aspernatur perspiciatis ipsam atque temporibus numquam illo
                nulla perferendis reprehenderit. Saepe, quod eos.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
