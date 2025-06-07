# 📝 Gestor de Tareas con LocalStorage

Este es un proyecto web simple de gestión de tareas (To-Do List), desarrollado con **HTML, CSS y JavaScript**, que permite a un usuario autenticarse, agregar, editar, visualizar y eliminar tareas, todo usando almacenamiento local (`localStorage`).

## 🔗 Acceso al proyecto

👉 Puedes probar la aplicación directamente en el siguiente enlace:

**[https://jromero15.github.io/psp/](https://jromero15.github.io/psp/)**

> 🧑‍💻 **Credenciales de acceso:**
> - **Usuario:** `usuario1`  
> - **Contraseña:** `contrasena1`

---

## 🚀 Funcionalidades principales

- 🔐 **Inicio de sesión** (login simple con localStorage)
- 🗂️ **Panel de tareas** con vista general
- ➕ **Agregar tareas**
- ✏️ **Editar tareas existentes**
- ❌ **Eliminar tareas** con confirmación por modal
- 📦 **Persistencia local** sin necesidad de servidor ni base de datos


## 🧰 Tecnologías utilizadas

- **HTML**
- **CSS**
- **JavaScript**
- **LocalStorage**
- **[Flatpickr](https://flatpickr.js.org/)** para selección de fecha

## 🗂️ Estructura de archivos

```plaintext
├── index.html # Login
├── dashboard.html # Panel principal con tareas
├── crear.html # Panel principal con tareas
├── editar.html # Edición de tarea
│
├── css/
│ ├── styles.css
│
├── js/
│ ├── login.js
│ ├── dashboard.js
│ ├── crear.js
│ ├── editar.js
│ └── eliminar.js
 ```