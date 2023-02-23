import styles from "./Card.module.css"
import Day from "./Day/Day"

export default function Card() {
    return (
        <>
        <div className={styles.card}>
            <Day />
            <Day />
            <Day />
            <Day />


        </div>
        </>
    )
}