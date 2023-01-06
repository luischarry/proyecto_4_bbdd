//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

//Importo el middleware de auth...
const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/isAdmin');

const UsersController = require('../controllers/UsersController');

//Endpoints
router.post("/", UsersController.newUser);

router.put("/", UsersController.updateUser);

router.post("/login", UsersController.loginUser);

//Endpoints with middleware...

router.delete("/admin/deleteuser", auth, isAdmin, UsersController.deleteUser);




//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;