class Footer extends HTMLElement{
  connectedCallback(){
    this.innerHTML = `
        <div>
            <h5>Desenvolvido por:</h5>
            <a target="_blank" href="https://github.com/Felipe-Gabriel-Souza-Goncalves">
                <div class="desenvolvedorFooter">
                    <img class="imgFooter" src="IMG/github-mark-white.png" alt="Github">
                    <p>Felipe</p>
                </div>
            </a>
        </div>
        <div>
            <p>Todos os direitos reservados, 2026</p>
        </div>
    `
  }
}

customElements.define("main-footer", Footer)