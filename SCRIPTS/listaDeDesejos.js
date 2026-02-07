const listaDesejos = {};
const table = document.getElementById("tabelaListaDesejos");
const btnListaDesejo = document.getElementById("adicionarDesejo");

function salvarDesejos(id) {
  if (listaDesejos["jogo" + id] != undefined) {
    return;
  } else {
    listaDesejos["jogo" + id] = id;
  }

  criarElementoLista(id);
  salvarDesejoLocalStorage();
}

function criarElementoLista(id) {

  const jogo = jogosInfo[id - 1];

  if (jogo.id == listaDesejos["jogo"+id]) {
    table.innerHTML += `
            <tr id="id${jogo.id}">
                <td style="display: flex;">
                    <img src="${jogo.imagem}">
                    <div>
                        <div>
                            <h2>${jogo.nome}</h2>
                            <h4>${jogo.preco ? formatarPreco(jogo.preco) : "Jogo ainda não foi disponibilizado"}</h4>
                        </div>
                        <button 
                          class="buttonExcluirDesejo"
                          onclick="apagarItem(${jogo.id}, 'id${jogo.id}')"  
                        >Excluir</button>
                    </div>
                </td>
            </tr>
                            
        `;
  }
}

function apagarItem(id, trId) {
  document.getElementById(trId).remove();
  delete listaDesejos["jogo"+id]
  salvarDesejoLocalStorage()
}

function salvarDesejoLocalStorage() {
  const stringDesejos = JSON.stringify(listaDesejos)
  localStorage.setItem("desejos", stringDesejos);
}

function carregarLocalStorage() {
  const stringDesejosSalvos = localStorage.getItem("desejos") 
  const objDesejosSalvos = JSON.parse(stringDesejosSalvos)

  for(let key in objDesejosSalvos){
    salvarDesejos(objDesejosSalvos[key])
  }
}

setTimeout(carregarLocalStorage, 200)