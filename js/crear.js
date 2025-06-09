// Función para agregar una nueva tarea
function agregarTarea() {
  const titulo = document.getElementById("titulo").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();
  const responsable = document.getElementById("responsable").value.trim();
  const eta = document.getElementById("eta").value;
  const prioridad = document.getElementById("prioridad").value;
  const estado = document.getElementById("estado").value;

  if (!titulo || !descripcion || !responsable || !eta) {
    alert("Por favor completa todos los campos obligatorios.");
    return;
  }

  const fechaActual = new Date().toISOString().split('T')[0];
  if (eta < fechaActual) {
    alert("La fecha de entrega no puede ser anterior a hoy.");
    return;
  }

  const fechaCreacion = new Date().toLocaleString();

  const nuevaTarea = {
    titulo,
    descripcion,
    responsable,
    eta,
    prioridad,
    estado,
    fechaCreacion
  };

  let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
  tareas.push(nuevaTarea);
  localStorage.setItem("tareas", JSON.stringify(tareas));

  // Limpiar formulario
  document.getElementById("titulo").value = '';
  document.getElementById("descripcion").value = '';
  document.getElementById("responsable").value = '';
  document.getElementById("eta").value = '';
  document.getElementById("prioridad").value = 'Baja';
  document.getElementById("estado").value = 'Pendiente';

  window.location.href = "dashboard.html";
}

// Función para cancelar y volver al dashboard
function cancelarTarea() {
  if (confirm("¿Deseas cancelar la creación de la tarea? Los cambios no se guardarán.")) {
    window.location.href = "dashboard.html";
  }
}
