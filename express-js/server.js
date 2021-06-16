import express from 'express';
import morgan from 'morgan';
import modules from './rev_proxy';

const PORT = '8000';

const app = express()
const logger = morgan("dev")
app.use(logger)

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

app.use(modules)
app.listen(PORT, handleListening)
