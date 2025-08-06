import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["book", "product", "app", "place"],
    required: true,
  },
  category: { type: String, required: true },
  title: { type: String, required: true },
  ranking: { type: Number, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  creatorName: { type: String, required: true },
  date: { type: Date, required: true },
  imageUrl: { type: String, default: null },
  link: { type: String, default: null },
  locationId: { type: String, default: null },
});

const Article = mongoose.model("Article", articleSchema);
export default Article;
