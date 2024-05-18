"use client";

import { FC } from "react";
import NavigationLink from "@/components/elements/Link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.scss";

type LinkProps = {
  label: string;
  url: string;
  icon: string;
};

type NavigationProps = {
  links: LinkProps[];
};

const Navigation: FC<NavigationProps> = ({ links }) => {
  const pathname = usePathname();
  return (
    <nav className={styles.navigation}>
      <ul className={styles.linkList}>
        {links.map((link: LinkProps, index: number) => (
          <li className={styles.listItem} key={index}>
            <NavigationLink
              url={link.url}
              icon={link.icon}
              isActive={pathname === link.url}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
