import express from 'express';
import { GetClosestBusFromStop, GetTimeToStop } from './controllers/StopController';
import mongoose from 'mongoose';
import cors from 'cors'
console.log(process.env.MONGOURI)
mongoose.connect(process.env.MONGOURI as string).then(res=>{
    console.log("Connected")
})
const app = express()
app.use(cors())
app.get("/stops/averagestoptimings/:startStop/:endStop",GetTimeToStop)
app.get("/stops/timetostop/:stop/",GetClosestBusFromStop)

app.listen(2100)