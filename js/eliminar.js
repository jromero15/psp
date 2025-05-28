function eliminarTarea(event) {
  const boton = event.target;
  const tarea = boton.closest("li");
  const titulo = tarea.querySelector(".tarea-title").textContent;

  // Eliminar del DOM
  tarea.remove();

  // Eliminar del localStorage
  let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
  tareas = tareas.filter(t => t.titulo !== titulo);
  localStorage.setItem("tareas", JSON.stringify(tareas));
}
