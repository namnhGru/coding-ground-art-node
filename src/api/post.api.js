import PostModel from "../model/post.model";
import TagModel from "../model/tag.model";

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
