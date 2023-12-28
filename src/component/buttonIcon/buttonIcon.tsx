import styles from './buttonIcon.module.css'

interface ButtonIconProps {
    iconName: string
    area: string
    type: 'is-white' | 'is-primary' 
}

export const ButtonIcon = ({ area, iconName, type }: ButtonIconProps) => (
    <button className={`${styles.buttonIcon} ${styles[type]}`} aria-label={area} title={area} >
        <i className={iconName} aria-hidden ></i>
    </button>
)

