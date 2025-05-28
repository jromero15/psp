function eliminarTarea(event) {
  const boton = event.target;
  const tarea = boton.closest("li");
  tarea.remove();
}