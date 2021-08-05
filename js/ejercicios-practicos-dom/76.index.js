//Añadiendo eventos al document
document.addEventListener("click", (e)=>{
    if(e.target.matches("#hamburger-button")){
        document.querySelector("#menu").classList.toggle("is-active");
        document.querySelector("#hamburger-button").style.backgroundImage = "url('../../assets/icons/simbolo-x.png')";
    }
});