
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

botoesCarrossel.forEach((botao) => {
  botao.addEventListener("click", () => {
    

    botao.classList.add("selecionado");


  });
});

