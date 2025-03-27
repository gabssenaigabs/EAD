const imagem = document.getElementById("imagem");

imagem.addEventListener("mouseover", function() {
    imagem.src = "gatinho.png";
});

imagem.addEventListener("mouseout", function() {
    imagem.src = "gato.png";
});
