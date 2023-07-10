/// <reference types="astro/client" />


type SongTitle = {
    id: string
    english_title?: string,
    kannada_title: string
}

type Song = SongTitle & {
     tags?: string[],
    kannada: string[][] | [],
    english?: string[][] | [],
    media?: string,
    meta?: string
}

type EditSong = {
    id?: string
    english_title: string,
    kannada_title: string,
    tags: string[],
    kannada: string,
    english?: string,
    media?: string,
    meta?: string
}

type WeakSong = {
    id?: string
    english_title: string,
    kannada_title: string,
    tags?: string[],
    kannada: string[][],
    english?: string[][],
    media?: string,
    meta?: string
}
