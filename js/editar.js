// Obtener ID desde URL
const urlParams = new URLSearchParams(window.location.search);
const tituloOriginal = urlParams.get("titulo");

let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
let tarea = tareas.find(t => t.titulo === tituloOriginal);

if (!tarea) {
  alert("Tarea no encontrada.");
  window.location.href = "index.html";
}

// Precargar valores
document.getElementById("titulo").value = tarea.titulo;
document.getElementById("descripcion").value = tarea.descripcion;
document.getElementById("responsable").value = tarea.responsable;
document.getElementById("eta").value = tarea.eta;
document.getElementById("prioridad").value = tarea.prioridad;
document.getElementById("estado").value = tarea.estado;

function guardarCambios() {
  const nuevaTarea = {
    titulo: document.getElementById("titulo").value.trim(),
    descripcion: document.getElementById("descripcion").value.trim(),
    responsable: document.getElementById("responsable").value,
    eta: document.getElementById("eta").value,
    prioridad: document.getElementById("prioridad").value,
    estado: document.getElementById("estado").value,
    fechaCreacion: tarea.fechaCreacion // mantener la original
  };

  // Reemplazar tarea en localStorage
  const nuevasTareas = tareas.map(t => t.titulo === tituloOriginal ? nuevaTarea : t);
  localStorage.setItem("tareas", JSON.stringify(nuevasTareas));

  window.location.href = "index.html";
}
