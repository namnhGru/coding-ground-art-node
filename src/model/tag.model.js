import { model, Schema } from "mongoose";

var tagSchema = new Schema(
  {
    category: String,
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
);

export default model("tag", tagSchema);
