import express from "express";
import dotenv from "dotenv";
import path from "path";

import { showAll } from "./controllers/userController";

var router = express.Router();

dotenv.config();

const app = express();
const PORT = process.env.APP_PORT || 5000;

app.use("/public", express.static(path.join(__dirname, "dist")));
console.log(path.join(__dirname, "dist"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let tagline: { msg: string; data: { name: string }[] } = {
    msg: "No programming concept is complete without a cute animal mascot.",
    data: [
      {
        name: "Test 1",
      },
      {
        name: "Test 2",
      },
    ],
  };

  let data = {
    accounts: showAll(),
    msg: "hi hello",
  };

  res.render("pages/login", data);
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
