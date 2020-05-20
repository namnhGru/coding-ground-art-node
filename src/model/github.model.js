import { model, Schema, SchemaTypes } from "mongoose";

var githubSchema = new Schema(
  {
    title: String,
    star: Number,
    description: String,
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
);

export default model("github", githubSchema);
