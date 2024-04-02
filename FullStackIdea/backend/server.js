import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();

app.use(cors());

const port = process.env.PORT || 8080;

app.get("/api/jokes", (req, res) => {
  const joke = [
    {
      id: 1,
      title: "First joke",
      content: "This is the first joke",
    },
    {
      id: 2,
      title: "Second joke",
      content: "This is the second joke",
    },
    {
      id: 3,
      title: "Third joke",
      content: "This is the third joke",
    },
    {
      id: 4,
      title: "Fourth joke",
      content: "This is the fourth joke",
    },
    {
      id: 5,
      title: "Fifth joke",
      content: "This is the fifth joke",
    },
  ];
  res.send(joke);
});

app.listen(port, () => {
  console.log(`Serving at http://localhost:${port}`);
});
