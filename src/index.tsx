import { ButtonIcon, Header, PlayListNavegation } from "./component";


const yourLibrary = [
  { href: '#', value: 'Creada para ti' },
  { href: '#', value: 'Escuchado recientemente' },
  { href: '#', value: 'Tus Me Gusta' }
]

const yourPlayList = [
  { href: '#', value: 'Lo mejor de los mejor' },
  { href: '#', value: 'Naruto al 100% para progr…' },
  { href: '#', value: 'Para cantar en la ducha' },
  { href: '#', value: 'Sin parar' },
  { href: '#', value: 'Naruto openings' },
  { href: '#', value: 'Boku no pico' },
  { href: '#', value: 'This is Pokémon' },
  { href: '#', value: 'Más populares de la semana' },
  { href: '#', value: 'Mis pistas de shazam' },
  { href: '#', value: 'Audio Library' },
  { href: '#', value: 'Amor y otras' },
  { href: '#', value: 'Latin' },
  { href: '#', value: 'Pokemon' },
  { href: '#', value: 'Para cantar' },
  { href: '#', value: 'Yui' },
]


export function App() {

  return (
    <>
      <Header />
      <PlayListNavegation id='library-navigation' title="Tu Bibloteca" links={yourLibrary} />
      <PlayListNavegation id='library-play-list' title="Playlists" links={yourPlayList} />
      <section>
        <ButtonIcon iconName="icon-play" area="Play" type="is-white" />
        <ButtonIcon iconName="icon-play" area="Play" type="is-primary" />
      </section>
    </>
  )
}


