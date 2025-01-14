O typescript é para quando precisa detalhar o projeto (obrigatório)

O javascript é para quando o projeto não precisa ser detalhado.

* exemplos

const addTodo = (text, category) => { 
    axios.post(url, {
      text,
      category
    })
}

  NPM: serve para quando já existe o formato do projeto salvo no computador.(é um gerenciador de pacotes para o Node.js, usado para instalar bibliotecas e dependências, além de permitir a gestão e distribuição de pacotes de código. Ele pode ser usado tanto para criar novos projetos quanto para gerenciar dependências de projetos existentes.)

  NPX: serve para quando não existe o formato do projeto salvo, então ele irá busca-lo na internet.(é uma ferramenta que permite executar pacotes do NPM sem precisar instalá-los globalmente no seu sistema ou adicionar ao seu projeto. Ele pode buscar pacotes diretamente na internet e executá-los de maneira temporária, o que facilita a execução de ferramentas sem deixar resíduos no sistema.)

  Comandos:

    Para criar o projeto: npx create-next-app