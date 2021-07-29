/*
    Templates en HTML para pintar elementos dinamicamentes desde JS
*/

//Crear referencia del section 'cards'
const $cards = document.querySelector(".cards");
//Referencia del 'template-id' (contenido)
const $template = document.getElementById("template-card").content;
//Creando el fragmento
const $fragmento = document.createDocumentFragment();

//Creando arreglo con objetos de cada item 'card'
const cardsContent = [
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ];

console.log($template);

//Agregando propiedades al contenido del template
cardsContent.forEach(el => {
    $template.querySelector(".card img").setAttribute("src", `${el.img}`);
    $template.querySelector(".card img").setAttribute("alt", `${el.title}`);
    $template.querySelector(".card figcaption").textContent = el.title;

    //Se requiere hacer un clon ya que el template solo se puede usar 1 vez
    //Recibe 2 parametros... El elemento del cual clonara y true si se requiere que clone todos sus elementos
    const $clone = document.importNode($template, true);
    $fragmento.appendChild($clone);
});

//Se agrega el fragmento al section de 'cards'
$cards.appendChild($fragmento);