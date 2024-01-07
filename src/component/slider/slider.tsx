import styles from "./slider.module.css";

export const Slider = () => {
    const { slider, siderProgress, siderButton } = styles
    
    return (
        <div className={slider} >
            <div className={siderProgress} >
                <button className={siderButton} aria-label='Controlar progreso'></button>
            </div>
        </div>
    )
}
