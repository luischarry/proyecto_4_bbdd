//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

const MoviesController = require('../controllers/MoviesController');
const auth = require('../middlewares/auth');

//Endpoints
//get
router.get("/", MoviesController.getAllMovies);
router.get("/profile/:_id", MoviesController.getMovieById);
router.get("/toprated", MoviesController.topRated);
//post
router.post("/", MoviesController.newMovie);
router.post("/name/movie",auth, MoviesController.getMovieByName);
router.post("/genre", MoviesController.getMovieByGenre);

//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;