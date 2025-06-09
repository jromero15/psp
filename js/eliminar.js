function eliminarTarea(event) {
  const boton = event.target;
  const tarea = boton.closest(".tarea-card");

  if (!tarea) {
    console.error("No se encontró la tarjeta de tarea.");
    return;
  }

  const titulo = tarea.querySelector(".tarea-title")?.textContent || "tarea sin título";

  // Referencias al modal
  const modal = document.getElementById("modalEliminar");
  const tituloModal = document.getElementById("tituloModal");
  const botonConfirmar = document.getElementById("confirmarEliminacion");
  const botonCancelar = document.getElementById("cancelarEliminacion");

  if (!modal || !tituloModal || !botonConfirmar || !botonCancelar) {
    console.error("Faltan elementos del modal.");
    return;
  }

  // Mostrar el título en el modal
  tituloModal.textContent = `Eliminar tarea: "${titulo}"`;
  modal.style.display = "block";

  // Confirmar eliminación
  botonConfirmar.onclick = function () {
    // 1. Eliminar visualmente
    tarea.remove();

    // 2. Eliminar del localStorage
    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas = tareas.filter(t => t.titulo !== titulo);
    localStorage.setItem("tareas", JSON.stringify(tareas));

    // 3. Cerrar modal
    modal.style.display = "none";
  };

  // Cancelar/cerrar modal
  botonCancelar.onclick = function () {
    modal.style.display = "none";
  };

  // Cerrar modal al hacer clic fuera
  window.onclick = function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };
}
