📦 Sistema de Cadastro de Produtos

Este é um projeto desenvolvido exclusivamente para fins de estudo e prática de desenvolvimento web full stack. O objetivo principal foi consolidar conhecimentos sobre autenticação de usuários, manipulação de sessão, arquitetura MVC e integração com banco de dados NoSQL.

🎯 Sobre o Projeto

O sistema conta com um fluxo simples e funcional:

Página Inicial (/): Apresenta a tela inicial com opções para login ou criação de conta.

Autenticação: O usuário pode criar uma nova conta e realizar o login de forma segura.

Gestão de Produtos: Após se autenticar, o usuário ganha acesso para cadastrar e gerenciar seus produtos.

🛠️ Tecnologias Utilizadas

Node.js com Express (Servidor e rotas)

MongoDB com Mongoose (Banco de dados e modelagem)

EJS (Template Engine para renderização das views)

Express Session & Connect Flash (Gerenciamento de sessões e mensagens do sistema)

CSURF (Segurança contra ataques CSRF)

Dotenv (Gerenciamento de variáveis de ambiente)

🚀 Como Executar o Projeto Localmente

Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina o Node.js e o Git.

Passo a passo

Clone este repositório:

git clone https://github.com/Luiz-Mujalli/Projeto-Cadastro-de-Produtos-Estudo.git


Acesse a pasta do projeto:

cd Projeto-Cadastro-de-Produtos-Estudo


Instale as dependências:

npm install


Configure as Variáveis de Ambiente:
Crie um arquivo .env na raiz do projeto com as seguintes variáveis (utilize o .env.example como guia):

CONNECTIONSTRING=sua_string_de_conexao_do_mongodb
SESSION_SECRET=sua_chave_secreta_da_sessao


Inicie o servidor:

npm start


Acesse a aplicação:
Após a mensagem Servidor Rodando aparecer no terminal, acesse no navegador:

http://localhost:3000


📌 Considerações

Projeto focado no aprendizado e na construção de lógica backend de aplicações web.

Sinta-se à vontade para explorar o código ou mandar sugestões!