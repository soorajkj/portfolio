import Container from "@/components/core/container";

export default function Abstract() {
  return (
    <Container className="pointer-events-auto absolute inset-0 -z-10 select-none">
      <div className="absolute -left-8 top-16 flex flex-col gap-10">
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className="relative min-w-3 -rotate-90 text-center text-xs leading-none text-gray-300 before:absolute before:-bottom-1 before:left-1/2 before:h-1 before:w-px before:bg-neutral-300"
          >
            {i * 50}
          </div>
        ))}
      </div>
      <div className="absolute -right-8 top-16 flex flex-col gap-10">
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className="relative min-w-3 rotate-90 text-center text-xs leading-none text-gray-300 before:absolute before:-bottom-1 before:left-1/2 before:h-1 before:w-px before:bg-neutral-300"
          >
            {i * 50}
          </div>
        ))}
      </div>
      <div className="absolute -left-0 h-full w-px bg-neutral-200" />
      <div className="absolute -right-0 h-full w-px bg-neutral-200" />
    </Container>
  );
}
