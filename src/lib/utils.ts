import { BASE_URL } from "src/config";

const maxMatchDistance = 3;

// export function slugify(text: string) {
//   return text
//     .toString()
//     .toLowerCase()
//     .replace(/\s+/g, '-')
//     .replace(/[^\w-]+/g, '')
//     .replace(/--+/g, '-')
//     .replace(/^-+/, '')
//     .replace(/-+$/, '');
// }

export function slugify(text:string){
  return text.split(" ").reduce((p,c)=>`${p}-${c}`)
}

export function formatDate(date: string | number | Date) {
  return new Date(date).toLocaleDateString('en-US', {
    timeZone: "UTC",
  })
}

export function getUrl(url:string){
  return `${BASE_URL}${url}`
}

function isKannadaCharacter(character: string): boolean {
  // Check if the character falls within the Kannada Unicode block
  return character >= "\u0C80" && character <= "\u0CFF";
}

export function matchSearch(searchString: string | null|undefined,songList:SongEntry[]) {
  if (!searchString || !searchString.trim()) return [];

  searchString = searchString.trim();
  const pattern = new RegExp(
      `.*` +
          searchString
              .replace(/[^A-Za-z]/g, "")
              .split("")
              .join(`.{0,${maxMatchDistance}}`) +
          ".*",
      "i",
  );

  if (isKannadaCharacter(searchString[0]))
      return songList.filter((song) =>
          pattern.test(song.data.kannada_title),
      );
  return songList.filter((song) =>
      pattern.test(song.data.english_title),
  );
}