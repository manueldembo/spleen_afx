# SpleenaFX - Backend

## 🚀 Sobre o Projeto

O Spleen AFX é um sistema web desenvolvido para proporcionar uma experiência completa de música online. Neste sistema, os utilizadores podem ouvir músicas, criar playlists personalizadas, pesquisar músicas e até fazer o upload das suas próprias faixas.

## 🛠 Tecnologias Utilizadas

- **NestJS**
- **Prisma ORM**
- **PostgreSQL**
- **Docker**
- **JWT (JSON Web Token)**

---

## 📦 Instalação

### 1️⃣ Clonar o repositório

```sh
git clone https://github.com/manueldembo/spleen_afx.git
cd spleen_afx
```

### 2️⃣ Configurar as variáveis de ambiente

Crie um arquivo **.env** na raiz do projeto e adicione:

```env
DATABASE_URL="postgresql://root:secret@localhost:5432/spleenafx?schema=public"
JWT_SECRET="super_secret"
PORT=8000
```

### 3️⃣ Subir o banco de dados com Docker

Antes de executar a aplicação, o PostgreSQL precisa estar em execução:

```sh
docker-compose up -d
```

Isso iniciará o banco de dados em segundo plano.

### 4️⃣ Instalar as dependências

```sh
npm install
```

### 5️⃣ Executar as migrações do banco

```sh
npx prisma migrate dev
```

### 6️⃣ Executar o servidor

```sh
npm run start
```

A API estará executando em **http://localhost:8000**.

---

## 📖 Endpoints Principais

### 🔹 Cadastrar Utilizador

```http
POST /users
```

### 🔹 Login de Utilizador

```http
POST /auth/login
```

### 🔹 Criar Playlist

```http
POST /playlists
```

### 🔹 Eliminar Playlist

```http
DELETE /playlists/:id
```

### 🔹 Editar Playlist

```http
PUT /playlists/:id
```

### 🔹 Adicionar Música a uma Playlist

```http
POST /playlists/add
```

### 🔹 Remover Música de uma Playlist

```http
DELETE /playlists/:id/music/:musicId
```

### 🔹 Carregar Música

```http
POST /musics/upload/:id
```

### 🔹 Pesquisar Música

```http
GET /musics
```

---

## 🐳 Parando o banco de dados

Se precisar parar o banco de dados, execute:

```sh
docker-compose down -d
```

## ** Mirantes 🎵🚀**
