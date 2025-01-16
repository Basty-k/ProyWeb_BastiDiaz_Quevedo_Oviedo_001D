
// Obtener elementos del DOM
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const mensajeSesion = document.getElementById('mensaje-sesion');
const usuarioBienvenida = document.getElementById('usuario-bienvenida');

// Manejar el envío del formulario de login
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        mensajeSesion.textContent = 'Sesión iniciada correctamente';
        mensajeSesion.style.color = 'green';
        localStorage.setItem('usuarioActivo', user.username); // Almacena solo el nombre de usuario
        usuarioBienvenida.textContent = `Bienvenido, ${user.username}`;
    } else {
        mensajeSesion.textContent = 'Usuario o contraseña incorrectos';
        mensajeSesion.style.color = 'red';
    }
});

// Manejar el envío del formulario de registro
registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('register-gmail').value;
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(u => u.username === username);

    if (!userExists) {
        users.push({ email, username, password });
        localStorage.setItem('users', JSON.stringify(users));
        mensajeSesion.textContent = 'Registro exitoso, por favor inicia sesión';
        mensajeSesion.style.color = 'green';
    } else {
        mensajeSesion.textContent = 'Nombre de usuario ya existe';
        mensajeSesion.style.color = 'red';
    }
});

// Verificar si hay un usuario activo al cargar la página
const usuarioActivo = localStorage.getItem('usuarioActivo'); // Obtiene solo el nombre de usuario
if (usuarioActivo) {
    usuarioBienvenida.textContent = `Bienvenido, ${usuarioActivo}`; // Muestra el nombre directamente
}
function togglePasswordVisibility(passwordFieldId) {
    const passwordField = document.getElementById(passwordFieldId);
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text'; // Cambiar a texto para mostrar la contraseña
    } else {
        passwordField.type = 'password'; // Cambiar a contraseña para ocultarla
    }
}
