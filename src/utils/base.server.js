import connectdb from "./base.db";
import { SERVER_PORT, SERVER_HOST } from "./base.config";
import { json, urlencoded } from "body-parser";
import express from "express";
import { getAllPosts } from "../api/post.api";
// import cors from "cors";
// import cookieParser from "cookie-parser";

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));
// app.use(cookieParser());

// app.use(cors({
//   credentials: true,
//   origin: "http://localhost:8080"
// }))

app.get("/posts", getAllPosts);

export const start = async () => {
  try {
    await connectdb();
    app.listen(SERVER_PORT, () => {
      console.log(`REST API on ${SERVER_HOST}:${SERVER_PORT}`);
    });
  } catch (e) {
    console.error(e);
  }
};
