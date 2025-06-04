function login() {
  const usuario = document.getElementById("usuario").value.trim();
  const contrasena = document.getElementById("contrasena").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  const credenciales = {
    usuario: "usuario1",
    contrasena: "contrasena1"
  };

  if (usuario === credenciales.usuario && contrasena === credenciales.contrasena) {
    // Guardar sesión en localStorage (opcional)
    localStorage.setItem("logueado", "true");
    // Redirigir al dashboard
    window.location.href = "dashboard.html";
  } else {
    errorMsg.textContent = "Usuario o contraseña incorrectos.";
  }
}