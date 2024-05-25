import { FC } from "react";
import styles from "@/components/elements/Button/Button.module.scss";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  text: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({
  type,
  text,
  onClick,
}) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>{text}</button>
  )
}

export default Button