// Referencias a los contenedores y botones
const loginContainer = document.getElementById("login-container");
const registerContainer = document.getElementById("register-container");
const container = document.querySelector(".container");

const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");

const showRegisterLink = document.getElementById("show-register");
const showLoginLink = document.getElementById("show-login");

// Simulación de una base de datos (almacenamiento local)
let users = JSON.parse(localStorage.getItem("users")) || [];

// Cambiar entre login y registro
showRegisterLink.addEventListener("click", () => {
  container.classList.remove("active-login");
  container.classList.add("active-register");

  loginContainer.classList.remove("active");
  registerContainer.classList.add("active");
});

showLoginLink.addEventListener("click", () => {
  container.classList.remove("active-register");
  container.classList.add("active-login");

  registerContainer.classList.remove("active");
  loginContainer.classList.add("active");
});

// Registro
registerBtn.addEventListener("click", () => {
  const username = document.getElementById("register-username").value.trim();
  const password = document.getElementById("register-password").value.trim();

  if (username && password) {
    const userExists = users.some((user) => user.username === username);
    if (userExists) {
      alert("Usuario ya registrado.");
    } else {
      users.push({ username, password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("¡Registro exitoso!");
      showLoginLink.click(); // Cambiar automáticamente a la pantalla de login
    }
  } else {
    alert("Por favor, completa todos los campos.");
  }
});

// Login
loginBtn.addEventListener("click", () => {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value.trim();

  const user = users.find((user) => user.username === username && user.password === password);
  if (user) {
    alert("Inicio de sesión exitoso.");
    window.location.href = "chat.html";  // Redirige al chat
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
});
