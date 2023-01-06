const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serieSchema = new Schema ({
    backdrop_path:{
        type: String,
         
    },
    first_air_date:{
        type: String,
        required: true
    },
    genre_ids: {
        type: Array,
        required: true
    },
    original_language: {
        type: String,
        required: true
    },
    original_name:{
        type: String,
        required: true 
    },
    overview:{
        type: String,
        required: true 
    },
    poster_path:{
        type: String,
        required: true 
    },
    name:{
        type: String,
        required: true  
    },
    popularity:{
        type: Number,
        required: true
    },
    origin_country:{
        type: String,
    },
    status_serie:{
        type: Number,
        required: true
    }
});

const Serie = mongoose.model("Serie", serieSchema);
module.exports = Serie;