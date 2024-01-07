import styles from './buttonIcon.module.css'

interface ButtonIconProps {

    iconName: string,
    overwriteButtonClassName?: string,
    area?: string
    type?: 'is-white' | 'is-primary',
    iconId?: string,
    iconRole?: React.AriaRole,
    iconArea?: string,
}

export const ButtonIcon = ({ area, iconName, type, iconRole, iconArea, iconId, overwriteButtonClassName }: ButtonIconProps) => {
    const { buttonIcon, fixCenterIcon } = styles

    const fixPlayIcon: string = iconName === 'icon-play' ? fixCenterIcon : ''
    const addType: string = type ? styles[type] : ''

    const buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {
        className: overwriteButtonClassName ? overwriteButtonClassName : `${buttonIcon} ${addType}`,
        'aria-label': area,
        title: area,
        'aria-describedby': iconId
    }
    
    const iconProps: React.HTMLAttributes<HTMLElement> = {
        id: iconId,
        className: `${iconName} ${fixPlayIcon}`,
        'aria-hidden': !!iconArea,
        'aria-label': iconArea,
        role: iconRole
    }

    return (
        <button {...buttonProps}>
            <i {...iconProps} ></i>
        </button>
    )
}
