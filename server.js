const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// In-memory storage - simple array of book objects
let books = [
    { id: 1, title: "Harry Potter", author: "J.K. Rowling" },
    { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien" },
    { id: 3, title: "1984", author: "George Orwell" }
];

// GET /books - Get all books
app.get('/books', (req, res) => {
    res.json(books);
});

// POST /books - Add a new book
app.post('/books', (req, res) => {
    const { title, author } = req.body;
    
    const newBook = {
        id: books.length + 1,  // Simple ID generation
        title: title,
        author: author
    };
    
    books.push(newBook);
    res.json(newBook);
});

// PUT /books/:id - Update a book by ID
app.put('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, author } = req.body;
    
    // Find the book
    const book = books.find(b => b.id === id);
    
    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }
    
    // Update the book
    book.title = title;
    book.author = author;
    
    res.json(book);
});

// DELETE /books/:id - Delete a book by ID
app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    
    // Find book index
    const bookIndex = books.findIndex(b => b.id === id);
    
    if (bookIndex === -1) {
        return res.status(404).json({ message: 'Book not found' });
    }
    
    // Remove the book
    const deletedBook = books.splice(bookIndex, 1)[0];
    res.json(deletedBook);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Available endpoints:');
    console.log('GET    /books      - Get all books');
    console.log('POST   /books      - Add new book');
    console.log('PUT    /books/:id  - Update book');
    console.log('DELETE /books/:id  - Delete book');
});