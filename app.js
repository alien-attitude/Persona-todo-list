import express from 'express'
import cookieParser from 'cookie-parser'
import { PORT } from "./config/env.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("Welcome to Persona To-do list app")
})

// Server start
app.listen(PORT, () => {
    console.log(`Persona To-do list app is running on http://localhost:${PORT}`);
});
