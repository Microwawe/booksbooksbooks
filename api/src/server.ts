import { App } from './app';
import * as dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 1234;
console.log(port);
const app = new App(port);

app.listen();
