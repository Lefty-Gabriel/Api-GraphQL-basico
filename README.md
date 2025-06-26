## Proyecto Backend con NestJS y GraphQL


## 🚀 Funcionalidades

- Consultar todos los libros.
- Consultar un libro por ID.
- Agregar un nuevo libro mediante una mutación.
- Probar la API en el playground de GraphQL.

---

## 🧰 Tecnologías usadas

- [NestJS](https://nestjs.com/)
- [GraphQL](https://graphql.org/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- TypeScript

---

## 📦 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/mini-proyecto-nestjs-graphql.git
   cd mini-proyecto-nestjs-graphql

2. intala las dependencias 
   npm install

3. inicia el servidor 
npm run start:dev

4. abrir el navegador en: http://localhost:3000/graphql

## Como usar?

1. agregar un libro (mutacion)

mutation {
  addBook(title: "1984", author: "George Orwell") {
    id
    title
    author
  }
}

2. Consultar todos los libros

query {
  getBooks {
    id
    title
    author
  }
}

3. Consulta de libro por su id

query {
  getBook(id: "el-id-del-libro") {
    id
    title
    author
  }
}



