class Promocao extends HTMLElement{
  set data(jogo){

    if(!jogo || Object.keys(jogo).length == 0){
      this.innerHTML = ""
    } else{
      const desconto = parseFloat(this.getAttribute("desconto"))
      const precoFinal = (jogo.preco * (1 - desconto/100)).toFixed(2)

      this.innerHTML = `
        <!-- SOMENTE UTILIZADO POR SER COMPONENTE ÚNICO -->
        <link rel="stylesheet" href="CSS/promocao.css">
        
      
        <img src="${jogo.imagem}" alt="${jogo.nome}">
        <div>
            <p>
              <strong>${jogo.nome}</strong>
              está com <strong>${desconto}%</strong> de desconto!
            </p>
            <span>
              De: <strike>${formatarPreco(jogo.preco)}</strike>
              para <strong><i>${formatarPreco(precoFinal)}</i>!!!</strong>
            </span>
        </div>
        <div id="fecharPromocao" onclick="promocao.data = ''">X</div>
      `
    }

  }

}

customElements.define("evento-promocao", Promocao)
const promocao = document.getElementById("promocao");

let gameIndex = undefined;

function gerarPromocao(){
  let jogosInfo;
    carregarJogos().then(dados =>{
        jogosInfo = dados;

        gameIndex = Math.floor(Math.random()*(jogosInfo.length - 1))
        const rawDesconto = Math.floor(Math.random()*15)*5+10
    
        do{
          gameIndex++;
          gameIndex = gameIndex % jogosInfo.length;
        } while(jogosInfo[gameIndex].data_lancamento == null)
    
        carregarPromocao(gameIndex, rawDesconto)
        setTimeout(apagarPopupPromocao, 7500)
    })
}

function carregarPromocao(gameIndex, rawDesconto){

    promocao.setAttribute("desconto", rawDesconto)
    promocao.data = jogosInfo[gameIndex];
    promocao.style.display = "flex"
    promocao.setAttribute("onclick", `buscar(${jogosInfo[gameIndex].id})`)
}

function apagarPopupPromocao(){
    promocao.style.display = "none"
    promocao.data = ""
}

setInterval(gerarPromocao, 90 * 1000) // 90seg