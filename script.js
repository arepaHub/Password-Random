const passwordDisplay = document.getElementById('passwordDisplay');
const generateButton = document.getElementById('generateButton');
const copyButton = document.getElementById('copyButton');
const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}:"<>?[];,./`~';

const longitudContraseña = 14; // Longitud de la contraseña

function generarContraseña() {
    let contraseña = '';
    for (let i = 0; i < longitudContraseña; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres[indiceAleatorio];
    }
    return contraseña;
}

generateButton.addEventListener('click', () => {
    const nuevaContraseña = generarContraseña();
    passwordDisplay.textContent = nuevaContraseña;
});

copyButton.addEventListener('click', () => {
    const contraseña = passwordDisplay.textContent;

    // Usa la API de Clipboard para copiar la contraseña
    navigator.clipboard.writeText(contraseña)
        .then(() => {
        })
        .catch(() => {

        });
});