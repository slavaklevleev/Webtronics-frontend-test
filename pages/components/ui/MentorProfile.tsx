import styles from './../../../styles/MentorProfile.module.css'
import Image from "next/image";

interface MentorProfileProps {
    img: string,
    name: string,
    description: string
}

export function MentorProfile(props: MentorProfileProps) {
    return (
        <div className={styles.wrapper}>
            <Image className={styles.photo} src={props.img} alt={props.name} width={184} height={184}/>
            <h4 className={styles.name}>{props.name}</h4>
            <p className="p2">{props.description}</p>
        </div>
    )
}