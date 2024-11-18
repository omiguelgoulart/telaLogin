# Login System com Next.js, Prisma e JWT

Este projeto é um sistema de login e cadastro usando Next.js, Prisma e JWT. Ele inclui autenticação, armazenamento de token no localStorage e redirecionamento para páginas protegidas.

## Tecnologias Utilizadas
- **Next.js**: Framework para React com renderização do lado do servidor.
- **Prisma**: ORM para gerenciar o banco de dados.
- **JWT**: Para autenticação baseada em tokens.
- **ShadCN/UI**: Componentes estilizados com Tailwind CSS.
- **MySQL**: Banco de dados utilizado.

## Funcionalidades
- **Cadastro de Usuário**: Criptografa a senha e salva no banco de dados.
- **Login de Usuário**: Gera um token JWT após autenticar o usuário.
- **Logout**: Remove o token e redireciona o usuário para o login.
- **Proteção de Páginas**: Apenas usuários autenticados podem acessar o Dashboard.

## Como Rodar o Projeto

### Pré-requisitos
- Node.js e npm instalados.
- Banco de dados MySQL configurado.
- Dependências instaladas.

### Passos

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    cd nome-do-repositorio
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure o banco de dados:
    Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
    ```makefile
    DATABASE_URL="mysql://usuario:senha@localhost:3306/nome-do-banco"
    JWT_SECRET="sua_chave_secreta"
    ```

4. Gere o cliente do Prisma e sincronize o banco:
    ```bash
    npx prisma generate
    npx prisma migrate dev --name init
    ```

5. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

6. Acesse o projeto:
    Abra o navegador e vá para [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto
```bash
/app
  /api       # Rotas da API para login e cadastro
  /dashboard # Página protegida
  /login     # Página de login
/components  # Componentes reutilizáveis
/lib         # Configuração do Prisma e JWT
/prisma      # Schema do banco de dados
/public      # Arquivos estáticos
```

## Endpoints
- **POST /api/auth/register**: Cadastro de novos usuários.
- **POST /api/auth/login**: Login e geração de token JWT.

## Melhorias Futuras
- Adicionar suporte a recuperação de senha.
- Implementar autenticação baseada em cookies.
- Adicionar testes automatizados.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.