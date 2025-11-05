const button = document.getElementById("btn_actim");

button.addEventListener("click", function(event) {
    console.log(event);
    alert("¡Hiciste clic!")
})


const form = document.getElementById("formulario");
const boton = document.getElementById("form-submit");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const correo = document.getElementById("correo").value;
    alert("Formulario enviado con el correo: " + correo);
    console.log("Correo ingresado:", correo);
});

