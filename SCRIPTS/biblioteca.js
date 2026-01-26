function carregarLoja() {
  fetch("jogos.json")
    .then((response) => response.json())
    .then((jogos) => {
      jogos.forEach((jogo) => {
        var divMae = document.createElement("div");
        divMae.classList.add("divMaeProduto");

        var div = document.createElement("div");
        div.style.background = `url(${jogo.imagem})`;
        div.classList.add("divImgProduto");

        var p = document.createElement("p");
        p.innerHTML = jogo.nome;

        divMae.appendChild(div);
        divMae.appendChild(p);
        document.querySelector("main").appendChild(divMae);
      });
    });
}

carregarLoja();

fetch("jogos.json")
  .then((response) => response.json())
  .then((dados) => {
    const promocao = document.getElementById("promocao");
    let index = 15;

    index++;
    index = index % dados.length;
    const rawDesconto = Math.floor(Math.random()*15)*5+10


    promocao.setAttribute("desconto", rawDesconto)
    promocao.data = dados[index];

    setInterval(() => {
      do{
        index++;
        index = index % dados.length;
      } while(dados[index].data_lancamento == null)

      const rawDesconto = Math.floor(Math.random()*15)*5+10

      promocao.setAttribute("desconto", rawDesconto)
      promocao.data = dados[index];
    }, 5000);
});
