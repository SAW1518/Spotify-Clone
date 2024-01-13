import { PlayerControls, Sidebar, PlayerVolume, NowPlaying, PlayListLarge, PlayListSmall, Icon, NavegationBar } from "@/component";
import styles from "./App.module.css";

export function App() {
  const { player, playerNowPlaying, playerPlayerControls, playerPlayerVolume, playListContainer,
    playListContainerTop, playListContainerTitle, playListContainerHorizontal, search } = styles
  return (
    <>
      {/* TODO create a Layout componet */}
      <NavegationBar />
      <form className={search} role="search" aria-label="Buscar por Artista, canciones o podcast" >
        <Icon className='icon-search' />
        <input className="" type="search" placeholder="Buscar por Artista, canciones o podcast" />
      </form>
      <section className={playListContainer} aria-labelledby="region1" >
        <div className={playListContainerTop}>
          <h2 className={playListContainerTitle} id="region1" >Bunas noches</h2>
          <NavegationBar />
        </div>
        <div className={playListContainerHorizontal} >
          <PlayListSmall />
          <PlayListSmall />
          <PlayListSmall />
          <PlayListSmall />
          <PlayListSmall />
          <PlayListSmall />
          <PlayListSmall />
          <PlayListSmall />
          <PlayListSmall />
          <PlayListSmall />
        </div>
      </section>

      <section className={playListContainer} aria-labelledby="region2" >
        <div className={playListContainerTop}>
          <h2 className={playListContainerTitle} id="region2">Escuchado recientemente</h2>
          <NavegationBar />
        </div>
        <div className={playListContainerHorizontal} >
          <PlayListLarge />
          <PlayListLarge />
          <PlayListLarge />
          <PlayListLarge />
          <PlayListLarge />
          <PlayListLarge />
          <PlayListLarge />
          <PlayListLarge />
          <PlayListLarge />
          <PlayListLarge />
          <PlayListLarge />
        </div>
      </section>

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


