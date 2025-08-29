import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminroute.js';
import doctorRouter from './routes/doctorroute.js';
import userRouter from './routes/userroute.js';

// App config
const app = express();
const port = process.env.PORT || 4000;  // PORT in uppercase is a common convention

// Middleware
connectDB();
connectCloudinary();
app.use(express.json());
app.use(cors());

// API endpoints
app.use('/api/admin', adminRouter);
app.use('/api/doctor', doctorRouter);
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
  res.send('API working');
});

app.listen(port, () => console.log(`Server started on port ${port}`));
