import PenModel from "../model/pen.model";

export async function getAllPens(req, res) {
  try {
    const pens = await PenModel.find();
    console.log(pens);
    res.status(200).json({ data: pens });
  } catch (err) {
    res.status(400).json({ err: err.errmsg });
    console.error(err);
  }
}
