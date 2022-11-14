import { useState, useEffect } from "react";
import { Action } from "../enums/action.enum";
import { Book } from "../interfaces/book.interface";

function BookForm(props: BookListProps) {
    const [book, setBook] = useState(props.book);

    useEffect(() => {
        setBook(props.book);
    }, [props.book]);

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setBook((oldBookState) => ({
            ...oldBookState,
            [name]: value,
        }));
    };

    return (
        <form className="flex flex-col">
            <label htmlFor="title">Title</label>
            <input
                type="text"
                name="title"
                minLength={1}
                value={book.title}
                onChange={handleInputChange}
                className="border border-gray-400 rounded-md"
            />
            <label htmlFor="author">Author</label>
            <input
                type="text"
                name="author"
                minLength={1}
                value={book.author}
                onChange={handleInputChange}
                className="border border-gray-400 rounded-md"
            />
            <label htmlFor="desc">Description</label>
            <textarea
                rows={3}
                name="description"
                minLength={1}
                value={book.description}
                onChange={handleInputChange}
                className="border border-gray-400 rounded-md"
            />
            <div className="flex gap-2 mt-4">
                <button
                    onClick={() => props.handleClick(book, Action.CREATE)}
                    className="btn"
                    type="button"
                >
                    Save New
                </button>
                <button
                    onClick={() => props.handleClick(book, Action.UPDATE)}
                    className="btn"
                    type="button"
                    disabled={!book.id}
                >
                    Save
                </button>
                <button
                    onClick={() => props.handleClick(book, Action.DELETE)}
                    className="btn"
                    type="button"
                    disabled={!book.id}
                >
                    Delete
                </button>
            </div>
        </form>
    );
}

interface BookListProps {
    book: Book;
    handleClick: (book: Book, action: Action) => void;
}

export { BookForm };
