// Función para validar que el campo Nombre no esté en blanco o vacío
function validarNombre() {
    const nombre = document.forms["form"]["nombre"].value.trim();

    if (nombre === "") {
        mostrarError("nombre", "El campo Nombre no puede estar en blanco.");
        return false;
    } else if (nombre.length > 50) {
        mostrarError("nombre", "El campo Nombre no puede contener más de 50 caracteres.");
        return false;
    }else if (nombre.length < 2) {
        mostrarError("nombre", "El campo Nombre no puede contener menos de 2 caracteres.");
        return false;
    }

    ocultarError("nombre");
    return true;
}

// Función para validar el campo de correo electrónico
function validarEmail() {
    const email = document.forms["form"]["email"].value.trim();
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email === "") {
        mostrarError("email", "El campo Email no puede estar en blanco.");
        return false;
    } else if (!regex.test(email)) {
        mostrarError("email", "Por favor, ingrese una dirección de correo electrónico válida.");
        return false;
    }

    ocultarError("email");
    return true;
}

// Función para validar que ningún campo del formulario quede vacío
function validarFormulario() {
    const nombre = document.forms["form"]["nombre"].value;
    const email = document.forms["form"]["email"].value;
    const asunto = document.forms["form"]["asunto"].value;
    const mensaje = document.forms["form"]["mensaje"].value;

    if (nombre === "" || email === "" || asunto === "" || mensaje === "") {
        alert("Todos los campos son obligatorios. Por favor, complete todos los campos.");
        return false;
    }
    return true;
}

// Función para mostrar un mensaje de error específico
function mostrarError(campo, mensaje) {
    const errorElement = document.getElementById(`${campo}-error`);
    if (errorElement) {
        errorElement.textContent = mensaje;
        errorElement.style.color = "red"; // Cambiar el color del texto a rojo
        errorElement.style.display = "block";
    }
}

// Función para ocultar el mensaje de error
function ocultarError(campo) {
    const errorElement = document.getElementById(`${campo}-error`);
    if (errorElement) {
        errorElement.textContent = "";
        errorElement.style.display = "none";
    }
}

// Función principal que se ejecuta cuando se envía el formulario
function validarSubmit(event) {
    event.preventDefault();
    const nombreValido = validarNombre();
    const emailValido = validarEmail();

    if (nombreValido && emailValido && validarFormulario()) {
        // Aquí puedes enviar el formulario o realizar otras acciones
        alert("Formulario enviado con éxito.");
        document.forms["form"].reset();
    }
}

// Agregar el evento de envío del formulario
document.forms["form"].addEventListener("submit", validarSubmit);
