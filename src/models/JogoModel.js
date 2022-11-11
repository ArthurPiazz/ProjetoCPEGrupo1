const connection = require ("../database/connection");
const {v4: uuidv4} = require ('uuid');

module.exports = {
    async create(jogo) {
        const jogo_id = uuidv4();
        jogo.jogo_id = jogo_id;
        
        const result = await connection("jogo").insert(jogo);
        return result;
    },

    async getById({jogo_id}){
        const result = await connection("jogo").where({jogo_id}).select("*");
        return result;
    },

    async updateById (jogo_id, jogo){
        const result = await connection("user").where({jogo_id}).update(jogo);
        return result;
    },

    async delete(jogo_id){
        const result = await connection("jogo").where({jogo_id}).delete();
    }
}