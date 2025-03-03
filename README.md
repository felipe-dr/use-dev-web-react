<p align="center">
  <img src="https://github.com/felipe-dr/assets/blob/main/alura/escola-front-end.png?raw=true" alt="Alura cursos: front-end" />
  <hr>
  <h1 align="center">Use Dev</h1>
  <p align="center">Projeto desenvolvido durante o curso: <strong>SOLID aplicado ao React: Melhorando a Modularidade e Flexibilidade do Código</strong>.</p>
</p>

<p align="center">
  <img src="https://img.shields.io/github/repo-size/felipe-dr/use-dev-web-react?style=for-the-badge&color=4e5acf" alt="Repo size" />
  <a aria-label="Last Commit" href="https://github.com/felipe-dr/use-dev-web-react/commits/main">
    <img src="https://img.shields.io/github/last-commit/felipe-dr/use-dev-web-react?style=for-the-badge&color=4e5acf" alt="Last commit on GitHub" />
  </a>
  <img src="https://img.shields.io/badge/license-MIT-4e5acf?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/badge/status-concluído-brightgreen?style=for-the-badge" alt="Status" />
</p>

<p align="center">
  <a target="_blank" href="https://vite.dev/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=orange&label=Vite&message=Build&logo=vite" alt="Vite" />
  </a>
</p>

<p align="center">
  <a target="_blank" href="https://react.dev/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=blue&label=React&message=TS&logo=react" alt="React.dev" />
  </a>
  <a target="_blank" href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=blue&label=Typescript&message=TS&logo=typescript" alt="Typescript.org" />
  </a>
  <a target="_blank" href="https://github.com/JedWatson/classnames">
    <img src="https://img.shields.io/static/v1?style=plastic&color=blue&label=Classnames&message=TS" alt="Classnames" />
  </a>
  <a target="_blank" href="https://axios-http.com/ptbr/docs/intro">
    <img src="https://img.shields.io/static/v1?style=plastic&color=blue&label=Axios&message=TS&logo=axios" alt="Axios" />
  </a>
  <a target="_blank" href="https://eslint.org/">
    <img src="https://img.shields.io/static/v1?style=plastic&color=blue&logoColor=red&label=ESLint&message=JS&logo=eslint" alt="Eslint.org" />
  </a>
  <a target="_blank" href="https://github.com/sindresorhus/globals#readme">
    <img src="https://img.shields.io/static/v1?style=plastic&color=blue&label=Globals&message=JS" alt="Globals" />
  </a>
</p>

<p align="center">
 <a target="_blank" href="https://www.npmjs.com/package/sass-embedded">
    <img src="https://img.shields.io/static/v1?style=plastic&color=db748e&label=Sass Embedded&message=STYLE&logo=sass" alt="CSS Modules" />
  </a>
 <a target="_blank" href="https://github.com/css-modules/css-modules">
    <img src="https://img.shields.io/static/v1?style=plastic&color=db748e&label=CSS Modules&message=STYLE&logo=cssmodules" alt="CSS Modules" />
  </a>
</p>

## Índice

<ol>
  <li><a href="#-sobre">Sobre</a></li>
  <li><a href="#-funcionalidades">Funcionalidades</a></li>
  <li><a href="#-como-executar">Como executar</a></li>
  <li><a href="#-tecnologias">Tecnologias</a></li>
  <li><a href="#-autor">Autor</a></li>
  <li><a href="#-licença">Licença</a></li>
</ol>

## 📑 Sobre

O Use Dev é um projeto de e-commerce já existente e refatorado que aborda todos os cinco princípios de design, tais como: **Responsabilidade Única**, **Aberto/Fechado**, **Substituição de Liskov**, **Segregação de Interfaces** e **Inversão de Dependência**. Assim como a estruturação de **componentes** e **hooks customizados** de **forma modular**, **reutilizável** e **testável**. Este projeto demonstra como aplicar os princípios **SOLID** para criar uma base de **código flexível**, **desacoplada** e **escalável**.

## ⚙ Funcionalidades

- [x] Listagem de categorias e produtos
- [x] Exibição do detalhes do produto
- [x] Detalhes do carrinho de compras

Refatoração com técnias aplicadas

- [x] **SRP ( Responsabilidade Única ):** componentes `Button` e `Input` apenas renderizam a `label`, sem lógica extra.
- [x] **OCP ( Aberto/Fechado ):** extensível para novos comportamentos sem alterar o código base dos componentes.
- [x] **LSP ( Substituição de Liskov ):** componentes podem ser trocados por versões especializadas sem quebrar a lógica.
- [x] **ISP ( Segregação de Interfaces ):** interfaces de `props` incluem apenas o necessário, mantendo os componentes leves.
- [x] **DIP ( Inversão de Dependência ):** hooks customizados dependem de abstrações, não de implementações concretas.

## 🎯 Desafios

- Estruturar componentes seguindo o princípio de Responsabilidade Única ( SRP ).
- Aplicar a Inversão de Dependência ( DIP ) ao utilizar serviços `HTTP` abstratos.
- Extender componentes sem modificar a lógica base, seguindo o princípio Aberto/Fechado ( OCP ).
- Desacoplar a lógica do `ProductService` do `useFetch` custom hook.

## 🚀 Como executar

### Executar o projeto localmente

1. Clone o repositório

```bash
git clone git@github.com:felipe-dr/use-dev-web-react.git
```

2. Acesse a pasta do projeto no seu terminal / cmd

```bash
cd use-dev-web-react
```

3. Instale as dependências

- Utilizando `pnpm`

```bash
pnpm install
```

- Utilizando `npm`

```bash
npm install
```

- Utilizando `yarn`

```bash
yarn install
```

4. Execute a aplicação em modo de desenvolvimento

- Utilizando `pnpm`

```bash
pnpm dev
```

- Utilizando `npm`

```bash
npm run dev
```

- Utilizando `yarn`

```bash
yarn dev
```

6. A aplicação estará disponível na porta: `5173`

```bash
http://localhost:5173
```

## 🛠 Tecnologias

- [Vite](https://vite.dev/)
- [React](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Classnames](https://github.com/JedWatson/classnames)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Eslint](https://eslint.org/)
- [Globals](https://github.com/sindresorhus/globals#readme)
- [SassEmbedded](https://www.npmjs.com/package/sass-embedded)
- [CSSModules](https://github.com/css-modules/css-modules)

> Veja o arquivo [package.json](./package.json) na íntegra.

## 🦸 Autor

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/felipe-dr">
        <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/62888625?s=96&v=4" width="100px;" alt="Avatar do autor" />
        <br />
        <sub>
          <b>Felipe DR</b>
        </sub>
      </a>
      <br />
      <a href="mailto:felipe.corp7@gmail.com" title="E-mail">📩</a>
    </td>
  </tr>
</table>

## 📝 Licença

Este projeto está sob a licença [MIT](./LICENSE).
