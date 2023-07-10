
//import { v4 as uuidv4 } from 'uuid';
import data from "./data.json"

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
    console.log(tagList)
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

/*


export function updateSongData(song: WeakSong) {
    let _data: WeakSong[] = data;

    console.log(song.id)

    if (song.id) {
        _data = data.filter((_song) => _song.id !== song.id);
        if (_data.length == data.length) {
            song.id = uuidv4();
        }
    }
    else
        song.id = uuidv4();

    _data.unshift(song)

    const str_data = JSON.stringify(_data)
    fs.writeFileSync(path.join(process.cwd(), 'src/lib/data.json'), str_data)
    revalidatePath("/")
    return song.id
}


export function deleteSong(id: string) {

    const _data = data.filter((song) => song.id !== id);

    if (_data.length == data.length)
        return false

    const str_data = JSON.stringify(_data)
    fs.writeFileSync(path.join(process.cwd(), 'src/lib/data.json'), str_data)
    revalidatePath("/")
    return true
}


export function perviousNextSongTitle(currentSongId: string): [SongTitle | undefined, SongTitle | undefined] {
    for (let i = 0; i < songsTitle.length; i++) {
        if (songsTitle[i].id === currentSongId) {
            let prvsSongTitle;
            let nextSongTitle;
            if (i != 0)
                prvsSongTitle = songsTitle[i - 1]
            if (i != songsTitle.length - 1)
                nextSongTitle = songsTitle[i + 1]
            return [prvsSongTitle, nextSongTitle]
        }
    }
    return [undefined, undefined]
}

*/