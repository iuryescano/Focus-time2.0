export const controls = document.getElementById('controls')/* Esta pegando direto do ID do Html*/

export const minutes = document.getElementById('minutes')

export const seconds = document.getElementById('seconds')

/* export const buttonFlorest = document.getElementById('florestIcon') */
/* export let botao = document.querySelectorAll('#toggle-mode')  */

export const buttonFlorest = document.getElementById('toggle-mode-florest')

export const buttonCloud = document.getElementById('toggle-mode-cloud')

export const buttonStore = document.getElementById('toggle-mode-store')

export const buttonFlame = document.getElementById('toggle-mode-flame')


export const musicButtonFlorest = document.querySelector('[data-action="toggleMusicFlorest"]');
export const florestMusic = new Audio('././assets/Floresta.wav'); 

export const musicButtonCloud = document.querySelector('[data-action="toggleMusicCloud"]');
export const rainMusic = new Audio('././assets/Chuva.wav'); 

export const musicButtonStore = document.querySelector('[data-action="toggleMusicStore"]');
export const storeMusic = new Audio('././assets/Cafeteria.wav'); 

export const musicButtonFlame = document.querySelector('[data-action="toggleMusicFlame"]');
export const FlameMusic = new Audio('././assets/Lareira.wav'); 