import styles from "./../../styles/Input.module.css";

interface ButtonProps {
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  type: string;
  errorMessage?: string
  register?: any;
}

export function Input(props: ButtonProps) {
  return (
    <div>
      <div className={`${styles.borderWrapper} ${props.disabled && styles.borderDisabledWrapper} ${!!props.errorMessage && styles.borderErrorWrapper} `}>
        <input
          className={`${props.className} ${styles.clear} ${styles.input} ${
            props.disabled ? styles.disabled : styles.buttonEffects
          } ${!!props.errorMessage && styles.error}`}
          placeholder={props.placeholder}
          disabled={props.disabled}
          {...props.register}
        />
      </div>
      {!!props.errorMessage && <p className={`p1 ${styles.errorMessage}`}>{props.errorMessage}</p>}
    </div>
  );
}
