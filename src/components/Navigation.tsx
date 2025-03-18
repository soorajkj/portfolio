import { Link } from "react-scroll";
import { ReactScrollLinkProps } from "react-scroll/modules/components/Link";

const sections = [
  {
    to: "#home",
    label: "Home",
  },
  {
    to: "#about",
    label: "About",
  },
  {
    to: "#experience",
    label: "Experience",
  },
  {
    to: "#projects",
    label: "Projects",
  },
  {
    to: "#contact",
    label: "Contact",
  },
];

type LinkOptions = Omit<ReactScrollLinkProps, "to"> & {};

const options: LinkOptions = {
  smooth: true,
  offset: -96,
  spy: true,
  duration: 1000,
};

export default function Navigation() {
  return (
    <nav className="relative">
      <ul className="flex items-center gap-6">
        {sections.map((_, i) => (
          <li key={i}>
            <Link to={_.to} {...options}>
              {_.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
