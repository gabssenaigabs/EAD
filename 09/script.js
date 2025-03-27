function exibicao() {
    const agora = new Date();
    const dataHora = agora.toLocaleString();
    document.getElementById('dataHora').textContent = 'Data e Hora Atual: ' + dataHora;
}
