📚 Books REST API with Node.js & Express

A simple REST API to manage a collection of books using Node.js and Express. This project demonstrates basic CRUD operations (Create, Read, Update, Delete) without using a database (in-memory storage).

## 🚀 Features

- Get all books
- Add a new book
- Update an existing book
- Delete a book by ID

## 🛠️ Tech Stack

- Node.js
- Express.js

## 📁 Project Structure

project/
├── server.js # Main Express server
├── package.json
└── README.md

bash


## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/books-api.git
   cd books-api
Install dependencies:

bash

npm install
Start the server:

bash

node server.js
📡 API Endpoints
Base URL: http://localhost:3000

📖 Get all books
Endpoint: GET /books

Response:

json

[
  { "id": 1, "title": "Harry Potter", "author": "J.K. Rowling" },
  ...
]
➕ Add a new book
Endpoint: POST /books

Request Body:

json

{
  "title": "Book Title",
  "author": "Author Name"
}
Response:

json

{
  "id": 4,
  "title": "Book Title",
  "author": "Author Name"
}
✏️ Update a book by ID
Endpoint: PUT /books/:id

Request Body:

json

{
  "title": "Updated Title",
  "author": "Updated Author"
}
Response:

json

{
  "id": 1,
  "title": "Updated Title",
  "author": "Updated Author"
}
❌ Delete a book by ID
Endpoint: DELETE /books/:id

Response:

json

{
  "id": 1,
  "title": "Harry Potter",
  "author": "J.K. Rowling"
}
🧪 Testing
Use tools like Postman or curl to test the API endpoints.

📌 Notes
This API uses in-memory data, so all changes will be lost when the server restarts.

Intended for learning and practice purposes.

📝 License
This project is open source and available under the MIT License.

