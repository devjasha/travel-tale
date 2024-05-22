import { FC } from "react";
import styles from "./Input.module.scss";

type InputProps = {
    type: string;
    name: string;
    placeholder: string;
    label: string;
};

const InputField: FC<InputProps> = ({
    type = "text",
    name,
    placeholder,
    label,
}) => {
    return (
        <div className={styles.input}>
            <label className={styles.inputLabel} htmlFor={name}>{label}</label>
            <input className={styles.inputField} type={type} name={name} placeholder={placeholder}/>
        </div>
    );
};

export default InputField;