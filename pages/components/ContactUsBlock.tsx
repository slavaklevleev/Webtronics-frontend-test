import { Button } from "./Button";
import styles from "./../../styles/ContactUsBlock.module.css";
import { Input } from "./Input";

export function ContactUsBlock() {
  return (
    <section>
      <div className={styles.borderWrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.flexWrapper}>
          <h2 className={styles.header}>Contact Us</h2>
          <p className="p1">
            Do you have any kind of help please contact with us.
          </p>
          <div className={styles.inputGroup}>
            <Input placeholder="Name" type="text"/>
            <Input placeholder="Phone" type="tel"/>
            <Input placeholder="E-mail" type="email"/>
          </div>
          <Button text="Send" />
        </div>
      </div>
    </div>
    </section>
    
  );
}
