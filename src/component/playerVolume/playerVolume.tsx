import { ButtonIcon, Slider } from "@/component";

import styles from './playerVolume.module.css'

export const PlayerVolume = () => {

    const {  playerVolume, playerVolumeSlider, playerControl } = styles
    return (
        <div className={playerVolume}>
            <ButtonIcon iconName="icon-volumeUp" iconRole='presentation' iconArea='Volumen Alto' area='Silenciar' iconId='Volumen Icon' overwriteButtonClassName={playerControl} />
            <div className={playerVolumeSlider} >
                <Slider />
            </div>
        </div>
    )
}