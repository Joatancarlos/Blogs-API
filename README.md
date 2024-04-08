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
 