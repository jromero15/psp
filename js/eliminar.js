function eliminarTarea(event) {
  const boton = event.target;
  const tarea = boton.closest(".tarea-card"); // Buscar el div más cercano con clase "tarea-card"
  const titulo = tarea.querySelector(".tarea-title").textContent;

  // Mostrar el modal
  const modal = document.getElementById("modalEliminar");
  const tituloModal = document.getElementById("tituloModal");
  const botonConfirmar = document.getElementById("confirmarEliminacion");
  const botonCancelar = document.getElementById("cancelarEliminacion");

  // Cambiar el texto del modal con el título de la tarea
  tituloModal.textContent = `Eliminar tarea: "${titulo}"`;

  // Mostrar el modal
  modal.style.display = "block";

  // Función para confirmar la eliminación
  botonConfirmar.onclick = function () {
    // Eliminar del DOM
    tarea.remove();

    // Eliminar del localStorage
    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas = tareas.filter(t => t.titulo !== titulo);
    localStorage.setItem("tareas", JSON.stringify(tareas));

    // Cerrar el modal
    modal.style.display = "none";
  };

  // Función para cancelar la eliminación
  botonCancelar.onclick = function () {
    alert("No se eliminó la tarea.");

    // Cerrar el modal
    modal.style.display = "none";
  };

  // Función para cerrar el modal al hacer clic en la 'X'
  const cerrarModal = document.getElementById("cerrarModal");
  cerrarModal.onclick = function () {
    modal.style.display = "none";
  };

  // Cerrar el modal si se hace clic fuera del modal
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
}
