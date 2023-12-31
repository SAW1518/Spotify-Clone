import { Header, Menu, PlayList } from "@/component";

import styles from "./sidebar.module.css";

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
    { href: '#', value: 'Más populares de la semana en mexico y el mundo' },
    { href: '#', value: 'Mis pistas de shazam' },
    { href: '#', value: 'Audio Library' },
    { href: '#', value: 'Amor y otras' },
    { href: '#', value: 'Latin' },
    { href: '#', value: 'Pokemon' },
    { href: '#', value: 'Para cantar' },
    { href: '#', value: 'Yui' },
]


export const Sidebar = () => {
    const { sidebar } = styles
    return (
        <aside className={sidebar} >
            <Header />
            <nav aria-label="Principal">
                <Menu icon="icon-home" iconActive='icon-homeActive' isActive text="Inicio" />
                <Menu icon="icon-search" iconActive='icon-searchActive' text="Buscar" />
                <Menu icon="icon-creditCard" iconActive='icon-creditCard' text="Premium" />
            </nav >

            <PlayList id='library-navigation' title="Tu Bibloteca" links={yourLibrary} />
            <PlayList id='library-play-list' title="Playlists" links={yourPlayList} />
        </aside>
    )

}
