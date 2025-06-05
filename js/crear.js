function agregarTarea() {
  const titulo = document.getElementById("titulo").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();
  const responsable = document.getElementById("responsable").value.trim();
  const eta = document.getElementById("eta").value; // Fecha de entrega
  const prioridad = document.getElementById("prioridad").value;
  const estado = document.getElementById("estado").value;

  // Validar que todos los campos obligatorios estén completos
  if (!titulo || !descripcion || !responsable || !eta) {
    alert("Por favor completa todos los campos.");
    return;
  }

  // Validar que la fecha no sea una fecha anterior a la actual
  const fechaActual = new Date().toISOString().split('T')[0]; // Fecha actual en formato YYYY-MM-DD
  if (eta < fechaActual) {
    alert("La fecha de entrega no puede ser anterior a hoy.");
    return;
  }

  // Obtener la fecha de creación
  const fechaCreacion = new Date().toLocaleString();

  // Crear el objeto de tarea
  const nuevaTarea = {
    titulo,
    descripcion,
    responsable,
    eta,
    prioridad,
    estado,
    fechaCreacion
  };

  // Guardar la tarea en localStorage
  let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
  tareas.push(nuevaTarea);
  localStorage.setItem("tareas", JSON.stringify(tareas));

  // Limpiar los campos después de agregar la tarea
  document.getElementById("titulo").value = '';
  document.getElementById("descripcion").value = '';
  document.getElementById("responsable").value = '';
  document.getElementById("eta").value = '';
  document.getElementById("prioridad").value = 'Baja';
  document.getElementById("estado").value = 'Pendiente';

  window.location.href = "dashboard.html";
}
