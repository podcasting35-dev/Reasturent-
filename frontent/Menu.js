
import mongoose from 'mongoose';
export default mongoose.model('Menu',
 new mongoose.Schema({name:String,description:String,price:Number})
);
