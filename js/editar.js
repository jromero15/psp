// Obtener el parámetro 'titulo' desde la URL
const urlParams = new URLSearchParams(window.location.search);
const tituloOriginal = urlParams.get("titulo");

// Recuperar tareas y buscar la correspondiente
let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
let tarea = tareas.find(t => t.titulo === tituloOriginal);

if (!tarea) {
  alert("Tarea no encontrada.");
  window.location.href = "dashboard.html";
}

// Precargar valores en el formulario
document.getElementById("titulo").value = tarea.titulo;
document.getElementById("descripcion").value = tarea.descripcion;
document.getElementById("responsable").value = tarea.responsable;
document.getElementById("prioridad").value = tarea.prioridad;
document.getElementById("estado").value = tarea.estado;

flatpickr("#eta", {
  defaultDate: tarea.eta,
  minDate: "today",
  dateFormat: "Y-m-d",
  locale: "es",
  disableMobile: true
});

// Función para guardar cambios
function guardarCambios() {
  const titulo = document.getElementById("titulo").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();
  const responsable = document.getElementById("responsable").value;
  const eta = document.getElementById("eta").value;
  const prioridad = document.getElementById("prioridad").value;
  const estado = document.getElementById("estado").value;

  if (!titulo || !descripcion || !responsable || !eta) {
    alert("Por favor completa todos los campos.");
    return;
  }

  const fechaActual = new Date().toISOString().split('T')[0];
  if (eta < fechaActual) {
    alert("La fecha de entrega no puede ser anterior a hoy.");
    return;
  }

  const nuevaTarea = {
    titulo,
    descripcion,
    responsable,
    eta,
    prioridad,
    estado,
    fechaCreacion: tarea.fechaCreacion,
    fechaModificacion: new Date().toLocaleString(),
    modificadoPor: localStorage.getItem("usuarioActual") || "Desconocido",
  };

  const nuevasTareas = tareas.map(t => t.titulo === tituloOriginal ? nuevaTarea : t);
  localStorage.setItem("tareas", JSON.stringify(nuevasTareas));

  window.location.href = "dashboard.html";
}

// Botón Cancelar
function cancelarEdicion() {
  if (confirm("¿Deseas cancelar la edición? Los cambios no se guardarán.")) {
    window.location.href = "dashboard.html";
  }
}