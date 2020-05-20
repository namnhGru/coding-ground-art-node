import { model, Schema, SchemaTypes } from "mongoose";

var articleSchema = new Schema(
  {
    title: String,
    url: String,
    origin: String,
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
);

export default model("article", articleSchema);
