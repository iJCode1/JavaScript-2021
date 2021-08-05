import hamburgerButton from './hamburger_button.js';

//Añadiendo eventos con 'DOMContentLoaded'
const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    hamburgerButton("#hamburger-button", "#menu", "#menu ul li a");
})