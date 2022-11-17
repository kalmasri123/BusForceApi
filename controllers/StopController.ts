import { RequestHandler } from "express";
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
export const GetTimeToStop: RequestHandler = async (req, res, next) =>{
  const now = new Date();
  const query = await TimeToStop.findOne({
    fromStop: req.params.startStop,
    toStop: req.params.endStop,
    hourOfDay: now.getHours(),
    dayOfWeek: weekday[now.getDay()],
  });
  console.log(req.params)
  if (!query) {
    return res.status(404).json({ error: "NOT FOUND" });
  }
  res.json(query);
}
