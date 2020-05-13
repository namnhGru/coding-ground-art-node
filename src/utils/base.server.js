import connectdb from "./base.db";
import { SERVER_PORT, SERVER_HOST } from "./base.config";
import { json, urlencoded } from "body-parser";
import express from "express";
import { getAllPosts, getSpecificPost } from "../api/post.api";
import cors from "cors";
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
