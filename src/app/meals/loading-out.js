import styles from './loading.module.css'

export default function HomeLoadingPage() {
    return (
        <p className={styles.loading}>
            Loading meals ...
        </p>
    )
}