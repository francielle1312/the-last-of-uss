const imagens = document.querySelectorAll(".imagem");
const botoes = document.querySelectorAll(".botao");
for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", function () {
    // remover a classe "ativa" de todas as imagens
    for (let j = 0; j < imagens.length; j++) {
      imagens[j].classList.remove("ativa");
    }
    // adicionar a classe "ativa" na imagem selecionada
    imagens[i].classList.add("ativa");
    // remover a classe "selecionado" de todos os botões
    for (let k = 0; k < botoes.length; k++) {
      botoes[k].classList.remove("selecionado");
    }
    // adicionar a classe "selecionado" no botão clicado
    this.classList.add("selecionado");
  });
}