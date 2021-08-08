import hamburgerButton from './hamburger_button.js';
import {clockFunction, alarmaFunction} from './reloj_alarma.js';
import {keyboardBall,shortcuts} from './keyboardBall.js';
import countdown from './countdown.js';
import scroll from './scroll.js';
import modeDark from './mode-dark.js';


//Añadiendo eventos con 'DOMContentLoaded'
const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    hamburgerButton("#hamburger-button", "#menu", "#menu ul li a");
    clockFunction("#btnIniciar", "#btnDetener");
    alarmaFunction("#alarmaIniciar", "#alarmaDetener");
    countdown("#countdown", "#date",".mostrarCountdown",".detenerCountdown");
    scroll("#btnScroll");
    modeDark("#btnModeDark");
});

d.addEventListener("keydown", (e)=>{
    keyboardBall(e, "#keyboard-ball", "#keyboard-wrapper");
    shortcuts(e);
})