import styles from "./../../styles/Header.module.css";

interface NavElementsProps {
    href: string,
    title: string
}

export function NavElement(props: NavElementsProps) {
    return (
        <li className={styles.navElement}>
            <a href={props.href}><p className="p1">{props.title}</p></a>
          </li>
    )
}