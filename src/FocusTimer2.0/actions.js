import state from './state.js'
import * as timer from './timer.js'
import * as el from "./elements.js"

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running') /* Acao de trocar o estado para o tempo correr*/
    timer.countdown()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running') /* Acao de trocar o estado para o tempo parar de correr*/
    timer.updateDisplay()

}

export function addOn() {
    timer.acrementTimerByFiveMinutes(el.minutes, el.seconds)
}

export function removeOn() {
    timer.decrementTimerByFiveMinutes(el.minutes, el.seconds)
}
