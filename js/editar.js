// Obtener el parámetro 'titulo' desde la URL para identificar la tarea a editar
const urlParams = new URLSearchParams(window.location.search);
const tituloOriginal = urlParams.get("titulo"); // Ej: editar.html?titulo=Comprar%20leche

// Recuperar las tareas almacenadas y encontrar la que coincide con el título original
let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
let tarea = tareas.find(t => t.titulo === tituloOriginal);

// Si no se encuentra la tarea, redirige al inicio
if (!tarea) {
  alert("Tarea no encontrada.");
  window.location.href = "dashboard.html";
}

// Precargar los datos existentes en el formulario de edición
document.getElementById("titulo").value = tarea.titulo;
document.getElementById("descripcion").value = tarea.descripcion;
document.getElementById("responsable").value = tarea.responsable;
document.getElementById("prioridad").value = tarea.prioridad;
document.getElementById("estado").value = tarea.estado;

// Inicializar Flatpickr en el campo de ETA con restricciones para no permitir fechas anteriores a hoy
flatpickr("#eta", {
  defaultDate: tarea.eta, // Fecha de entrega previamente guardada
  minDate: "today", // No se permite seleccionar una fecha pasada
  dateFormat: "Y-m-d", // Formato estándar YYYY-MM-DD
  locale: "es", // Calendario en español
  disableMobile: true // Mejora la experiencia en móviles
});

// Función que guarda los cambios hechos en la tarea
function guardarCambios() {
  // Capturar los valores del formulario
  const titulo = document.getElementById("titulo").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();
  const responsable = document.getElementById("responsable").value;
  const eta = document.getElementById("eta").value;
  const prioridad = document.getElementById("prioridad").value;
  const estado = document.getElementById("estado").value;

  // Validación: no permitir campos vacíos
  if (!titulo || !descripcion || !responsable || !eta) {
    alert("Por favor completa todos los campos.");
    return;
  }

  // Validación: evitar fechas de entrega anteriores al día actual
  const fechaActual = new Date().toISOString().split('T')[0];
  if (eta < fechaActual) {
    alert("La fecha de entrega no puede ser anterior a hoy.");
    return;
  }

  // Crear un nuevo objeto de tarea con los cambios y datos adicionales
  const nuevaTarea = {
    titulo,
    descripcion,
    responsable,
    eta,
    prioridad,
    estado,
    fechaCreacion: tarea.fechaCreacion, // Se conserva la fecha original de creación
    fechaModificacion: new Date().toLocaleString(), // Se registra el momento de modificación
    modificadoPor: localStorage.getItem("usuarioActual") || "Desconocido", // Registrar quién modificó (si está disponible)
  };

  // Reemplazar la tarea original con la nueva dentro del arreglo de tareas
  const nuevasTareas = tareas.map(t => t.titulo === tituloOriginal ? nuevaTarea : t);

  // Guardar la lista actualizada en localStorage
  localStorage.setItem("tareas", JSON.stringify(nuevasTareas));

  // Redirigir de vuelta al panel de control
  window.location.href = "dashboard.html";
}