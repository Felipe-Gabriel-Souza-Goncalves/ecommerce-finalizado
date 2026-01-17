class Aside extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <a href="produtos.html" class="ancora optionAside">
            <img class="iconOptionAside" src="IMG/produtos.svg" alt="icone produtos">
            <span>Produtos</span>
        </a>
        <a href="quemSomos.html" class="ancora optionAside">
            <img class="iconOptionAside" src="IMG/quemSomos.svg" alt="icone quem somos">
            <span>Quem somos</span>
        </a>
    `;

    if (window.location.pathname == "/produtos.html") {
      this.innerHTML += `
        <a class="ancora optionAside" onclick="openDiv('listaDeDesejos')">
            <img class="iconOptionAside" src="IMG/listaDesejos.svg" alt="icone lista de desejos">
            <span>Lista de desejos</span>
        </a>
      `;
    }
  }
}

customElements.define("navegacao-lateral", Aside)
