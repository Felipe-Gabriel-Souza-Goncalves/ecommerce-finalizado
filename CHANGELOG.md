# ATUALIZAÇÕES DO PROJETO - Versão [1.3.1]

## [1.3.1] - 06/02/2026:
- Correção de informações do usuário logado não aparecer
- Simplificação do código:
  - Lista de desejos (salvar, apagar, gerar itens)
  - Produtos (gerar jogos na loja)
  - Componente promocao/login
- Informação de estúdio ao clicar no jogo
- Arrumado problema de jogos da lista de desejos não salvar corretamente
- Exclusão de localStorage desnecessário ao alterar configuração de blur
- Jogos não lançados da lista de desejos não tem mais preço "null" ou "--,--"
- Alterações de design nos carrosseis de produtos
- Novas "const" tipo HTMLElement para evitar busca desnecessária de DOM
- Redução de document.createElement() para concatenação de innerHTML (**O motivo da troca foi por legibilidade, já que os dados utilizados não podem ser alterados pelo usuário**)

## [1.3] - 06/02/2026:
- Evento de promoção
  - Ocorre a cada 90 segundos
  - Gera um desconto de 15%-85%
  - Altera a tela de compra do jogo

## [1.2.3] - 25/01/2026:
- Progressos e testes em novo evento/componente promoção
- Mudanças mínimas de código inutilizado
- Footer diminuído

## [1.2.2] - 16/01/2026:
- Otimização de código via componentização
**HTML componentizado:**
  - Header
  - Footer
  - Navegação (aside)
  - Configurações
  - Login

## [1.2.1] - 30/08/2025:
- Alterações globais de CSS
  - Alterações de valores de atributos
  - Redução de redundância

## [1.2] - 31/07/2025:
 - Resposta do números de jogos que contém ao menos uma categoria selecionada
 - Novas 3 seções de produtos:
   - Para lançar
   - Maiores avaliações
   - Melhores preços
 - Otimização do código e geração de produto por json
 - Mais 15 jogos para serem utilizados na loja (nem todos foram utilizados ainda)
 - Mudança do header
 - Novo favicon

## [1.1.1] - 16/12/2024:
 - Mudança na responsividade
 - Progresso em nova página pendente (biblioteca.html)

## [1.1] - 15/12/2024:
 - Uso simples para filtrar as categorias na página principal, as categorias ainda não geram resultado (em progresso...)
