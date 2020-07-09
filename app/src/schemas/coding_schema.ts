import * as mongoose from 'mongoose';
import{Coding} from '../Models/coding';
type Usertype = Coding & mongoose.Document;

const Schema = mongoose.Schema;

const schema = new Schema({
    sr_no: String,
   coding_language: String,
});
export default mongoose.model<Usertype>('codings',schema);