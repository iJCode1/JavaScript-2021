const d = document;

export default function modeDark(boton) {
  const $btnModeDark = d.querySelector(boton);

  d.addEventListener("click", (e) => {
    if (e.target.matches(boton)) {
      document.body.classList.toggle("modeDark");
      $btnModeDark.classList.toggle("btnModeLight");

      document.body.querySelector("h1").classList.toggle("background-dark");

      let $sections = document.body.querySelectorAll("section");
      $sections.forEach((e) => {
        e.classList.toggle("colorDark");
      });

      document.body
        .querySelector("#keyboard-wrapper")
        .classList.toggle("keyboard-wrapper-dark");

      /*$btnModeDark.classList.forEach((clase)=>{
                if(clase === "btnModeLight"){
                    // localStorage.setItem("modo", "modeDark");
                }else{
                    localStorage.removeItem("modo");
                }
            })*/
      localStorage.setItem("modo", d.body.classList);
      localStorage.setItem("modoH1", d.body.querySelector("h1").classList);

      localStorage.setItem(
        "modoSection1",
        d.body.querySelector("#section1").classList
      );
      localStorage.setItem(
        "modoSection2",
        d.body.querySelector("#section2").classList
      );
      localStorage.setItem(
        "modoSection3",
        d.body.querySelector("#section3").classList
      );
      localStorage.setItem(
        "modoSection4",
        d.body.querySelector("#section4").classList
      );
      localStorage.setItem(
        "modoSection5",
        d.body.querySelector("#section5").classList
      );
      localStorage.setItem(
        "modoSection6",
        d.body.querySelector("#section6").classList
      );
      localStorage.setItem(
        "modoSection7",
        d.body.querySelector("#section7").classList
      );
      localStorage.setItem(
        "modoSection8",
        d.body.querySelector("#section8").classList
      );
      localStorage.setItem(
        "modoSection9",
        d.body.querySelector("#section9").classList
      );
      localStorage.setItem(
        "modoSection10",
        d.body.querySelector("#section10").classList
      );
      localStorage.setItem(
        "modoSection11",
        d.body.querySelector("#section11").classList
      );

      localStorage.setItem(
        "modoSection2Background",
        d.body.querySelector("#keyboard-wrapper").classList
      );

      localStorage.setItem(
        "btnModeImage",
        d.body.querySelector("#btnModeDark").classList
      );
      // console.log($btnModeDark.classList);
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    if (localStorage.length !== 0) {
      const modo = localStorage.getItem("modo");
      const modoH1 = localStorage.getItem("modoH1");
      const modoSection1 = localStorage.getItem("modoSection1");
      const modoSection2 = localStorage.getItem("modoSection2");
      const modoSection3 = localStorage.getItem("modoSection3");
      const modoSection4 = localStorage.getItem("modoSection4");
      const modoSection5 = localStorage.getItem("modoSection5");
      const modoSection6 = localStorage.getItem("modoSection6");
      const modoSection7 = localStorage.getItem("modoSection7");
      const modoSection8 = localStorage.getItem("modoSection8");
      const modoSection9 = localStorage.getItem("modoSection9");
      const modoSection10 = localStorage.getItem("modoSection10");
      const modoSection11 = localStorage.getItem("modoSection11");
      const modoSection2Background = localStorage.getItem(
        "modoSection2Background"
      );
      const modoBtnMode = localStorage.getItem("btnModeImage");

      d.body.classList = modo;
      d.querySelector("h1").classList = modoH1;

      d.querySelector("#section1").classList = modoSection1;
      d.querySelector("#section2").classList = modoSection2;
      d.querySelector("#section3").classList = modoSection3;
      d.querySelector("#section4").classList = modoSection4;
      d.querySelector("#section5").classList = modoSection5;
      d.querySelector("#section6").classList = modoSection6;
      d.querySelector("#section7").classList = modoSection7;
      d.querySelector("#section8").classList = modoSection8;
      d.querySelector("#section9").classList = modoSection9;
      d.querySelector("#section10").classList = modoSection10;
      d.querySelector("#section11").classList = modoSection11;

      d.querySelector("#keyboard-wrapper").classList = modoSection2Background;

      d.querySelector("#btnModeDark").classList = modoBtnMode;
    }
  });
}
