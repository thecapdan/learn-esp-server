import express from "express";
import { routes } from "./routes";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

// use cd21 for write
const dbURI =
  "mongodb+srv://readonly:readonly@cluster0.qtarf.mongodb.net/learn-esp?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then((result) => {
    console.log("Connected to learn-esp db");
    app.listen(8080, () => {
      console.log("Server is listening on port 8080");
    });
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.redirect("/home");
});

routes.forEach((route) => {
  app[route.method](route.path, route.handler);
});
