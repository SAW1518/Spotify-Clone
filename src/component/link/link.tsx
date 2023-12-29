import styles from './link.module.css'

interface LinkProps {
    href: string,
    value: string
    className?: string
}

export const Link = ({ href, value, className }: LinkProps) => (
    <a className={`${styles.link} ${className} `} href={href}>{value}</a>
)