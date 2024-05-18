import { FC } from "react";
import styles from "./Input.module.scss";

type InputProps = {
    inputType: string;
    inputName: string;
    inputPlaceholder: string;
    children: any;
};

const InputField: FC<InputProps> = ({
    inputType = "text",
    inputName,
    inputPlaceholder,
    children,
}) => {
    return (
        <div className={styles.input}>
            <label className={styles.inputLabel} htmlFor={inputName}>{children}</label>
            <input className={styles.inputField} type={inputType} name={inputName} placeholder={inputPlaceholder}/>
        </div>
    );
};

export default InputField;