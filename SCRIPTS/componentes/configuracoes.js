class Configuracoes extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
        <img 
          class="iconeFechar"
          src="/IMG/fechar.svg" 
          alt="Fechar" 
          onclick="openDiv(); 
          elementoAberto = 'inicio'">

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