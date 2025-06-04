function cargarTareas() {
  const lista = document.getElementById("listaTareas");
  const tareas = JSON.parse(localStorage.getItem("tareas")) || [];

  lista.innerHTML = ""; // Limpia antes de cargar

  tareas.forEach(t => {
    const card = document.createElement("div");
    card.className = "tarea-card";

    const prioridadClase = t.prioridad.toLowerCase(); // alta, media, baja
    const estadoClase = t.estado.toLowerCase().replace(/\s+/g, "-"); // pendiente, en-progreso, completado

    card.innerHTML = `
      <div class="tarea-title">${t.titulo}</div>
      <div class="tarea-desc">${t.descripcion}</div>
      <div class="tarea-meta">
        <p><strong>Responsable:</strong> ${t.responsable}</p>
        <p><strong>Prioridad:</strong> 
          <span class="semaforo ${prioridadClase}"></span>
          <span class="prioridad-${prioridadClase}">${t.prioridad}</span>
        </p>
        <p><strong>Estado:</strong>
          <span class="semaforo-estado ${estadoClase}"></span>
          <span class="estado-${estadoClase}">${t.estado}</span>
        </p>
        <p><strong>ETA:</strong> ${t.eta}</p>
        <p><strong>Creado:</strong> ${t.fechaCreacion}</p>
        ${t.fechaModificacion ? `<p><strong>Modificado:</strong> ${t.fechaModificacion} por ${t.modificadoPor}</p>` : ""}
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