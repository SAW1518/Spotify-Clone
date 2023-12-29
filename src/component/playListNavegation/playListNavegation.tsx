import { Link } from "../index";

import styles from "./playListNavegation.module.css";
export type linksType = {
    href: string,
    value: string
}

interface PlayListNavegationProps {
    id: string
    title: string
    links: linksType[]
}

export const PlayListNavegation = ({ id, title, links }: PlayListNavegationProps) => {
    return (
        <nav className={styles.list} aria-labelledby={id}>
            <h2 className={styles.listTitle} id={id} >{title}</h2>
            <ul className={styles.listConetent} >
                {links.map((item) => (
                    <li className={styles.item} key={item.value}>
                        <Link className={styles.listLink} {...item} />
                    </li>
                ))}
            </ul>
        </nav>
    )
}