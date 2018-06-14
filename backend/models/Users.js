import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    salutation: String,
    first_name: String,
    last_name: String,
    phone_number: Number,
    email: String,
    username: String,
    password: String
});

module.exports =  mongoose.model('User', UsersSchema);