import mongoose from 'mongoose';
import User from './user';
import Blog from './blog';

const connectDb = () => {
    return mongoose.connect(process.env.MONGODB_URI);
};

const models = { User, Blog };

export default { 
                connectDb,
                models
                };
