class Promocao extends HTMLElement{
  set data(jogo){

    if(!jogo || Object.keys(jogo).length == 0){
      this.innerHTML = ""
    } else{
      const desconto = parseFloat(this.getAttribute("desconto"))
      const precoFinal = (jogo.preco * (1 - desconto/100)).toFixed(2)

      this.innerHTML = `
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
