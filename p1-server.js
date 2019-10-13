import express from 'express';

//Express application
const app = express();
const port = '3000';
const proj = 'project 1';

//Api endpoints
app.get('/', (req, res) => res.send(`Message displayed in browser after connecting to port ${port}`));

//Listener

app.listen(`${port}`, () => console.log(`${proj} server running on port ${port}`));