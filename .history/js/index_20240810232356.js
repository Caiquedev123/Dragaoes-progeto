
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {

    const botaoSelecionado = document.querySelector('.selecionado')
    botaoSelecionado.classList.remove('selecionado');

    botao.classList.add("selecionado");

    const mudarImagem = document.querySelector('.ativa')
    mudarImagem.classList.remove('ativa')

    imagens[indice].classList.add('ativa')

    const informacoesAtiva = document.querySelector('.informacoes.ativa')

    informacoesAtiva
  });
});

