import express from 'express';
import modules from './rev_proxy';

const app = express()

const PORT = '8000';

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening)
app.use(modules)

