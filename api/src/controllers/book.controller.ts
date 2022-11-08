import { Request, Response } from 'express';

class BookController {
    private books = [
        {
            id: 1,
            title: 'Book of life',
            author: 'Leroy Jenkins',
            description: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 2,
            title: 'Superman',
            author: "Shaquille O'neal",
            description: 'Amet sit dolor ipsum lorem',
        },
    ];

    getAllBooks = (req: Request, res: Response) => {
        res.status(200).json(this.books);
    };

    getBookById = (req: Request, res: Response) => {
        const id = req.params.bookId;
        const searchedBook = this.books.find((book) => book.id == id);
        if (!searchedBook) {
            return res.status(400).json(null);
        }
        return res.status(200).json(searchedBook);
    };

    createBook = (req: Request, res: Response) => {
        const { author, title, description } = req.body;
        const id = Math.round(Math.random() * 1000 + 1);
        const newBook = {
            id: id,
            author,
            title,
            description,
        };
        this.books = [...this.books, newBook];
        return res.status(200).json(this.books);
    };

    updateBook = (req: Request, res: Response) => {
        const id = req.params.bookId;
        const { author, title, description } = req.body;
        const index = this.books.findIndex((book) => book.id == id);
        if (index < 0) {
            return res.status(400).json(null);
        }
        const book = this.books[index];
        book.author = author;
        book.title = title;
        book.description = description;
        this.books[index] = book;
        return res.status(200).json(this.books);
    };

    deleteBook = (req: Request, res: Response) => {
        const id = req.params.bookId;
        const foundBook = this.books.find((book) => book.id == id);
        if (!foundBook) {
            return res.status(400).json(null);
        }
        this.books = this.books.filter((book) => book.id != foundBook.id);
        return res.status(200).json(this.books);
    };
}

export { BookController };
