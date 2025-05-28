window.onload = function() {
  // Al cargar la página, obtenemos las tareas del almacenamiento local
  const listaTareas = JSON.parse(localStorage.getItem("tareas")) || [];

  const ul = document.getElementById("listaTareas");
  ul.innerHTML = ""; // Limpiamos cualquier tarea anterior

  // Mostramos las tareas en la lista
  listaTareas.forEach(tarea => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="tarea-title">${tarea.titulo}</div>
      <div class="tarea-meta">
        <strong>Responsable:</strong> ${tarea.responsable}<br>
        <strong>Prioridad:</strong> ${tarea.prioridad}<br>
        <strong>Estado:</strong> ${tarea.estado}<br>
        <strong>ETA:</strong> ${tarea.eta}<br>
      </div>
    `;
    ul.appendChild(li);
  });
};
