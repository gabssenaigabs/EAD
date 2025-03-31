function validarFormulario(event) {
    const campoTexto = document.getElementById("campoTexto");
    const erro = document.getElementById("erro");

    if (campoTexto.value === "") {
        erro.style.display = "block";
        event.preventDefault();
    } else {
        erro.style.display = "none";
    }
}
function validar() {
    const nome = document.getElementById("nome").value;
    
    if (!nome) {
        document.getElementById("erro").style.display = "block";
        return false;
    }
    
    return true;
}
