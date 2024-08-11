
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {

    newFunction();

    botao.classList.add("selecionado");

    const mudarImagem = document.querySelector('.ativa')
    mudarImagem.classList.remove('ativa')

    imagens[indice].classList.add('ativa')

    const informacoesAtiva = document.querySelector('.informacoes.ativa')

    informacoesAtiva.classList.remove('ativa')

    informacoes[indice].classList.add('ativa')
  });
});

function newFunction() {
  const botaoSelecionado = document.querySelector('.selecionado');
  botaoSelecionado.classList.remove('selecionado');
}

