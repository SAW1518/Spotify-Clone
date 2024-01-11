import styles from "./nowPlay.module.css";
import { ButtonIcon, Link } from '@/component';

export const NowPlaying = () => {

    const { nowPlay, nowPlayDetails, nowPlayDescription, nowPlayActions, nowPlayTitle, nowPlayCover } = styles
    return (
        <div className={nowPlay}>
            <div className={nowPlayCover} >
                <img src="/src/images/grand-escape.png" width={56} height={56} alt="Portal Grand Escape (feat. Tokio Miura) of RADWIMPS, Toko Miura" />
            </div>
            <div className={nowPlayDetails}>
                <div className={nowPlayDescription} >
                    <Link href="#song" extraClass={nowPlayTitle} >Grand Escape (feat. Tokio Miura) </Link>
                    <Link href="RADWIMPS" >RADWIMPS, Toko Miura</Link>
                </div>
                <div className={nowPlayActions}>
                    <ButtonIcon iconName="icon-heart" iconRole='switch' area='Guardar en tu biblioteca' />
                </div>
            </div>

        </div>
    )
}