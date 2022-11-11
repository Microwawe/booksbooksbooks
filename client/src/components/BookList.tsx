import { Book } from "../interfaces/book.interface";

interface BookListProps {
    books: Book[];
    selectedBook: Book | undefined;
    setSelectedBook: (book: Book) => void;
}

function BookList(props: BookListProps) {
    const getSelectionClassNames = (book: Book) => {
        return book.id === props.selectedBook?.id ? " text-red-500" : "";
    };

    return (
        <table className="text-left max-w-sm">
            <thead>
                <tr className="grid grid-cols-2 gap-2">
                    <th>Title</th>
                    <th>Author</th>
                </tr>
            </thead>
            <tbody>
                {props.books.map((book) => (
                    <tr
                        key={book.id}
                        className={
                            "grid grid-cols-2 gap-3 cursor-pointer hover:bg-gray-100" +
                            getSelectionClassNames(book)
                        }
                        onClick={() => props.setSelectedBook(book)}
                    >
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export { BookList };
