# Micro Front-end com single-spa

Este repositório armazena a estrutura inicial de um exemplo de projeto utilizando micro front-end com [single-spa](https://single-spa.js.org/) e  [ReactJs](https://reactjs.org/).

## Funcionalidades
- Compartilhamento de componentes entre micro front-ends
- Camada de autenticação para impedir acesso aos micro front-ends privados
- Compartilhamento de estado
- Compartilhamento de style guide

## Bibliotecas
- [single-spa](https://single-spa.js.org/) - Roteamento javascript para contrução de micro front-end
- [stitches](https://stitches.dev/) - CSS-in-JS para contrução de componentes e style guide
- [zustand](https://zustand.surge.sh/) - Gerenciamento de estado para React
- [yup](https://www.npmjs.com/package/yup) - Biblioteca para validação de dados dos formulários
- [react-hook-form](https://react-hook-form.com/) - Biblioteca para gerenciamento de formulários
- [reactJs](https://reactjs.org/) - Biblioteca javascript para construir interfaces de usuário

## Instalando dependências e iniciando o projeto
O projeto foi configurado utilizando [lerna](https://lerna.js.org/) e [yarn workspaces](https://yarnpkg.com/features/workspaces), então todos os comandos devem ser feitos a partir da raiz do projeto.

Instalando dependências:
```shell
yarn install
```
Iniciando o projeto:
```shell
yarn start
```

Após iniciar o projeto, basta acessar o link http://localhost:9000 para ter acesso ao root da aplicação.

## Sobre o projeto
Temos 8 oito micro front-ends criados no projeto, ambos iniciam em paralelo quando o comando `yarn start` é executado.
- [@foxkey/root-config](http://localhost:9000) - Root do projeto, responsável por gerenciar as dependências compartilhadas na aplicação.
- [@foxkey/gateway](http://localhost:9001) - Responsável pelo gerenciamento de autenticação e rotas dos micro front-ends
- [@foxkey/design-system](http://localhost:9002) - Armazena toda a style guide e componentes de layout do projeto
- [@foxkey/global-state](http://localhost:9003) - Responsável por gerenciar o estado global da aplicação. Atualmente está armazenando os dados de autenticação do usuário
- [@foxkey/account](http://localhost:9004) - Responsável pelo login, cadastro e reset de senha dos usuários
- [@foxkey/inventory](http://localhost:9005) - Controle de caixa
- [@foxkey/hr](http://localhost:9006) - Recursos humanos
- [@foxkey/financial](http://localhost:9007) - Financeiro
