import express from "express";
import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

const app = express();
const PORT = process.env.APP_PORT || 5000;

app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("pages/index"));
app.get("/login", (req, res) => res.render("pages/login"));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
