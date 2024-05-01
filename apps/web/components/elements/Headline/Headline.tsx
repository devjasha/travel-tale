import { FC, ElementType } from "react";
import styles from "./Headline.module.scss";

type HeadlineProps = {
  tag: ElementType;
  modifier: string;
  children: any;
};

const Headline: FC<HeadlineProps> = ({
  tag: Tag = "h1",
  modifier,
  children,
}) => {
  return <Tag className={styles[modifier]}>{children}</Tag>;
};

export default Headline;
