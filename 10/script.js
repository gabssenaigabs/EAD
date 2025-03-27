function carregamento() {
    let barra = document.getElementById("barra");
    let valor = 0;

    let intervalo = setInterval(function () {
        valor += 1;
        progressBar.value = valor;

        if (valor >= 100) {
            clearInterval(intervalo);
            alert("Carregamento Concluído!");
        }
    }, 100);
}
