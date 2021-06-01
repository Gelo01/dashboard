import express from "express";
import dotenv from "dotenv";
import path from "path";

import { showAll, register } from "./controllers/userController";

var router = express.Router();

dotenv.config();

const app = express();
const PORT = process.env.APP_PORT || 5000;

app.use(express.json());

app.use("/public", express.static(path.join(__dirname, "dist")));
console.log(path.join(__dirname, "dist"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/login", (req, res) => {
  res.render("pages/login");
});

app.post("/users", (req, res) => {
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  let cpassword = req.body.cpassword;

  let registration = register(username, email, password, cpassword);

  if (registration) {
    res.send({ message: "success registration", data: registration });
  }
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
