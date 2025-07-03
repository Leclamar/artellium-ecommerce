import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    _id:{ type : String, require: true},
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    imageUrl: { type: String, required: true },
    order: { type: Array, default: {} },
}, {minimize: false});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;