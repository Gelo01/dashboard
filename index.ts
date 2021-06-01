import express from "express";
import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

const app = express();
const PORT = process.env.APP_PORT || 5000;

app.get("/", (req, res) => res.send("Hello World"));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
