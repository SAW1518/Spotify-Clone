import { ButtonIcon } from "@/component";
import styles from './playListSmall.module.css'

export const PlayListSmall = () => {
    const { playListSmall, playListSmallCover, playListDetails, playListSmallTitle, playListSmallControll } = styles

    return (
        <div className={playListSmall}>
            <div className={playListSmallCover} >
                <img src='/src/images/anime-hits.png' alt='cover anime hits' width={76} height={76} />
            </div>
            <div className={playListDetails} >
                <h3 className={playListSmallTitle} >Naruro OP and endings</h3>
                <div className={playListSmallControll} >
                    <ButtonIcon iconName='icon-play' area='Play' type='is-primary' />
                </div>

            </div>
        </div>
    )
}