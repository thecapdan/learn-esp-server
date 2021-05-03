import express from "express";
import { routes } from "./routes";
import mongoose from "mongoose";

let user = process.env.npm_config_user || "readonly";
let password = process.env.npm_config_password || "readonly";

const app = express();
app.use(express.json());

const dbURI = `mongodb+srv://${user}:${password}@cluster0.qtarf.mongodb.net/learn-esp?retryWrites=true&w=majority`;
mongoose
  .connect(dbURI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then((result) => {
    console.log(`Connected to learn-esp db with ${user}`);
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
