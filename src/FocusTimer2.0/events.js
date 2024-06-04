import { controls } from "./elements.js";
import * as actions from './actions.js'
import * as el from "./elements.js"
import { updateDisplay } from "./timer.js";
import state from './state.js'
import { buttonFlorest, buttonCloud, buttonStore, buttonFlame } from "./elements.js";


export function registerControls(){
    controls.addEventListener('click', (event ) => {
        const action = event.target.dataset.action
        if(typeof actions[action]() != "function") {
            return
        }
        actions[action]()
    })
}



export function setMinutes() { /*Isso aqui q vai mudar no codigo para adicionar e tirar valor */
    el.minutes.addEventListener('focus', () => { /*esse evento esta limpando o dado de entrada para o contador */
        el.minutes.textContent = ""
    })

    el.minutes.onkeypress = (event) => /\d/.test(event.key) /*Essa logica para nao aceitar outros caracteres sem ser numeros*/

    el.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent /* pegando o texto que esta eem minutos*/
        time = time > 60 ? 60 : time /* time e maior que 60 ? se sim mantem como 60... os : siginica nao... e se nao e maior q 60... deixa o time */

        state.minutes = time
        state.seconds = 0

        updateDisplay()
        el.minutes.removeAttribute('contenteditable')
    })
}


/* export function toggleBanner(){
    botao.forEach((item)=>{item.addEventListener('click', ()=>{ item.classList.toggle('light')})})
}
*/

export function toggleFlorestBanner() {
    buttonFlorest.addEventListener('click', (event ) => {
        buttonFlorest.classList.toggle('light') 
    })
}

export function toggleCloudBanner() {
    buttonCloud.addEventListener('click', (event ) => {
        buttonCloud.classList.toggle('light') 
    })
}

export function toggleStoreBanner() {
    buttonStore.addEventListener('click', (event ) => {
        buttonStore.classList.toggle('light') 
    })
}

export function toggleFlameBanner() {
    buttonFlame.addEventListener('click', (event ) => {
        buttonFlame.classList.toggle('light') 
    })
}

export function toggleMusicFlorest() {
        if (el.florestMusic.paused) {
            el.florestMusic.play();
            el.musicButtonFlorest.setAttribute('data-action', 'stopMusic');
        } else {
            el.florestMusic.pause();
            el.florestMusic.currentTime = 0;
            el.musicButtonFlorest.setAttribute('data-action', 'toggleMusicFlorest');
        }
        
    }

export function toggleMusicCloud() {
    if (el.rainMusic.paused) {
        el.rainMusic.play();
        el.musicButtonCloud.setAttribute('data-action', 'stopMusic');
    } else {
        el.rainMusic.pause();
        el.rainMusic.currentTime = 0;
        el.musicButtonCloud.setAttribute('data-action', 'toggleMusicFlorest');
    }
    
}

export function toggleMusicStore() {
    if (el.storeMusic.paused) {
        el.storeMusic.play();
        el.musicButtonStore.setAttribute('data-action', 'stopMusic');
    } else {
        el.storeMusic.pause();
        el.storeMusic.currentTime = 0;
        el.musicButtonStore.setAttribute('data-action', 'toggleMusicStore');
    }
    
}

export function toggleMusicFlame() {
    if (el.FlameMusic.paused) {
        el.FlameMusic.play();
        el.musicButtonFlame.setAttribute('data-action', 'stopMusic');
    } else {
        el.FlameMusic.pause();
        el.FlameMusic.currentTime = 0;
        el.musicButtonFlame.setAttribute('data-action', 'toggleMusicStore');
    }
    
}

el.musicButtonFlorest.addEventListener('click', toggleMusicFlorest);
el.musicButtonCloud.addEventListener('click', toggleMusicCloud);
el.musicButtonStore.addEventListener('click', toggleMusicStore);
el.musicButtonFlame.addEventListener('click', toggleMusicFlame);
