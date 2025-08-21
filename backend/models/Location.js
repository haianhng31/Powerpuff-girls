import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String },
  status: {
    type: String,
    enum: ["safe", "unsafe", "moderate"],
    required: true
  },
  coordinates: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  country: { type: String },
  city: { type: String }
});

export default mongoose.model("Location", locationSchema);
