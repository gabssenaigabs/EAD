let contador = 0;
const botao = document.getElementById("botao");
const input = document.getElementById("input")

botao.addEventListener("click", function(){
    contador++;
    if (contador === 1) {
        input.type = "password";
    }
    else {
        input.type = "text";
    }
})