const Movie = require('../models/movie');
const Genre = require('../models/genre');
const { response } = require('express');

const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const authConfig = require('../config/auth');
const MoviesController = {};

//all movies name (Y)
MoviesController.getAllMovies = async (req, res) => {

    try {
        let result = await Movie.find({})
        if (result.length > 0) {
            let arraymovies = []
            for (let i = 0; i < result.length; i++) {
                let namemovie = result[i].title
                arraymovies[i] = namemovie
            }
            res.send(arraymovies)

        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ningúna pelicula." })
        }
    } catch (error) {
        console.log(error);
    }
}
//add movie (Y)
MoviesController.newMovie = async (req, res) => {

    try {
        let movie = await Movie.create({
            genre_ids: req.body.genre_ids,
            original_language: req.body.original_language,
            original_title: req.body.original_title,
            overview: req.body.overview,
            poster_path: req.body.poster_path,
            release_date: req.body.release_date,
            title: req.body.title,
            backdrop_path: req.body.backdrop_path,
            vote_count: req.body.vote_count

        })

        if (movie) {
            res.send({ "Message": `La pelicula ${movie.title} se ha añadido con éxito` })
        }

    } catch (error) {
        console.log(error)
    }

};
//top rated movies (Y)
MoviesController.topRated = async (req, res) => {

    try {
        let result = await Movie.find({})
        if (result.length > 0) {
            result.sort((a, b) => b.vote_count - a.vote_count);
            let arraymovies = []
            for (let i = 0; i < 5; i++) {
                let namemovie = result[i].title
                arraymovies[i] = namemovie
            }
            res.send(arraymovies)

        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ningúna pelicula." })
        }
    } catch (error) {
        console.log(error);
    }
}
//obtener una pelicula por su id (Y)
MoviesController.getMovieById = async (req, res) => {
    const _id = req.params._id
    try {
        const movieID = await Movie.findById({ _id: _id })
        if (movieID.length === 0) {
            res.status(404)
            res.send({ error: 'Movie not found' })
        }
        res.send(movieID)

    } catch (error) {
        console.log(error)
        res.send("Server error: Movie not found")
    }
}
//obtener pelicula por titulo (Y)
MoviesController.getMovieByName = async (req, res) => {
    const title = req.body.title
    try {

        const foundMovies = await Movie.find({ title: title })
        if (foundMovies.length === 0) {
            res.status(404)
            res.send({ error: 'Movie not found' })
        }else res.send(foundMovies)
        

    } catch (error) {
        console.log(error);
    }
}
//mostar peliculas por determinado genero (Y)
MoviesController.getMovieByGenre = async (req, res) => {
    const name = req.body.name;
    try {
        const moviegenre = await Genre.find({ name: name })
        if (moviegenre.length === 0) {
            res.status(404)
            res.send({"ERROR":'Genre not found'})
        }else{
        let genre = moviegenre[0].id
        const foundmovie=await Movie.find({ genre_ids: genre })
        if(foundmovie.length ===0){
            res.status(404)
            res.send({"ERROR":'Movie not found'}) 
        }
        res.send(foundmovie)
        }

    }
    catch {
        res.send({ "ERROR": `SERVER ERROR` })
        //console.log(error);
    }
}
module.exports = MoviesController;
