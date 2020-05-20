import GithubModel from "../model/github.model";

export async function getAllGithubs(req, res) {
  try {
    const githubs = await GithubModel.find();
    console.log(githubs);
    res.status(200).json({ data: githubs });
  } catch (err) {
    res.status(400).json({ err: err.errmsg });
    console.error(err);
  }
}
