import mongoose from "mongoose";

const userSchems = new mongoose.Schema({
    full_name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        required: true,
        type: String,
        min: [6, 'Password must be at least 6 characters long']
    }
})


const User = mongoose.model("User", userSchems);
export default User;