import { Router } from 'express';
import { BookController } from '../controllers/book.controller';
import { bookValidationRules, validate } from '../validators/book.validator';

const bookRoutes = Router();
const controller = new BookController();

bookRoutes.get('/', controller.getAllBooks);
bookRoutes.get('/:bookId', controller.getBookById);
bookRoutes.post('/', bookValidationRules(), validate, controller.createBook);
bookRoutes.patch(
    '/:bookId',
    bookValidationRules(),
    validate,
    controller.updateBook
);
bookRoutes.delete('/:bookId', controller.deleteBook);

export { bookRoutes };
