const { response } = require('express');
const Serie = require('../models/serie');
const Transmission = require('../models/transmission');
const SeriesController = {};
//nueva serie (Y)
SeriesController.newSerie = async (req, res) => {

    try {
        let serie = await Serie.create({
            backdrop_path: req.body.backdrop_path,
            first_air_date: req.body.first_air_date,
            genre_ids: req.body.genre_ids,
            original_language: req.body.original_language,
            original_name: req.body.original_name,
            overview: req.body.overview,
            poster_path: req.body.poster_path,
            name: req.body.name,
            origin_country:req.body.origin_country,
            popularity:req.body.popularity

        })

        if (serie) {
            res.send({ "Message": `La serie ${serie.name} se ha añadido con éxito` })
        }

    } catch (error) {
        console.log(error)
    }

};
//todas las series (Y)
SeriesController.getAllSeries = async (req, res) => {

    try {
        let result = await Serie.find({})
        if (result.length > 0) {
            let arrayseries = []
            for (let i = 0; i < result.length; i++) {
                let nameserie = result[i].name
                arrayseries[i] = nameserie
            }
            res.send(arrayseries)

        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ningúna serie." })
        }
    } catch (error) {
        console.log(error);
    }
}
//top rated series (Y)
SeriesController.topRated = async (req, res) => {

    try {
        let result = await Serie.find({})
        if (result.length > 0) {
            result.sort((a, b) => b.popularity - a.popularity);
            let arrayseries = []
            for (let i = 0; i < 5; i++) {
                let nameserie = result[i].name
                arrayseries[i] = nameserie
            }
            res.send(arrayseries)

        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ningúna pelicula." })
        }
    } catch (error) {
        console.log(error);
    }
}
//series por ID (Y)
SeriesController.getSerieById = async (req, res) => {
    const _id = req.params._id
    try {
        const serieid=await Serie.findById({ _id: _id })
            if(serieid==0){
                res.status(404)
                res.send({ ERROR: 'Serie not found' })
            }else res.send(serieid)

    } catch (error) {
        console.log(error)
        res.send({ERROR: "Serie not found"})
    }
}
// serie por nombre (Y)
SeriesController.getSerieByName = async (req, res) => {
    const name= req.body.name
    try {
        const seriename=await Serie.find({name:name})
            if(seriename.length===0){
                res.status(404)
                res.send({ERROR: 'Serie not Found'})
            }else res.send(seriename)
            
    } catch (error) {
        console.log(error);
        res.send({ERROR: 'Server error'})
    }
}
//series que vayan a tener un cap en los proximos 7 dias (Y)
SeriesController.getSerieByTransmissions = async (req, res) => {
    const name= req.body.name
    try {
        const serietrans = await Transmission.find({ name: name })
        if (serietrans.length === 0) {
            res.status(404)
            res.send({ERROR:'Status not found'})
        }else{
        let genre = serietrans[0].id
        const foundserie=await Serie.find({ status_serie: genre })
        console.log(foundserie)
        if(foundserie.length ===0){
            res.status(404)
            res.send({"ERROR":'Serie not found'}) 
        }else res.send(foundserie)
        
        }
            

           
    } catch (error) {
        res.send({ERROR: 'Server error'})
        console.log(error);
    }
}
// series que vayan a tener un pase en teatros o cine


module.exports = SeriesController;