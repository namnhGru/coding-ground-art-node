import PostModel from "../model/post.model";
import TagModel from "../model/tag.model";
import { DB_HOST, DB_PORT } from "../utils/base.config";

export async function getSpecificPost(req, res) {
  try {
    console.log(`get data from ${DB_HOST}:${DB_PORT}`);
    const post = await PostModel.findOne({ slug: req.body.slug })
      .populate({ path: "tags", model: TagModel })
      .exec();
    res.status(200).json({ data: post });
  } catch (err) {
    res.status(400).json({ err: err.errmsg });
    console.error(err);
  }
}
export async function getAllPosts(req, res) {
  try {
    const posts = await PostModel.find()
      .populate({ path: "tags", model: TagModel })
      .exec();
    res.status(200).json({ data: posts });
  } catch (err) {
    res.status(400).json({ err: err.errmsg });
    console.error(err);
  }
}
