const express = require ("express");
const routes = express.Router();

const UserController = require ("./controllers/UserController");
const JogoController = require ("./controllers/JogoController");
const JogosFavoritosController = require ("./controllers/JogosFavoritosController");

//User
routes.get("/user/:user_id", UserController.getById);
routes.post("/user", UserController.create);
routes.put("/user/:user_id", UserController.update);
routes.delete("/user/:user_id", UserController.delete);


//Jogo
routes.get("/jogo/:jogo_id", JogoController.getById);
routes.post("/jogo", JogoController.create);
routes.put("/jogo/:jogo_id", JogoController.update);
routes.delete("/jogo/:jogo_id", JogoController.delete);

//Jogos Favoritos
routes.get("/jogos_favoritos/:fav_id", JogosFavoritosController.getById);
routes.post("/jogos_favoritos", JogosFavoritosController.create);
routes.put("/jogos_favoritos/:fav_id", JogosFavoritosController.update);
routes.delete("/jogos_favoritos/:fav_id", JogosFavoritosController.delete);

module.exports = routes;