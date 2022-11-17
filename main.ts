import express from 'express';
import { GetTimeToStop } from './controllers/StopController';
import mongoose from 'mongoose';
import cors from 'cors'
console.log(process.env.MONGOURI)
mongoose.connect(process.env.MONGOURI as string).then(res=>{
    console.log("Connected")
})
const app = express()
app.use(cors())
app.get("/stops/timetostop/:startStop/:endStop",GetTimeToStop)
app.listen(2100)