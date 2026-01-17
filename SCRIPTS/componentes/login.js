class Login extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
        <h2 id="displayNomeUsuario">...</h2>
        <h3 id="displayEmail">...</h3>
        <button id="buttonLogarSair" onclick="botaoSairLogar()">...</button>
        <button id="buttonFechar" onclick="openDiv()">Fechar</button>
    `
  }
}

customElements.define("login-usuario", Login)