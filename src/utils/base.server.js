import connectdb from "./base.db";
import { SERVER_PORT, SERVER_HOST } from "./base.config";
import { json, urlencoded } from "body-parser";
import express from "express";
import { getAllPosts, getSpecificPost } from "../api/post.api";
import cors from "cors";
import { getAllTags } from "../api/tag.api";
import { getAllArticles } from "../api/article.api";
import { getAllPens } from "../api/pen.api";
import { getAllGithubs } from "../api/github.api";
// import cookieParser from "cookie-parser";

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));
// app.use(cookieParser());

// app.use(cors({
//   credentials: true,
//   origin: "http://localhost:8080"
// }))
app.use(cors());

app.get("/posts", getAllPosts);
app.post("/posts", getSpecificPost);
app.get("/tags", getAllTags);
app.get("/articles", getAllArticles);
app.get("/pens", getAllPens);
app.get("/githubs", getAllGithubs);

export const start = async () => {
  try {
    await connectdb();
    const port = process.env.PORT || SERVER_PORT;
    app.listen(port, () => {
      console.log(`REST API on ${SERVER_HOST}:${port}`);
    });
  } catch (e) {
    console.error(e);
  }
};
