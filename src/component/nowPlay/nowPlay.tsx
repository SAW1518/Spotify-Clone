import styles from "./nowPlay.module.css";
import { ButtonIcon, Link } from '@/component';

export const NowPlaying = () => {

    const { nowPlay, nowPlayDetails, nowPlayDescription, nowPlayActions, nowPlayTitle, nowPlayArtist } = styles
    return (
        <div className={nowPlay} >
            <img src="/src/images/grand-escape.png" width={56} height={56} alt="Portal Grand Escape (feat. Tokio Miura) of RADWIMPS, Toko Miura" />
            <div className={nowPlayDetails}>
                <div className={nowPlayDescription} >
                    <a href="#song" className={nowPlayTitle} >Grand Escape (feat. Tokio Miura)</a>
                    <a href="RADWIMPS" className={nowPlayArtist}>RADWIMPS, Toko Miura</a>
                </div>
                <div className={nowPlayActions}>
                    <ButtonIcon iconName="icon-heart" iconRole='switch' area='Gurdar en tu biblioteca' />
                </div>
            </div>

        </div>
    )
}