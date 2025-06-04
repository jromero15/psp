function login() {
  const usuario = document.getElementById("usuario").value.trim();
  const contrasena = document.getElementById("contrasena").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  const credenciales = {
    usuario: "usuario1",
    contrasena: "contrasena1",
  };

  if (usuario === credenciales.usuario && contrasena === credenciales.contrasena) {
    localStorage.setItem("logueado", "true");
    localStorage.setItem("usuarioActual", usuario);
    window.location.href = "dashboard.html";
  } else {
    errorMsg.textContent = "Usuario o contraseña incorrectos.";
  }
}