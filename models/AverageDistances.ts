import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    distBetweenStops: Number,
    fromStop: Number,
    toStop: Number,
  },
  {
    collection: "averageDistancesBetweenStops",
  }
);
export default mongoose.model("averageDistancesBetweenStops", schema);
