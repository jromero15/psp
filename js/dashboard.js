function cargarTareas() {
  const lista = document.getElementById("listaTareas");
  const tareas = JSON.parse(localStorage.getItem("tareas")) || [];

  lista.innerHTML = ""; // Limpia antes de cargar

  tareas.forEach(t => {
    const card = document.createElement("div");
    card.className = "tarea-card";

    card.innerHTML = `
      <div class="tarea-title">${t.titulo}</div>
      <div class="tarea-desc">${t.descripcion}</div>
      <div class="tarea-meta">
        <p><strong>Responsable:</strong> ${t.responsable}</p>
        <p><strong>Prioridad:</strong> ${t.prioridad}</p>
        <p><strong>Estado:</strong> ${t.estado}</p>
        <p><strong>ETA:</strong> ${t.eta}</p>
        <p><strong>Creado:</strong> ${t.fechaCreacion}</p>
      </div>
      <div class="tarea-footer">
        <button class="editar-btn" onclick="location.href='editar.html?titulo=${encodeURIComponent(t.titulo)}'">Editar</button>
        <button class="eliminar-btn" onclick="eliminarTarea(event)">Eliminar</button>
      </div>
    `;

    lista.appendChild(card);
  });
}

function cerrarSesion() {
  localStorage.removeItem("logueado");
  window.location.href = "index.html";
}

window.onload = () => {
  // Validar si está logueado
  if (localStorage.getItem("logueado") !== "true") {
    window.location.href = "index.html";
    return;
  }

  cargarTareas();
};
