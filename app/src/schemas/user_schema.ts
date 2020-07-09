import * as mongoose from 'mongoose';
import{User} from '../Models/user';
type Usertype = User & mongoose.Document;

const Schema = mongoose.Schema;

const schema = new Schema({
    id: String,
    email: String,
    username: String,
    password: String,
    token: String
});
export default mongoose.model<Usertype>('users',schema);

