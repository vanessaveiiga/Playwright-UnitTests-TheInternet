# Automação de Testes com Playwright e JavaScript

Este repositório contém um projeto de automação de testes utilizando [Playwright](https://playwright.dev/) com JavaScript. Ele foi criado para automatizar e validar cenários de teste em aplicações web.

---

## Pré-requisitos

- Node.js (versão 16 ou superior)
- NPM ou Yarn (gerenciador de pacotes)
- Git

---

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/vanessaveiiga/automacao.git
   ```

2. Navegue para o diretório do projeto:
   ```bash
   cd automacao
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Configure o ambiente (se necessário, crie um arquivo `.env` com variáveis de ambiente).

---

## Como Executar os Testes

Execute o comando abaixo para rodar todos os testes:
```bash
npx playwright test
```

Para abrir a interface gráfica do Playwright:
```bash
npx playwright show-report
```

---

## Estrutura do Projeto

- `tests/`: Contém os arquivos de testes.
- `pages/`: Modelos de páginas (Page Object Model).
- `playwright.config.js`: Configuração do Playwright.

---

## Tecnologias Usadas

- [Playwright](https://playwright.dev/) - Framework de automação de testes.
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem de programação.
- [Node.js](https://nodejs.org/) - Ambiente de execução para JavaScript.

---

## Contribuição

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nome-da-feature`).
3. Commit suas mudanças (`git commit -m "Adicionar nova funcionalidade"`).
4. Envie para o repositório remoto (`git push origin feature/nome-da-feature`).
5. Abra um Pull Request.

---

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

