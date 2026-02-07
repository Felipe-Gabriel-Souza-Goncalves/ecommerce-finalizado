

class Login extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
        <!-- SOMENTE UTILIZADO POR SER COMPONENTE ÚNICO -->
        <link rel="stylesheet" href="CSS/login.css">


        <h2 id="displayNomeUsuario">...</h2>
        <h3 id="displayEmail">...</h3>
        <button id="buttonLogarSair" onclick="botaoSairLogar()">...</button>
        <button id="buttonFechar" onclick="openDiv()">Fechar</button>
    `
  }
}

customElements.define("login-usuario", Login)

const elNome = document.getElementById("displayNomeUsuario")
const elEmail= document.getElementById("displayEmail")
const elButton = document.getElementById("buttonLogarSair")

function showUserInfo(){
    (config.loggedIn && config.name != undefined && elNome != null)
                ? elNome.innerText = config.name : elNome.innerText = "Usuário";
    (config.loggedIn && config.email != undefined && elEmail != null)
                ? elEmail.innerText = config.email : elEmail.innerText = "Email não definido";

    config.loggedIn ? elButton.innerText = "Sair" : elButton.innerText = "Logar"
}

setTimeout(showUserInfo, 200)
