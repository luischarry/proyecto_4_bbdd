//Importo método router() de la clase express
const router = require('express').Router();

const MoviesRouter = require('./views/MoviesRouter');
const UsersRouter = require('./views/UsersRouter');
const SeriesRouter = require('./views/SeriesRouter');


router.use("/movies", MoviesRouter);
router.use("/users", UsersRouter);
router.use("/series", SeriesRouter);


//Exporto router
module.exports = router;