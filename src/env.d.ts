/// <reference path="../.astro/types.d.ts" />
///  <reference types="@astrojs/image/client" />


type SongEntry = {
    id: string;
    collection: string;
    data: {
        kannada_title: string;
        english_title: string;
        kannada: string;
        english?: string | undefined;
        meta?: string | undefined;
        tags?: string[] | undefined;
        tag?: string[] | undefined;
        media?: string | undefined;
    }
}

type SongResponse ={
    kannada_title : string,
    english_title:string,
    slug:string
}