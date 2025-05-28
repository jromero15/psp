// Crear tarea
function agregarTarea() {
  const titulo = document.getElementById("titulo").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();
  const responsable = document.getElementById("responsable").value.trim();
  const eta = document.getElementById("eta").value;
  const prioridad = document.getElementById("prioridad").value;
  const estado = document.getElementById("estado").value;

  if (!titulo || !descripcion || !responsable || !eta) {
    alert("Por favor completa todos los campos.");
    return;
  }

  const fechaCreacion = new Date().toLocaleString();

  // Crear el objeto de tarea
  const tarea = {
    titulo,
    descripcion,
    responsable,
    eta,
    prioridad,
    estado,
    fechaCreacion
  };

  // Obtener las tareas del localStorage y agregar la nueva tarea
  const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
  tareas.push(tarea);
  localStorage.setItem("tareas", JSON.stringify(tareas));

  // Limpiar los campos
  document.getElementById("titulo").value = "";
  document.getElementById("descripcion").value = "";
  document.getElementById("responsable").value = "";
  document.getElementById("eta").value = "";
  document.getElementById("prioridad").value = "Baja";
  document.getElementById("estado").value = "Pendiente";

  // Redirigir al dashboard
  window.location.href = 'dashboard.html';
}

// Al cargar el Dashboard, verificar tareas
window.onload = function() {
  const listaTareas = JSON.parse(localStorage.getItem("tareas")) || [];
  console.log(listaTareas);  // Verifica que las tareas estén almacenadas correctamente

  const ul = document.getElementById("listaTareas");
  ul.innerHTML = "";  // Limpiar lista existente

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
