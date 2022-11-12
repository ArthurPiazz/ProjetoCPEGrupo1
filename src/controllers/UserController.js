const { create, getById } = require("../models/UserModel");
const UserModel = require ("../models/UserModel");

modeule.exports = {
    async create (request, response){
        try{
            const NewUser = request.body;

            const result = await UserModel.create(NewUser);

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
            const {user_id} = request.params;
            const NewUser = request.body;

            await UserModel.updateById(user_id, NewUser);

            return response.status(200).json({notification: "User update sucessfully"});

        }
        catch(error){
            console.warn("User update failed:", error);
            return response.status(500).json({notification: "internal server error while trying to update User"});
        }
    },

    async delete (request, response){
        try{
            const {user_id} = request.params;

            const result = await UserModel.delete(user_id);

            if(result === 0){
                return response.status(400).json({notification: "user_id not found"});
            }

            return response.status(200).json({notification: "User deleted sucessfully"});

        }
        catch(error){
            console.warn("User delete failed:", error);
            return response.status(500).json({notification: "internal server error while trying to delete User"});

        }
    }
}