//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

const SeriesController = require('../controllers/SeriesController');
const auth = require('../middlewares/auth');

//Endpoints
router.post("/", SeriesController.newSerie);
router.get("/", SeriesController.getAllSeries);
router.get("/toprated", SeriesController.topRated);
router.get("/serie/:_id", SeriesController.getSerieById);
router.post("/name/serie",auth, SeriesController.getSerieByName);
router.post("/transmission", SeriesController.getSerieByTransmissions);
//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;