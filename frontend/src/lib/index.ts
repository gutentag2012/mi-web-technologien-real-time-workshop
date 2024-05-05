// place files you want to import through the `$lib` alias in this folder.
import {writable} from "svelte/store";
import {type Api} from "reveal.js";

export const revealSlides = writable<Api>()
export const authToken = writable<string>()