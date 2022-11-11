import { useState, useEffect } from "react";

import { BookForm } from "./BookForm";
import { BookList } from "./BookList";
import { Book } from "../interfaces/book.interface";
import { Action } from "../enums/action.enum";

function Books() {
    const emptyBook = { title: "", author: "", description: "" };
    const apiUrl = process.env.REACT_APP_BASE_URL + "/book/";

    const [books, setBooks] = useState<Book[]>([]);
    const [selectedBook, setSelectedBook] = useState<Book>(emptyBook);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setBooks(data);
        };
        fetchBooks().catch(console.error);
    }, [apiUrl]);

    const handleClick = (book: Book, action: Action) => {
        switch (action) {
            case Action.UPDATE:
                updateBook(book);
                break;
            case Action.DELETE:
                deleteBook(book);
                break;
            default:
                createBook(book);
                break;
        }
    };

    const makeApiCall = async (url: string, book: Book, method: string) => {
        const response = await fetch(url, {
            method: method,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(book),
        });
        return await response.json();
    };

    const createBook = async (book: Book) => {
        const newBooks = await makeApiCall(apiUrl, book, "POST");
        setBooks(newBooks);
        setSelectedBook(emptyBook);
    };

    const updateBook = async (book: Book) => {
        const newBooks = await makeApiCall(apiUrl + book.id, book, "PATCH");
        setBooks(newBooks);
    };

    const deleteBook = async (book: Book) => {
        const newBooks = await makeApiCall(apiUrl + book.id, book, "DELETE");
        setBooks(newBooks);
        setSelectedBook(emptyBook);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 sm:p-8">
            <BookList
                books={books}
                selectedBook={selectedBook}
                setSelectedBook={setSelectedBook}
            />
            <BookForm book={selectedBook} handleClick={handleClick} />
        </div>
    );
}

export { Books };
