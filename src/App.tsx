import { PlayerControls, Sidebar, PlayerVolume, NowPlaying, PlayListLarge } from "@/component";
import styles from "./App.module.css";

export function App() {
  const { player, playerNowPlaying, playerPlayerControls, playerPlayerVolume } = styles
  return (
    <>
      <PlayListLarge />
      <Sidebar />
      {/* Player */}
      <footer className={player} >
        <div className={playerNowPlaying} >
          <NowPlaying />
        </div>
        <div className={playerPlayerControls} >
          <PlayerControls />
        </div>
        <div className={playerPlayerVolume}>
          <PlayerVolume />
        </div>
      </footer>
    </>
  )
}


