let contagem = 0; 
const botao = document.getElementById("botao"); 

botao.addEventListener("click", function() {
    contagem++; 
    texto.textContent = contagem;  
});
