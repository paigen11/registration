import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    salutation: {type: String},
    first_name: {type: String},
    last_name: {type: String},
    phone_number: {type: Number},
    email: {type: String},
    username: {type: String, required: true},
    password: {type: String, required: true}
});

UsersSchema.methods.comparePassword = (newPassword) => {
    if(newPassword === this.password) {
        return isMatch;
    }
        else {
        return null;
    }

}

module.exports =  mongoose.model('User', UsersSchema);