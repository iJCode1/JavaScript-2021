const d = document;

export default function modeDark(boton){
    const $btnModeDark = d.querySelector(boton);

    d.addEventListener("click", (e)=>{
        if(e.target.matches(boton)){
            document.body.classList.toggle("modeDark");
            $btnModeDark.classList.toggle("btnModeLight");

            document.body.querySelector("h1").classList.toggle("background-dark");
            
            let $sections = document.body.querySelectorAll("section");
            $sections.forEach((e)=>{
                e.classList.toggle("colorDark");
            });

            document.body.querySelector("#keyboard-wrapper").classList.toggle("keyboard-wrapper-dark");

        }
    });
}