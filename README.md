# Projeto de Pesquisa - Bosque

Este projeto tem como objetivo desenvolver uma plataforma para almacenamento de informacoes de arvores do bosque utilizando Node.js e TypeScript.

## Estrutura do Projeto

\`\`\`
backEnd/

│

├── node_modules/

│

├── src/

│   ├── config/

│   │   └── Config.ts

│   ├── controllers/

│   ├── models/

│

├── .env

├── index.ts

├── package-lock.json

├── package.json

└── tsconfig.json

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/Jasr4075/Pesquisa_Bosque.git

2. Navegue até o diretório do projeto:
   ```bash
   cd Pesquisa_Bosque/backEnd

3. Instale as dependências:
   ```bash
   npm install

## Configuração

1. Certifique-se de ter um arquivo \`.env\` no diretório raiz do projeto (\`backEnd/\`) com as seguintes variáveis de ambiente configuradas:
   ```bash
    DATABASE_URL=postgres://USERNAME:SENHA@localhost:HOST/DATABASE

## Uso

1. Para iniciar o servidor, execute o seguinte comando:
    ```bash
      npm run dev
