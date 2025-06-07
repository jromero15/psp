function eliminarTarea(event) {
  // Obtener el botón que disparó el evento y encontrar la tarjeta completa de la tarea
  const boton = event.target;
  const tarea = boton.closest(".tarea-card"); // Busca el contenedor de la tarea más cercano
  const titulo = tarea.querySelector(".tarea-title").textContent; // Obtiene el título de la tarea

  // Referencias al modal y sus elementos
  const modal = document.getElementById("modalEliminar");
  const tituloModal = document.getElementById("tituloModal");
  const botonConfirmar = document.getElementById("confirmarEliminacion");
  const botonCancelar = document.getElementById("cancelarEliminacion");

  // Mostrar el título dinámicamente en el modal
  tituloModal.textContent = `Eliminar tarea: "${titulo}"`;

  // Mostrar el modal
  modal.style.display = "block";

  // Acción al confirmar la eliminación
  botonConfirmar.onclick = function () {
    // 1. Eliminar visualmente del DOM
    tarea.remove();

    // 2. Eliminar del localStorage
    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas = tareas.filter(t => t.titulo !== titulo); // Filtra la tarea a eliminar
    localStorage.setItem("tareas", JSON.stringify(tareas)); // Guarda la lista actualizada

    // 3. Cerrar el modal
    modal.style.display = "none";
  };

  // Acción para cerrar el modal desde la 'X' (cerrarModal)
  const cerrarModal = document.getElementById("cerrarModal");
  cerrarModal.onclick = function () {
    modal.style.display = "none";
  };

  // Permitir cerrar el modal haciendo clic fuera del área del modal
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
}