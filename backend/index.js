import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'

const app = express();
app.use(express.json())

app.use(cors({
  origin: ['http://localhost:3000'], // add your frontend domain here
  methods:['GET','POST','PUT','DELETE'],
  allowedHeaders:['Content-Type']
}))
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use('/books',booksRoute)

mongoose
  .connect(mongoDBURL)
  .then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
      });
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });
