import express from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: ".env",
});

const app = express();
const PORT = process.env.APP_PORT || 5000;

app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("pages/index"));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
