const connection = require ("../database/connection");
const {v4: uuidv4} = require ('uuid');

module.exports = {
    async create(jogos_favoritos) {
        const fav_id = uuidv4();
        jogos_favoritos.fav_id = fav_id;
        
        const result = await connection("jogos_favoritos").insert(jogos_favoritos);
        return result;
    },

    async getById({fav_id, is_fav}){
        const result = await connection("jogos_favoritos").where({fav_id, is_fav}).select("*");
        return result;
    },

    async updateById (fav_id, jogos_favoritos){
        const result = await connection("jogos_favoritos").where({fav_id}).update(jogos_favoritos);
        return result;
    },

    async delete(fav_id){
        const result = await connection("jogos_favoritos").where({fav_id}).delete();
    }
}