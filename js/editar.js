// Obtener ID desde URL
const urlParams = new URLSearchParams(window.location.search);
const tituloOriginal = urlParams.get("titulo");

let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
let tarea = tareas.find(t => t.titulo === tituloOriginal);

if (!tarea) {
  alert("Tarea no encontrada.");
  window.location.href = "index.html";
}

// Precargar valores en formulario
document.getElementById("titulo").value = tarea.titulo;
document.getElementById("descripcion").value = tarea.descripcion;
document.getElementById("responsable").value = tarea.responsable;
document.getElementById("prioridad").value = tarea.prioridad;
document.getElementById("estado").value = tarea.estado;

// Inicializar Flatpickr con fecha de entrega original y bloqueo de fechas pasadas
flatpickr("#eta", {
  defaultDate: tarea.eta,
  minDate: "today",
  dateFormat: "Y-m-d",
  locale: "es",
  disableMobile: true
});

function guardarCambios() {
  const titulo = document.getElementById("titulo").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();
  const responsable = document.getElementById("responsable").value;
  const eta = document.getElementById("eta").value;
  const prioridad = document.getElementById("prioridad").value;
  const estado = document.getElementById("estado").value;

  // Validación de campos obligatorios
  if (!titulo || !descripcion || !responsable || !eta) {
    alert("Por favor completa todos los campos.");
    return;
  }

  // Validar fecha (no permitir fechas anteriores)
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
    fechaCreacion: tarea.fechaCreacion // conservar fecha de creación
  };

  // Reemplazar tarea original en localStorage
  const nuevasTareas = tareas.map(t => t.titulo === tituloOriginal ? nuevaTarea : t);
  localStorage.setItem("tareas", JSON.stringify(nuevasTareas));

  window.location.href = "dashboard.html";
}
