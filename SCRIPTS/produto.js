// Fundo do popup de compra
const bgPopupProduto = document.getElementById("backgroundPopUpProduto");

// Elementos que serão completados com informações do produto
const imgJogo = document.getElementById("boxImgJogo");
const nomeJogo = document.getElementById("nomeJogo");
const estudioJogo = document.getElementById("estudioJogo")
const lancamentoJogo = document.getElementById("dataLancamentoJogo");
const avaliacaoJogo = document.getElementById("avaliacaoJogo");
const precoJogo = document.getElementById("precoJogo");

// Botões de ação no produto
const btnComprarJogo = document.getElementById("comprarJogo");

var listaDeDesejos = [];
listaDeDesejos.length = 14;
listaDeDesejos.fill(0);

var idJogoJson;

function buscar(id) {
  apagarPopupPromocao();

  // Função que carrega o JSON para consumir a API e processa os dados JSON
  const jogo = jogosInfo[id - 1];

  document.body.style.overflowY = "hidden";
  bgPopupProduto.style.display = "flex";

  imgJogo.style.background = `url(${jogo.imagem})`;
  nomeJogo.textContent = jogo.nome;
  estudioJogo.textContent = jogo.estudio

  if (jogo.data_lancamento != null) {
    lancamentoJogo.innerHTML = jogo.data_lancamento;
    avaliacaoJogo.innerHTML = jogo.avaliacao;
    precoJogo.innerHTML = formatarPreco(jogo.preco);

    if (jogo.id == gameIndex + 1) {
      const desconto = parseInt(promocao.getAttribute("desconto"));
      const precoFinal = jogo.preco * (1 - desconto / 100);

      precoJogo.innerHTML = `
                          <strike>${formatarPreco(jogo.preco)}</strike> &nbsp; 
                                  ${formatarPreco(precoFinal)}
                        `;
    }

    btnComprarJogo.disabled = false;
  } else {
    lancamentoJogo.innerHTML = "Data de lançamento indefinida";
    avaliacaoJogo.innerHTML = "";
    precoJogo.innerHTML = "O jogo ainda não possui preço definido!";

    btnComprarJogo.disabled = true;
  }

  listaDeDesejos.includes(id) ? (btnListaDesejo.checked = true) : (btnListaDesejo.checked = false);
  idJogoJson = id;
}

function closePopUpProduto() {
  bgPopupProduto.style.display = "none";
  document.body.style.overflowY = "auto";
  salvarDesejos(idJogoJson);
}

function comprou() {
  Swal.fire({
    title: "Compra realizada ",
    text: "a compra do jogo foi realizada com sucesso",
    icon: "success",
  });
}

async function carregarJogos(criterio) {
  await fetch("jogos.json")
    .then((response) => response.json())
    .then((jogos) => {
      let jogosSorted = [];

      switch (criterio) {
        case "popularidade":
          jogosSorted = jogos.slice(0, 10);

          break;
        case "preco":
          jogosSorted = jogos
            .filter((jogo) => jogo.preco != null)
            .sort((a, b) => a.preco - b.preco)
            .slice(0, 10);

          break;
        case "recente":
          const parseData = (dataStr) => {
            const [dia, mes, ano] = dataStr.split("/");
            return new Date(`${ano}-${mes}-${dia}`);
          };

          jogosSorted = jogos
            .filter((jogo) => jogo.data_lancamento != null)
            .sort((a, b) => parseData(b.data_lancamento) - parseData(a.data_lancamento))
            .slice(0, 10);

          break;
        case "avaliacao":
          jogosSorted = jogos
            .filter((jogo) => jogo.avaliacao != null)
            .sort((a, b) => parseFloat(b.avaliacao) - parseFloat(a.avaliacao))
            .slice(0, 10);
          break;
        case "lancamento":
          jogosSorted = jogos.filter((jogo) => jogo.data_lancamento == null);

          break;
        default:
          break;
      }

      jogosSorted.forEach((jogo) => {
        
        const fragmento = document.createDocumentFragment()
        fragmento.innerHTML = ""
        const numStars = Math.round(parseFloat(jogo.avaliacao))
        for (let i = 0; i < numStars; i++) {
            fragmento.innerHTML += "<img src='IMG/estrela.png' width='14px' alt='star'>";
        }

        document.getElementById(criterio).innerHTML += `
            <div 
                class="produto"
                style="background-image: url(${jogo.imagem})"
                onclick="buscar(${jogo.id})"
            >
                <div class="informacaoTexto">
                    <h2>${jogo.nome}</h2>
                    ${
                        criterio != "lancamento" ?
                        `<h4>
                            <span>${formatarPreco(jogo.preco)}</span> &nbsp; | &nbsp;
                            <span>${jogo.avaliacao} - ${fragmento.innerHTML}</span>
                        </h4>` : ""
                    }
                </div>
            </div>
        `
      });
    });
}

carregarJogos("preco");
carregarJogos("recente");
carregarJogos("popularidade");
carregarJogos("avaliacao");
carregarJogos("lancamento");
