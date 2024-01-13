import { Icon } from "@/component";
import styles from './navegationBar.module.css'

export const NavegationBar = () => {
    const { navegation , navegationPrev, navegationNext  } = styles
    return (
        <div className={navegation}>
            <button className={navegationPrev}  aria-label="Volver" title="Volver" >
                <Icon className="icon-arrowLeft" aria-hidden />
            </button>
            <button className={navegationNext} disabled aria-label="Avanzar" title="Avanzar">
                <Icon className="icon-arrowRight" aria-hidden />
            </button>
        </div>
    )
}