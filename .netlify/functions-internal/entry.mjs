import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_0b7d57f9.mjs';

const _page0  = () => import('./chunks/generic_b38ef8df.mjs');
const _page1  = () => import('./chunks/_slug__55700abe.mjs');
const _page2  = () => import('./chunks/_query__0357c17f.mjs');
const _page3  = () => import('./chunks/_tag__d6fc4aca.mjs');
const _page4  = () => import('./chunks/search_7daa19d5.mjs');
const _page5  = () => import('./chunks/_.._693379dd.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/bhajans/[slug].astro", _page1],["src/pages/search/[query].astro", _page2],["src/pages/tags/[tag].astro", _page3],["src/pages/api/search.ts", _page4],["src/pages/[...page].astro", _page5]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
