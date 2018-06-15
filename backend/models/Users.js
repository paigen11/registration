import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    salutation: String,
    first_name: String,
    last_name: String,
    phone_number: Number,
    email: String,
    username: {type: String, required: true},
    password: {type: String, required: true}
});

module.exports =  mongoose.model('User', UsersSchema);