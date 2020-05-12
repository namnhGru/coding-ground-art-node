import { model, Schema, SchemaTypes } from "mongoose";

var postSchema = new Schema(
  {
    title: String,
    url: String,
    tags: SchemaTypes.ObjectId,
    content: String,
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
);

export default model("post", postSchema);
