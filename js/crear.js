// Función que permite agregar una nueva tarea al sistema (junio 2025)
function agregarTarea() {
  // Obtener y limpiar los valores ingresados por el usuario
  const titulo = document.getElementById("titulo").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();
  const responsable = document.getElementById("responsable").value.trim();
  const eta = document.getElementById("eta").value; // Fecha estimada de entrega (formato YYYY-MM-DD)
  const prioridad = document.getElementById("prioridad").value;
  const estado = document.getElementById("estado").value;

  // Validación: todos los campos obligatorios deben estar completos
  if (!titulo || !descripcion || !responsable || !eta) {
    alert("Por favor completa todos los campos.");
    return; // Detiene la ejecución si falta algún dato
  }

  // Validación: la fecha de entrega (ETA) no puede ser anterior a la fecha actual
  const fechaActual = new Date().toISOString().split('T')[0]; // Obtiene la fecha actual (solo la parte YYYY-MM-DD)
  if (eta < fechaActual) {
    alert("La fecha de entrega no puede ser anterior a hoy.");
    return;
  }

  // Registrar la fecha y hora exactas de creación de la tarea
  const fechaCreacion = new Date().toLocaleString();

  // Crear objeto con todos los datos de la nueva tarea
  const nuevaTarea = {
    titulo,
    descripcion,
    responsable,
    eta,
    prioridad,
    estado,
    fechaCreacion
  };

  // Recuperar tareas existentes desde localStorage, o inicializar como array vacío si no hay ninguna
  let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

  // Agregar la nueva tarea al listado existente
  tareas.push(nuevaTarea);

  // Guardar el arreglo actualizado en localStorage
  localStorage.setItem("tareas", JSON.stringify(tareas));

  // Limpiar los campos del formulario para preparar la próxima entrada
  document.getElementById("titulo").value = '';
  document.getElementById("descripcion").value = '';
  document.getElementById("responsable").value = '';
  document.getElementById("eta").value = '';
  document.getElementById("prioridad").value = 'Baja';
  document.getElementById("estado").value = 'Pendiente';

  // Redirigir al panel de control tras agregar la tarea
  window.location.href = "dashboard.html";
}