import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import hotelsRoute from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';
import usersRoute from './routes/users.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express();
dotenv.config();

const connect = async () => {
   try {
      await mongoose.connect(process.env.MONGO);
      console.log('Connected to mongoDB.');
   } catch (error) {
      throw error;
   }
};

mongoose.connection.on('disconnect', () => {
   console.log('Disconnected from mongoDB.');
});

// middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);

app.use((req, res, next) => {
   res.send('hello from middleware');
   // console.log("hi iam a middleware!");
});

app.listen(8800, () => {
   connect();
   console.log('Connected to backend.');
});

// time in video 1:49:01
