function eliminarTarea(event) {
  const boton = event.target;
  const tarea = boton.closest(".tarea-card"); // Buscar el div más cercano con clase "tarea-card"

  // Obtener el título de la tarea para identificarla
  const titulo = tarea.querySelector(".tarea-title").textContent;

  // Mostrar un cuadro de confirmación
  const confirmacion = confirm(`¿Estás seguro de que deseas eliminar la tarea: "${titulo}"?`);

  if (confirmacion) {
    // Eliminar del DOM
    tarea.remove();

    // Eliminar del localStorage
    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas = tareas.filter(t => t.titulo !== titulo);
    localStorage.setItem("tareas", JSON.stringify(tareas));

    alert("Tarea eliminada exitosamente.");
  } else {
    alert("No se eliminó la tarea.");
  }
}

