class Header extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
        <img class="iconHeader" src="IMG/configuracao.svg"
        alt="Configurações" onclick="openDiv('div-config')">
        
        <a href="index.html">
            <img src="IMG/logotipo.png" id="logo" alt="Logo">
            <span>GamesIndies</span>
        </a>
        <img class="iconHeader" src="IMG/usuario.svg"
        alt="Usuário" onclick="openDiv('div-user')">
    `
  }
}

customElements.define("main-cabecalho", Header)