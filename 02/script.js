let lista = document.getElementById("lista");
let botaoAdicionar = document.getElementById("adicionar");
let botaoRemover = document.getElementById("remover");

botaoAdicionar.onclick = function() {
    let novoItem = document.createElement("li"); 
    novoItem.textContent = "Novo Item"; 
    lista.appendChild(novoItem); 
};

botaoRemover.onclick = function() {
    if (lista.lastChild) { 
        lista.removeChild(lista.lastChild);
    }
}