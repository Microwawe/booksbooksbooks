import express from 'express';
import bodyParser from 'body-parser';
import { routes } from './routes/index';

export class App {
    app: express.Application;
    port: number;

    constructor(port) {
        this.app = express();
        this.port = port;

        this.initializeMiddlewares();
        this.app.use('/', routes);
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Api listening on port ${this.port}`);
        });
    }
}
