const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema ({
    backdrop_path:{
        type: String,
        required: true 
    },
    vote_count:{
        type: Number,
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
    original_title:{
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
    release_date:{
        type: Date,
        required: true 
    },
    title:{
        type: String,
        required: true  
    }

});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;