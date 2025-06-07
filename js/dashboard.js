// Función para cargar tareas desde localStorage y mostrarlas en el panel de control
function cargarTareas() {
  const lista = document.getElementById("listaTareas"); // Contenedor donde se mostrarán las tareas
  const tareas = JSON.parse(localStorage.getItem("tareas")) || []; // Recuperar tareas guardadas o inicializar vacío

  lista.innerHTML = ""; // Limpia el contenedor antes de volver a cargar las tareas

  // Recorre cada tarea y genera su representación visual (card)
  tareas.forEach(t => {
    const card = document.createElement("div");
    card.className = "tarea-card";

    // Se obtienen clases basadas en la prioridad y el estado para estilos CSS dinámicos
    const prioridadClase = t.prioridad.toLowerCase(); // Ej: "Alta" → "alta"
    const estadoClase = t.estado.toLowerCase().replace(/\s+/g, "-"); // Ej: "En progreso" → "en-progreso"

    // Estructura HTML de la tarjeta de la tarea
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
        <!-- Botón de edición redirige al formulario con el título en la URL -->
        <button class="editar-btn" onclick="location.href='editar.html?titulo=${encodeURIComponent(t.titulo)}'">Editar</button>
        
        <!-- Botón para eliminar la tarea -->
        <button class="eliminar-btn" onclick="eliminarTarea(event)">Eliminar</button>
        
        <!-- Aquí puede ir el modal de confirmación si se implementa -->
      </div>
    `;

    // Se agrega la tarjeta al contenedor de tareas
    lista.appendChild(card);
  });
}

// Función para cerrar sesión (junio 2025)
// Elimina la sesión del almacenamiento y redirige al login
function cerrarSesion() {
  localStorage.removeItem("logueado");
  window.location.href = "index.html"; // Redirección al login
}

// Se ejecuta al cargar la página
window.onload = () => {
  // Validación de sesión activa (solo usuarios logueados acceden al panel)
  if (localStorage.getItem("logueado") !== "true") {
    window.location.href = "index.html"; // Si no está logueado, redirige al login
    return;
  }

  // Si está logueado correctamente, carga las tareas
  cargarTareas();
};