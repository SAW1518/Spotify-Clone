import styles from "./header.module.css";
export const Header = () => {
    return (
        <header className={styles.header} >
            <a aria-current='page' href="/">
                <img className={styles.logoImage} src='/public/spotifu-logo.png' width='112' height='32' alt="Logo Spotifu" />
            </a>
        </header>
    )
}