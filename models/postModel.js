import mongoose, { model, Schema } from "mongoose";

const postSchema = new Schema(
  {
    user: { type: mongoose.ObjectId, ref: "User" },
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const PostModel = new model("Post", postSchema);

export default PostModel;
