function ordem() {
    const lista = document.getElementById("lista");
    const itens = lista.getElementsByTagName("li");

    const firstItem = itens[0]; 
    lista.appendChild(firstItem); 
};
