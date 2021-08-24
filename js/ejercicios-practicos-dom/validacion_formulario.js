const d = document;

export default function validarFormulario() {
  const $inNombre = d.querySelector("#in-name");
  const $inCorreo = d.querySelector("#in-email");
  const $inAsunto = d.querySelector("#in-issue");
  const $inComentario = d.querySelector("#in-comments");

  const $spans = d.querySelectorAll("#form-validation span");

  let validarNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let validarCorreo =
    /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

  d.addEventListener("keyup", (e) => {
    if (e.target === $inNombre) {
      if (validarNombre.test($inNombre.value)) {
        $spans[0].classList.add("in--none");
      } else {
        $spans[0].classList.remove("in--none");
      }
    }

    if (e.target === $inCorreo) {
      if (validarCorreo.test($inCorreo.value)) {
        $spans[1].classList.add("in--none");
      } else {
        $spans[1].classList.remove("in--none");
      }
    }

    if (e.target === $inComentario) {
      if ($inComentario.value.length <= 255) {
        $spans[3].classList.add("in--none");
      } else {
        $spans[3].classList.remove("in--none");
      }
    }
  });
}
