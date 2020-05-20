import ArticleModel from "../model/article.model";

export async function getAllArticles(req, res) {
  try {
    const articles = await ArticleModel.find();
    console.log(articles);
    res.status(200).json({ data: articles });
  } catch (err) {
    res.status(400).json({ err: err.errmsg });
    console.error(err);
  }
}
