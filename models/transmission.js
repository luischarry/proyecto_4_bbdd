const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transmissionSchema = new Schema ({
    id:{
        type: Number,
        required: true 
    },
    name:{
        type: String,
        required: true
    }
});

const Transmission = mongoose.model("Transmission", transmissionSchema);
module.exports = Transmission;