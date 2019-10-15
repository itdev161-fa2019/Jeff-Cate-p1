import express from 'express';
import connectP1Database from './config/P1DB';

//Express application
const app = express();
const port = '3000';
const proj = 'Project 1';

// Connect to P1 Database
connectP1Database();

//Api endpoints
app.get('/', (req, res) => res.send(`Project 1 api return displayed in browser after connecting to port ${port}.`));

//Listener
app.listen(`${port}`, () => console.log(`${proj} server running on port ${port}.`));