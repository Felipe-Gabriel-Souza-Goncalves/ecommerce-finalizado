class Configuracoes extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
        <h1 onclick="openDiv(); elementoAberto = 'inicio'">X</h1>
        <button 
          class="button-config"
          onclick='manageConfig("hasHighContrast", mudarContraste);'>
        Alto contraste</button>
        <button 
          class="button-config"
          onclick='manageConfig("hasAnimation", mudarAnimacao);'>
        Sem animações</button>
        <button 
          class="button-config"
          onclick='manageConfig("hasBlur", mudarBlur);'>
        Blur ativado</button>
    `
  }
}

customElements.define("configuracoes-gerais", Configuracoes)