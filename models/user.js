const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String
    },
    dni: {
        type: String,
        required: true,
        unique: true,
        immutable: true
    },
    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password : {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true

    },
    numerotc: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: false
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;