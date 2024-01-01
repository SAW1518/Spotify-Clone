import { Link } from "@/component"
import styles from "./menu.module.css";

interface MenuProps {
    icon: 'icon-home' | 'icon-search' | 'icon-creditCard'
    iconActive?: 'icon-homeActive' | 'icon-searchActive'| "icon-creditCard"
    isActive?: boolean,
    text: string
}

export const Menu = ({ isActive = false, icon, iconActive, text }: MenuProps) => {

    const { menuList, menuItem, menuItemIsActive } = styles
    return (

        <ul className={menuList}>
            <li className={menuItem}>
                <Link extraClass={isActive ? menuItemIsActive : ''} href="/" aria-current={isActive ? 'page' : undefined} >
                    <i className={isActive ? iconActive : icon} aria-hidden ></i>
                    <samp>{text}</samp>
                </Link>
            </li>
        </ul>

    )
}