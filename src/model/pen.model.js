import { model, Schema, SchemaTypes } from "mongoose";

var penSchema = new Schema(
  {
    title: String,
    url: String,
    description: String,
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
);

export default model("pen", penSchema);
