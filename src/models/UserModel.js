const connection = require ("../database/connection");
const {v4: uuidv4} = require ('uuid');

module.exports = {
    async create(user) {
        const user_id = uuidv4();
        user.user_id = user_id;
        
        const result = await connection("user").insert(user);
        return result;
    },

    async getByFields(field={}){
        const result = await connection("user").where(field).select("*");
        return result;
    },

    async getAll(){
        const result = await connection("user").select("*");
        return result;
    },

    async getById({user_id}){
        const result = await connection("user").where({user_id}).select("*").first();
        return result;
    },

    async updateById (user_id, user){
        const result = await connection("user").where({user_id}).update(user);
        return result;
    },

    async deleteById(user_id){
        const result = await connection("user").where({user_id}).delete();
        return result;
    },
}