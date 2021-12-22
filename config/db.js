import mongoose from 'mongoose';
import colors from 'colors';
import dotenv from 'dotenv';

const connectDb = async () => {
   try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
        useUndefinedTopology:true,
        useNewUrlParser: true,
        useCreateIndex:true
    })
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
    } catch(error){
        console.error(`Error:${error.message}`.red.underline.bold)
        process.exit(1)
    }

}

export default connectDb;