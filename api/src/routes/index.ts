import express from 'express';
import { bookRoutes } from './book.route';

const routes = express.Router();

routes.use('/book', bookRoutes);

export { routes };
