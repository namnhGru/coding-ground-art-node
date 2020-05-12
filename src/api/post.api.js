import PostModel from "../model/post.model";

export async function getAllPosts(req, res) {
  try {
    const posts = await PostModel.find();
    console.log(posts);
    res.status(200).json({ data: posts });
  } catch (err) {
    res.status(400).json({ err: err.errmsg });
    console.error(err);
  }
}
