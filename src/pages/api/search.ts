
import type { APIRoute } from 'astro';
import {matchSearch} from "../../lib/bhajan"

export const get: APIRoute = async function get ({ request}){
    const url = new URL(request.url)
    const params = new URLSearchParams(url.search)

    const query = params.get("query")
    const limit = Number(params.get("limit"))||20

  return {
    
    body: JSON.stringify((query?matchSearch(query):[]).splice(0,limit)),
  };
}

