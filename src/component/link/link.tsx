import React from 'react'
import styles from './link.module.css'

interface LinkProps {
    children: React.ReactNode 
    extraClass?: string
}
export const Link = (props: LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>)  => (
    <a className={`${styles.link} ${props.extraClass} `} {...props}>{props.children}</a>
)