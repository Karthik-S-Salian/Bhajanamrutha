
import type { APIRoute } from 'astro';
import { matchSearch,slugify } from '@lib/utils';

import { getCollection } from 'astro:content';

export const GET:APIRoute = async ({request})=>{
    const bhajanEntries = await getCollection("bhajan");
    const url = new URL(request.url)
    const params = new URLSearchParams(url.search)
    const query = params.get("query")
    const limit = Number(params.get("limit"))||20

    const matchedSongs =(query?matchSearch(query,bhajanEntries):[]).splice(0,limit)

    const result:SongResponse[] = matchedSongs.map(song=>{
      return {
        "kannada_title":song.data.kannada_title,
        "english_title":song.data.english_title,
        "slug":slugify(song.data.kannada_title)
      }
    })

  return new Response(JSON.stringify(result));
}
