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

  const nuevaTarea = {
    titulo,
    descripcion,
    responsable,
    eta,
    prioridad,
    estado,
    fechaCreacion
  };

  // Guardar en localStorage
  let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
  tareas.push(nuevaTarea);
  localStorage.setItem("tareas", JSON.stringify(tareas));

  // Redirigir al dashboard
  window.location.href = "dashboard.html";
}