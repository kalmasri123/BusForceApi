import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    stop: String,
    routeId: Number,
    timeLeft: Number,
    milliSecondsLate: Number,
    trafficRatioGlobal:Number
  },
  {
    collection: "timetostop",
  }
);
export default mongoose.model("timetostop", schema);
