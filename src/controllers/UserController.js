const { create, getById } = require("../models/UserModel");
const UserModel = require ("../models/UserModel");

modeule.exports = {
    async create (request, response){
        try{
            const NewUser = request.body;

            const result = await UserModel.create(newUser);

            return response.status(200).json(result);

        }
        catch(error){
            console.warn("User creation failed:", error);
            return response.status(500).json({notification: "internal server error while trying to create User"});

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

        }
        catch(error){

        }
    },

    async create (request, response){
        try{

        }
        catch(error){

        }
    }



}