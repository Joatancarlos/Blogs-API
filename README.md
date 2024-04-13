# Índice
  - <a href="#tecnologias-necessárias">Tecnologias Necessárias</a>
  - <a href="#como-rodar">Como rodar</a>
  - <a href="#funcionalidades">Funcionalidades</a>

# Tecnologias necessárias
<ul>
  <a href="https://docs.docker.com/compose/install/" target="_blank">
    <li>Docker Compose - versão >= 1.29</li>
  </a>
  <a href="https://nodejs.org/en/download" target="_blank">
    <li>Node.js - versão >= 16</li>
  </a>
</ul>

# Como rodar
<ol>
  <li>Faça o clone ou download do projeto</li>
  </br>

  ```bash
  git clone git@github.com:Joatancarlos/Blogs-API.git

  ```

  <li>Entre na pasta do projeto</li>
  </br>
  
  ```bash
  cd Blogs-API/

  ```

  <li>Instale as dependências</li>
  </br>
  
  ```bash
  npm install

  ```

  <li>Rode o Docker</li>
  </br>
  
  ```bash
  $ docker-compose up -d --build # Irá subir os containers 'blogs_api' e 'blogs_api_db'

  $ docker exec -it blogs_api bash # Irá executar o container 'blogs_api'

  ```

  <li>Execute os comandos para criar inserir os dados dentro do terminal do docker</li>
  </br>
  
  ```bash
  npm run prestart && npm run seed
  ```

  <li>Rode o backend</li>
  </br>
  
  ```bash
  npm run dev
  ```
</ol>

# Funcionalidades
### Cadastrar um usuário através do endpoint POST `/user`.
- Exemplo do corpo da requisição:
  ```json
  {
    "displayName": "Fulano Santos",
    "email": "fulanosantos@gmail.com",
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
    // a imagem não é obrigatória
  } 
  ``` 

- Retorno
  ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZGlzcGxheU5hbWUiOiJGdWxhbm8gU2FudG9zIiwiZW1haWwiOiJmdWxhbm9zYW50b3NAZ21haWwuY29tIiwiaW1hZ2UiOiJodHRwOi8vNC5icC5ibG9nc3BvdC5jb20vX1lBNTBhZFEtN3ZRL1MxZ2ZSXzZ1ZnBJL0FBQUFBQUFBQUFrLzFFckpHZ1JXWkRnL1M0NS9icmV0dC5wbmciLCJpYXQiOjE3MTI5NjcxMzYsImV4cCI6MTcxMzU3MTkzNn0.L4R9fP6RbUDj8l_jNzy-xUuPx9bryEQeOaaFGjAwvfo"
    }
  ```

### Acessar a conta atráves do endpoint POST `/login`.
- Exemplo do corpo da requisição:
  ```json
  {
    "email": "seu_email@domínio.com",
    "senha": "sua_senha"
  }
  ```

- Retorno
  ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZGlzcGxheU5hbWUiOiJGdWxhbm8gU2FudG9zIiwiZW1haWwiOiJmdWxhbm9zYW50b3NAZ21haWwuY29tIiwiaW1hZ2UiOiJodHRwOi8vNC5icC5ibG9nc3BvdC5jb20vX1lBNTBhZFEtN3ZRL1MxZ2ZSXzZ1ZnBJL0FBQUFBQUFBQUFrLzFFckpHZ1JXWkRnL1M0NS9icmV0dC5wbmciLCJpYXQiOjE3MTI5NjcxMzYsImV4cCI6MTcxMzU3MTkzNn0.L4R9fP6RbUDj8l_jNzy-xUuPx9bryEQeOaaFGjAwvfo"
    }
  ```

<hr>

### Visualizar todos os usuários cadastrados através do endpoint GET `/user`.
- OBS: Será necessário enviar o token no header da requisição!

  ```
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZGlzcGxheU5hbWUiOiJGdWxhbm8gU2FudG9zIiwiaW1hZ2UiOiJodHRwOi8vNC5icC5ibG9nc3BvdC5jb20vX1lBNTBhZFEtN3ZRL1MxZ2ZSXzZ1ZnBJL0FBQUFBQUFBQUFrLzFFckpHZ1JXWkRnL1M0NS9icmV0dC5wbmciLCJlbWFpbCI6ImZ1bGFub3NhbnRvc0BnbWFpbC5jb20iLCJpYXQiOjE3MTI5NjY2MTYsImV4cCI6MTcxMzU3MTQxNn0.vdklm0BPh3cj-4BJrAsM01sIlPvJRGJqs1KZLgraArQ
  ```

- Exemplo de retorno da requisição:
  ```json
  [
    {
      "id": 1,
      "displayName": "Brett Wiltshire",
      "email": "brett@email.com",
      "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
    },
    {
      "id": 2,
      "displayName": "Fulano Santos",
      "email": "fulanosantos@gmail.com",
      "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
    }
  ]
  ```

<hr>

### Visualizar um usuário específico com base no id através do endpoint GET `/user/:id`.
- OBS: Será necessário enviar o token no header da requisição!

- Retorno para o id 1
  ```json
      {
        "id": 1,
        "displayName": "Brett Wiltshire",
        "email": "brett@email.com",
        "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
      }
    ```

<hr>


### Criar uma nova Categoria através do endpoint POST `/categories`.
- OBS: Será necessário enviar o token no header da requisição!

### Visualizar todas as Categorias através do endpoint GET `/categoriess`.
- OBS: Será necessário enviar o token no header da requisição!

### Criar uma postagem através do endpoint POST `/post`.
- OBS: Será necessário enviar o token no header da requisição!

### Visualizar todas as Postagem com seus respectivos donos e categorias através do endpoint GET `/post`.
- OBS: Será necessário enviar o token no header da requisição!

### Visualizar uma postagem específica com base no id através do endpoint GET `/post/:id`.
- OBS: Será necessário enviar o token no header da requisição!

### Atualizar uma postagem sendo o proprietário dela através do endpoint PUT `/post/:id`.
- OBS: Será necessário enviar o token no header da requisição!

### Deletar uma postagem sendo o proprietário dela através do endpoint DELETE `/post/:id`.
- OBS: Será necessário enviar o token no header da requisição!

### Deletar um usuário sendo o proprietário da conta através do endpoint DELETE `/user/me`.
- OBS: Será necessário enviar o token no header da requisição!

### Buscar todas as postagem que contenham em seu título ou conteúdo o termo passado na URL através do endpoint GET `/post/search?q=:searchTerm`. 
- OBS: Será necessário enviar o token no header da requisição!
