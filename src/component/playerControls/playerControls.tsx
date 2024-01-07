import { ButtonIcon, Slider } from '@/component'
import styles from './playerControls.module.css'

export const PlayerControls = () => {
    const { playerControls, playerControlsButtons, playerPlayback, playerPlaybackProgressTime, playerPlaybackSlider} = styles
    return (
        <div className={playerControls}>
            <div className={playerControlsButtons} aria-label='control de Reproducion' >
                <ButtonIcon iconName="icon-prev" area="Anteroir" />
                <ButtonIcon iconName="icon-play" area="Play" type="is-white" />
                <ButtonIcon iconName="icon-next" area="Siguiente" />
            </div>
            <div className={playerPlayback}>
                <span className={playerPlaybackProgressTime} >01: 40</span>
                <div className={playerPlaybackSlider} >
                    <Slider />
                </div>
                <span className={playerPlaybackProgressTime}>03: 00</span>
            </div>
        </div>
    )
}