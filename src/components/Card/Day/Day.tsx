import styles from "./Day.module.css"

interface props {
    day: string
}

export default function Day(props: props) {
    return (
        <>
            <div className={styles.day}><p>{String(props.day)}</p></div>

        </>
    )
}