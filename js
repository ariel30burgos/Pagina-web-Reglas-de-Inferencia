/*esto hace que al dar click en el icono no se deslice tan rapido a la parte de los comentarios*/
const botonAyuda = document.getElementById("botonAyuda");
const seccionComentarios = document.getElementById("comentarios");

botonAyuda.addEventListener("click", () => {
seccionComentarios.scrollIntoView({
   behavior: "smooth"
  });
});

