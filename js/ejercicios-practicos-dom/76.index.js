import hamburgerButton from './hamburger_button.js';
import {clockFunction, alarmaFunction} from './reloj_alarma.js';
import {keyboardBall,shortcuts} from './keyboardBall.js';


//Añadiendo eventos con 'DOMContentLoaded'
const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    hamburgerButton("#hamburger-button", "#menu", "#menu ul li a");
    clockFunction("#btnIniciar", "#btnDetener");
    alarmaFunction("#alarmaIniciar", "#alarmaDetener");
    // keyboardBall("#keyboard-wrapper","#keyboard-ball");
});

d.addEventListener("keydown", (e)=>{
    keyboardBall(e, "#keyboard-ball", "#keyboard-wrapper");
    shortcuts(e);
})