import styles from './playListSmall.module.css'

export const PlayListSmall = () => {
    const { playListSmall, playListSmallCover, playListSmallTitle, playListSmallDecrition } = styles

    return (
        <div className={playListSmall}>
            <img src='/src/images/anime-hits.png' />
        </div>
    )
}