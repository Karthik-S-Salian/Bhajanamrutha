import { BASE_URL } from "src/config";

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function formatDate(date: string | number | Date) {
  return new Date(date).toLocaleDateString('en-US', {
    timeZone: "UTC",
  })
}

export function getUrl(url:string){
  return `${BASE_URL}${url}`
}

export function isKannadaCharacter(character: string): boolean {
  // Check if the character falls within the Kannada Unicode block
  return character >= "\u0C80" && character <= "\u0CFF";
}