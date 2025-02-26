const mongoose = require("mongoose");

// Connection
mongoose.connect('mongodb://127.0.0.1:27017/proj1')
.then(console.log(`MongoDB Connected`))
.catch(err => console.log(`Mongo err ${err}`));

// Schema
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    jobTitle: {
        type: String
    },
    gender: {
        type: String
    }
});

const User = mongoose.model("user",userSchema);