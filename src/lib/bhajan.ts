import _data from "./data.json"

const data :Song[] = _data as Song[]

const regex = /[!"`'#%&,.:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]/gi;

function _getSongsTitle(): SongTitle[] {
    return data.map(({id,kannada_title,english_title}) =>({id,kannada_title,english_title}))
}

function _getAllTags(): string[] {
    const tags = new Set(data.map((song) => song.tags).flat());

    let tagList:string[] = [];

    for (const tag of Array.from(tags)) {
        const slug =tag?.replaceAll(regex, " ");
        if (slug) 
            tagList.push(slug)
        }
    return tagList;

}

export function getSongWithGivenTag(tag:string|undefined):Song[]{
    if (!tag)
        return []

    const tagMatchPattern = new RegExp(".*" + tag + ".*", "i");

    return data.filter((song) => {
        if (song.tags)
            for (const c of song.tags)
                if (tagMatchPattern.test(c)) return true;
        });
}


export function getSong(id: string): Song | undefined {
    for (const song of data) {
        if (song.id === id) {
            return song
        }
    }
}


export const songTags = _getAllTags()
export const songsTitle = _getSongsTitle()

export function matchSearch(searchString: string): SongTitle[] {
    
    if (!searchString || !data || !searchString.trim())
        return []

    searchString = searchString.trim()
    const maxMatchDistance = 3
    const pattern = new RegExp(`.*` + searchString.replace(/[^A-Za-z]/g, '').split('').join(`.{0,${maxMatchDistance}}`) + '.*', 'i');

    if(isKannadaCharacter(searchString[0]))
         return songsTitle.filter((element) => (element.kannada_title && pattern.test(element.kannada_title)))

    return  songsTitle.filter((element) => (element.english_title && pattern.test(element.english_title)))

}

function isKannadaCharacter(character:string): boolean {
  // Check if the character falls within the Kannada Unicode block
  return character >= '\u0C80' && character <= '\u0CFF';
}
