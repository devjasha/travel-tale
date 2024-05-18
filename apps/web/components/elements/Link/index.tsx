"use client";

import { FC } from "react";
import Link from "next/link";
import DynamicIcon from "@/components/elements/Icon";
import styles from "./Link.module.scss";

type NavigationLinkProps = {
  url: string;
  icon: string;
  isActive?: boolean;
};

const NavigationLink: FC<NavigationLinkProps> = ({ url, icon, isActive }) => {
  return (
    <Link
      href={url}
      className={styles.link}
      style={isActive === true ? { color: "#99BC85" } : { color: "#D4E7C5" }}
    >
      <DynamicIcon iconFamily="fi" icon={icon} />
    </Link>
  );
};

export default NavigationLink;
