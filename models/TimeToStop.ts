import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    timeTaken: Number,
    fromStop: String,
    toStop: String,
    route: String,
    hourOfDay: { type: Number, required: false },
    dayOfWeek: { type: String, required: false },
  },
  {
    collection: "averageTimingsBetweenStops",
  }
);
export default mongoose.model("timeToStop", schema);
