function ValidarInformacion(){
    let nombre = document.getElementById("nombre").value;
    let Email = document.getElementById("email").value;
    let Asunto = document.getElementById("asunto").value;
    let Descripcion = document.getElementById("mensaje").value;

    if (nombre === "") {
        alert("El nombre es obligatorio.");
        return false;
    }

    if (Email === "") {
        alert("El email es obligatorio.");
        return false;
    } else if (!Email.includes("@") || !Email.includes(".")) {
        alert("El email no es válido.");
        return false;
    }

    if (Asunto === "") {
        alert("El asunto es obligatorio.");
        return false;
    }

    if (Descripcion === "") {
        alert("La descripción es obligatoria.");
        return false;
    }
    
    alert("Formulario enviado exitosamente.");
    return true;
}