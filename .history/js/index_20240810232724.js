
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {

    selecionarBotao();

    botaoSelecionado(botao);

    const mudarImagem = document.querySelector('.ativa')
    mudarImagem.classList.remove('ativa')

    imagens[indice].classList.add('ativa')

    const informacoesAtiva = document.querySelector('.informacoes.ativa')

    informacoesAtiva.classList.remove('ativa')

    informacoes[indice].classList.add('ativa')
  });
});

function botaoSelecionado(botao) {
  botao.classList.add("selecionado");
}

function selecionarBotao() {
  const botaoSelecionado = document.querySelector('.selecionado');
  botaoSelecionado.classList.remove('selecionado');
}

