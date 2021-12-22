import express from 'express';
import mongoose from 'mongoose';

import productRoutes from './routes/productRoutes.js'
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import {notFound, errorHandler} from './middleware/errorMiddleware.js'

dotenv.config()
connectDB()

const app=express();

app.use('api/products/',productRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT=process.env.REACT_APP_PORT||5000

app.listen(process.env.REACT_APP_PORT, console.log(`server running in ${process.env.REACT_APP_NODE_ENV}  mode on port ${process.env.REACT_APP_PORT}`))