import { Link } from "@/component";

import styles from "./playList.module.css";
export type linksType = {
    href: string,
    value: string
}

interface PlayListNavegationProps {
    id: string
    title: string
    links: linksType[]
}

export const PlayList = ({ id, title, links }: PlayListNavegationProps) => {

    const { list, listTitle, listConetent, listLink, ellipsis } = styles

    return (
        <nav className={list} aria-labelledby={id}>
            <h2 className={listTitle} id={id} >{title}</h2>
            <ul className={listConetent} >
                {links.map((item) => (
                    <li key={item.value}>
                        <span className={ellipsis} >
                            <Link extraClass={listLink}> {item.value} </Link>
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}