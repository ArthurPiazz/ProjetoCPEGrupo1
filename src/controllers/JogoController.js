const { create, getById } = require("../models/JogoModel");
const JogoModel = require ("../models/JogoModel");

modeule.exports = {
    async create (request, response){
        try{
            const NewJogo = request.body;

            const result = await JogoModel.create(NewJogo);

            return response.status(200).json(result);

        }
        catch(error){
            console.warn("Jogo creation failed:", error);
            return response.status(500).json({notification: "internal server error while trying to create Jogo"});

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
            const {jogo_id} = request.params;
            const NewJogo = request.body;

            await JogoModel.updateById(jogo_id, NewJogo);

            return response.status(200).json({notification: "Jogo update sucessfully"});

        }
        catch(error){
            console.warn("Jogo update failed:", error);
            return response.status(500).json({notification: "internal server error while trying to update Jogo"});
        }
    },

    async delete (request, response){
        try{
            const {jogo_id} = request.params;

            const result = await JogoModel.delete(jogo_id);

            if(result === 0){
                return response.status(400).json({notification: "jogo_id not found"});
            }

            return response.status(200).json({notification: "Jogo deleted sucessfully"});

        }
        catch(error){
            console.warn("Jogo delete failed:", error);
            return response.status(500).json({notification: "internal server error while trying to delete Jogo"});

        }
    }
}