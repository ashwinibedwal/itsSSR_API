import * as mongoose from 'mongoose';
import{Course} from '../Models/course';
type Usertype = Course & mongoose.Document;

const Schema = mongoose.Schema;

const schema = new Schema({
    sr_no: String,
   course_name: String,
   course_details: String,
   price: String
});
export default mongoose.model<Usertype>('courses',schema);