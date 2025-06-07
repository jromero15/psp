function login() {
  // Obtener valores del formulario
  const usuario = document.getElementById("usuario").value.trim();      // Usuario ingresado
  const contrasena = document.getElementById("contrasena").value.trim(); // Contraseña ingresada
  const errorMsg = document.getElementById("errorMsg"); // Contenedor para mostrar errores

  // Credenciales válidas (hardcodeadas solo para prototipo)
  const credenciales = {
    usuario: "usuario1",
    contrasena: "contrasena1",
  };

  // Verificar si las credenciales coinciden
  if (usuario === credenciales.usuario && contrasena === credenciales.contrasena) {
    // Guardar estado de sesión en localStorage
    localStorage.setItem("logueado", "true");
    localStorage.setItem("usuarioActual", usuario);

    // Redireccionar al panel principal
    window.location.href = "dashboard.html";
  } else {
    // Mostrar mensaje de error si no coinciden
    errorMsg.textContent = "Usuario o contraseña incorrectos.";
  }
}
