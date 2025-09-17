import Link from "next/link";
import { Button } from "~/components/ui/button";

const legalLinks: Array<{ href: string; label: string }> = [
  {
    href: "/",
    label: "Terms of Service",
  },
  {
    href: "/",
    label: "Privacy Policy",
  },
];
const copyright = {
  text: `Copyright © ${new Date().getFullYear()} Foundly Labs`,
  license: "All rights reserved.",
};

export const Footer = () => {
  return (
    <footer className="w-full">
      <div className="mt-6 border-t pt-6 md:mt-4 md:pt-8 lg:grid lg:grid-cols-10">
        <div className="mt-6 lg:col-[4/11] lg:mt-0">
          <ul className="-mx-3 -my-1 flex list-none flex-wrap lg:justify-end">
            {legalLinks.map((link, i) => (
              <li key={i} className="mx-3 my-1 shrink-0">
                <a
                  href={link.href}
                  className="text-muted-foreground text-sm underline-offset-4 hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-muted-foreground font-tomorrow mt-6 text-sm leading-6 whitespace-nowrap lg:col-[1/4] lg:row-[1/3] lg:mt-0">
          <div>{copyright.text}</div>
          {copyright.license && <div>{copyright.license}</div>}
        </div>
      </div>
    </footer>
  );
};
