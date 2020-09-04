import mongoose from "mongoose";

const tiktokSchema = mongoose.Schema({
  url: String,
  user: String,
  description: String,
  song: String,
  likes: Number,
  messages: Number,
  shares: Number,
});

export default mongoose.model("tiktokVideos", tiktokSchema);
