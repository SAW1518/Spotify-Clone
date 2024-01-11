
import { ButtonIcon } from '@/component'
import styles from './playListLarge.module.css'

export const PlayListLarge = () => {
    const { playListLarge, playListLargeCover, playListLargeTitle, playListLargeDecrition } = styles

    return (
        <div className={playListLarge} >
            <div className={playListLargeCover} >
                <img src='/src/images/anime-hits.png' width={150} height={150} alt='cover anime hits' />
                <ButtonIcon iconName='icon-play' area='Play' type='is-primary' />
            </div>

            <h3 className={playListLargeTitle} >Anime Hist</h3>
            <h4 className={playListLargeDecrition} > Naruto, Your Name, Werthing With Your </h4>
        </div>
    )
}