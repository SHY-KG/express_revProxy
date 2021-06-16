import express from 'express';
import morgan from 'morgan';
import { modules } from './rev_proxy';

const PORT: string = '8000';

const app: express.Express = express()
const logger = morgan("dev")
app.use(logger)

const handleListening = (): void => console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening)
app.use(modules)