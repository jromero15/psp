function cargarTareas() {
  const lista = document.getElementById("listaTareas");
  const tareas = JSON.parse(localStorage.getItem("tareas")) || [];

  lista.innerHTML = ""; // Limpia antes de cargar

  tareas.forEach(t => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="tarea-title">${t.titulo}</div>
      <div class="tarea-desc">${t.descripcion}</div>
      <div class="tarea-meta">
        <strong>Responsable:</strong> ${t.responsable}<br>
        <strong>Prioridad:</strong> ${t.prioridad}<br>
        <strong>Estado:</strong> ${t.estado}<br>
        <strong>ETA:</strong> ${t.eta}<br>
        <strong>Creado:</strong> ${t.fechaCreacion}
      </div>
      <div class="tarea-footer">
        <button class="eliminar-btn" onclick="eliminarTarea(event)">Eliminar</button>
      </div>
    `;
    lista.appendChild(li);
  });
}

window.onload = cargarTareas;