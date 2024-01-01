import styles from "./header.module.css";
export const   Header = () => {

    const { header, logoImage } = styles

    return (
        <header className={header} >
            <a aria-current='page' href="/">
                <img className={logoImage} src='/public/spotifu-logo.png' width='112' height='32' alt="Logo Spotifu" />
            </a>
        </header>
    )
}