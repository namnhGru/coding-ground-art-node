import TagModel from "../model/tag.model";

export async function getAllTags(req, res) {
  try {
    const tags = await TagModel.find();
    console.log(tags);
    res.status(200).json({ data: tags });
  } catch (err) {
    res.status(400).json({ err: err.errmsg });
    console.error(err);
  }
}
