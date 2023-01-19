import styles from "./../../../styles/Button.module.css";

interface ButtonProps {
  text: string;
  className?: string;
  disabled?: boolean;
  small?: boolean;
  isError?: boolean
}

export function Button(props: ButtonProps) {
  return (
    <button
      className={`${props.className} ${styles.clear} ${styles.button} ${
        props.disabled ? styles.disabled : styles.buttonEffects
      } ${props.small && styles.small}`}
    >
      {props.text}
    </button>
  );
}
