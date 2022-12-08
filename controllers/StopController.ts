import { RequestHandler } from "express";
import AverageDistances from "../models/AverageDistances";
import AverageStopTimings from "../models/AverageStopTimings";
import TimeToStop from "../models/TimeToStop";
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const GetTimeToStop: RequestHandler = async (req, res, next) => {
  const now = new Date();
  let query: any = await AverageStopTimings.findOne({
    fromStop: req.params.startStop,
    toStop: req.params.endStop,
    hourOfDay: now.getHours(),
    dayOfWeek: weekday[now.getDay()],
  });
  
  console.log(req.params);
  if (!query) {
    return res.status(404).json({ error: "NOT FOUND" });
  }
  query = query.toObject()
  const dist = (await AverageDistances.findOne({
    fromStop: parseInt(req.params.startStop),
    toStop: parseInt(req.params.endStop)
  }))
  console.log(dist)
  query.distance = dist?.distBetweenStops;
  console.log(query)
  res.json(query);
};
export const GetClosestBusFromStop: RequestHandler = async (req, res, next) => {
  const query = await TimeToStop.find({
    stop: req.params.stop,
  });
  console.log(req.params);
  if (!query) {
    return res.status(404).json({ error: "NOT FOUND" });
  }
  res.json(query);
};
