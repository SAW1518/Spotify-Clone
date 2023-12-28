import styles from './buttonIcon.module.css'

interface ButtonIconProps {
    iconName: string
    area: string
    type?: 'is-white' | 'is-primary'
}

export const ButtonIcon = ({ area, iconName, type }: ButtonIconProps) => {

    const fixPlayIcon: string = iconName === 'icon-play' ? styles.fixCenterIcon : ''
    const addType: string = type ? styles[type] : ''

    return (
        <button className={`${styles.buttonIcon} ${addType}`} aria-label={area} title={area} >
            <i className={`${iconName} ${fixPlayIcon}`} aria-hidden ></i>
        </button>
    )
}
