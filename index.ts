import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.APP_PORT || 5000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let tagline: { msg: string } = {
    msg: "No programming concept is complete without a cute animal mascot.",
  };

  res.render("pages/index", tagline);
});

app.get("/login", (req, res) => {
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

  res.render("pages/login", tagline);
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
