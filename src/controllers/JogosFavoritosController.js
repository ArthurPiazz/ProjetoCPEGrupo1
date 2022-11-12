const { create, getById } = require("../models/JogosFavoritosModel");
const JogoFavoritosModel = require ("../models/JogosFavoritosModel");

modeule.exports = {
    async create (request, response){
        try{
            const NewJogoFavorito = request.body;

            const result = await JogosFavoritosModel.create(NewJogoFavorito);

            return response.status(200).json(result);

        }
        catch(error){
            console.warn("JogoFavorito creation failed:", error);
            return response.status(500).json({notification: "internal server error while trying to create JogoFavorito"});

        }
    },

    async getById (request, response){
        try{

        }
        catch(error){

        }
    },

    async update (request, response){
        try{
            const {fav_id} = request.params;
            const NewJogoFavorito = request.body;

            await JogosFavoritosModel.updateById(fav_id, NewJogoFavorito);

            return response.status(200).json({notification: "JogoFavoritos update sucessfully"});

        }
        catch(error){
            console.warn("JogoFavoritos update failed:", error);
            return response.status(500).json({notification: "internal server error while trying to update JogoFavoritos"});
        }
    },

    async delete (request, response){
        try{
            const {fav_id} = request.params;

            const result = await JogosFavoritosModel.delete(fav_id);

            if(result === 0){
                return response.status(400).json({notification: "fav_id not found"});
            }

            return response.status(200).json({notification: "JogoFavorito deleted sucessfully"});

        }
        catch(error){
            console.warn("JogoFavorito delete failed:", error);
            return response.status(500).json({notification: "internal server error while trying to delete JogoFavorito"});

        }
    }
}