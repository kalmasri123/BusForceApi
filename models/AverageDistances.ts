import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    distBetweenStops: Number,
    fromStop: String,
    toStop: String,
  },
  {
    collection: "averageDistancesBetweenStops",
  }
);
export default mongoose.model("averageDistancesBetweenStops", schema);
