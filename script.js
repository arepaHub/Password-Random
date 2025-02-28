// Función para generar la contraseña
document.getElementById("generateButton").addEventListener("click", function () {
    const soloNumeros = document.getElementById("soloNumeros").checked;
    const soloLetras = document.getElementById("soloLetras").checked;
    const incluirNumeros = document.getElementById("incluirNumeros").checked;
    const incluirSimbolos = document.getElementById("incluirSimbolos").checked;

    // Definir los caracteres permitidos
    let caracteres = "";

    if (soloNumeros) {
        // Solo números
        caracteres = "0123456789";
    } else if (soloLetras) {
        // Solo letras
        caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
        // Letras siempre están incluidas
        caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        // Agregar números si la casilla está marcada
        if (incluirNumeros) {
            caracteres += "0123456789";
        }

        // Agregar símbolos si la casilla está marcada
        if (incluirSimbolos) {
            caracteres += "!@#$%^&*";
        }
    }

    // Generar la contraseña
    let password = "";
    for (let i = 0; i < 12; i++) { // Longitud de la contraseña: 12 caracteres
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        password += caracteres[randomIndex];
    }

    // Mostrar la contraseña generada
    document.getElementById("passwordDisplay").textContent = password;
});

// Función para copiar al portapapeles
document.getElementById("copyButton").addEventListener("click", function () {
    const passwordDisplay = document.getElementById("passwordDisplay").textContent;

    // Verificar si la contraseña no es la predeterminada
    if (passwordDisplay === "Your Password") {
        return;
    }

    // Copiar al portapapeles
    navigator.clipboard.writeText(passwordDisplay)
        .then(() => {
        })
        .catch((err) => {
        });
});

// Lógica para desactivar opciones incompatibles
document.getElementById("soloNumeros").addEventListener("change", function () {
    if (this.checked) {
        document.getElementById("soloLetras").checked = false;
        document.getElementById("incluirNumeros").checked = false;
        document.getElementById("incluirSimbolos").checked = false;
    }
});

document.getElementById("soloLetras").addEventListener("change", function () {
    if (this.checked) {
        document.getElementById("soloNumeros").checked = false;
        document.getElementById("incluirNumeros").checked = false;
        document.getElementById("incluirSimbolos").checked = false;
    }
});

document.getElementById("incluirNumeros").addEventListener("change", function () {
    if (this.checked) {
        document.getElementById("soloNumeros").checked = false;
        document.getElementById("soloLetras").checked = false;
    }
});

document.getElementById("incluirSimbolos").addEventListener("change", function () {
    if (this.checked) {
        document.getElementById("soloNumeros").checked = false;
        document.getElementById("soloLetras").checked = false;
    }
});
