const User = require('../models/user');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

const authConfig = require('../config/auth');

const UsersController = {};




UsersController.newUser = async (req, res) => {

    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.ROUNDS));
    
    try {

        let user = await User.create({
            name: req.body.name,
            surname: req.body.surname,
            dni: req.body.dni,
            email: req.body.email,
            password: password,
            phone: req.body.phone,
            numerotc: req.body.numerotc
        })

        if (user) {
            res.send({ "Message": `El usuario ${user.name} se ha añadido con éxito` })
        }

    } catch (error) {
        //console.log(error)
        res.send({ "Message": `El usuario ${error.name} no se puede agregar` })
    }

};

UsersController.updateUser = async (req, res) => {

    let dni = req.body.dni;
    let newName = req.body.name;
    let newSurname = req.body.surname;

    try {
        let updated = await User.findOneAndUpdate(
            //Query de búsqueda....
            { dni: dni },
            //Campos a cambiar
            {
                name: newName,
                surname: newSurname
            }).setOptions({ returnDocument: 'after' })
        //con setOptions en este caso voy a exigir que me devuelva el documento modificado

        if (updated) {
            res.send(`Usuario actualizado con éxito`)
        }
    } catch (error) {
        console.log("Error updating user data", error);
    }
}

UsersController.deleteUser = async (req, res) => {
    let dni = req.body.dni;
    let userAdmin = req.user.usuario[0];

    try {

        if(userAdmin.dni !== dni){
            let deleted = await User.findOneAndDelete({
                dni: dni
            })
    
            if (deleted) {
                res.send({ "Message": `El usuario ${deleted.name} ${deleted.surname} se ha eliminado con éxito` })
            } else {
                res.send({"Message": "No hemos encontrado al usuario a borrar"});
            }
        }else{
            res.send({"Message": `Deletion not possible`});

        }
        
    } catch (error) {
        console.log("Error deleting user", error);

    }
};
//login de cliente da token
UsersController.loginUser = async (req, res) => {

    try {

        let userFound = await User.find({
            email: req.body.email
        })
        if (userFound) {      
            if (userFound[0].email === undefined) {
                //No hemos encontrado al usuario...mandamos un mensaje
                res.send("Usuario o password incorrecto");
            } else {
                //Hemos encontrado al usuario, vamos a ver si el pass es correcto      
                if (bcrypt.compareSync(req.body.password, userFound[0].password)) { 
                    let token = jsonwebtoken.sign({ usuario: userFound }, authConfig.SECRET, {
                        expiresIn: authConfig.EXPIRES
                    });
                    let loginOk = `Bienvenido de nuevo ${userFound[0].name}`;
                    res.json({
                        loginOk,
                        //user: userFound,
                        token: token
                    })

                } else {
              
                    res.send("Usuario o password incorrecto");
                }
            }

        }


    } catch (error) {
        res.send("Email o password incorrectos");
    }
}

module.exports = UsersController;