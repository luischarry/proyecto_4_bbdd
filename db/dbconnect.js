const dbconnect = () => {

    //Importo mongoose
    const mongoose = require("mongoose");

    //Seteamos strictQuery a true para suprimir el warning de strictQuery
    mongoose.set('strictQuery', true);

    //URI
    //const conn_str = process.env.URI;
    const conn_str = `mongodb+srv://felipe:qcXMx2UvxjjlJ3I2@cluster0.rye4cdl.mongodb.net/netflix_fake?retryWrites=true&w=majority`;

    mongoose.connect(
        conn_str,
        { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        },(err) => {
            if (err) {
                console.log("error connecting to the database",err);
            } else {
                console.log("mongodb database is connected");
        }});


}

module.exports = dbconnect;