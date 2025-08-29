import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminroute.js'
import doctorRouter from './routes/doctorroute.js'
import userRouter from './routes/userroute.js'

// app config 
const app = express()
const port = process.env.port || 4000

// middlerwear
connectDB()
connectCloudinary()
app.use(express.json())
app.use(cors())


// api endpoints
app.use('/api/admin',adminRouter)
app.get('/',(req,res)=>{res.send('api working')})
app.use('/api/doctor', doctorRouter)
app.use('/api/user',userRouter)
app.listen(port,()=>console.log("server stated",port))