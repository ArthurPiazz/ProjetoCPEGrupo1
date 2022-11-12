/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("jogos_favoritos", function (table) {
        table.string("fav_id").primary().notNullable();
        table.string("user_id").notNullable();
        table.string("jogo_id").notNullable();
        table.string("jogo_nome").notNullable();
        table.string("thumbnail").notNullable();
        table.boolean("is_fav").notNullable();
        table.foreign("is_fav").references("is_fav").inTable("jogo").onDelete("cascade");
        table.foreign("user_id").references("user_id").inTable("user").onDelete("cascade");
        table.foreign("jogo_id").references("jogo_id").inTable("jogo").onDelete("cascade");
        table.foreign("jogo_nome").references("jogo_nome").inTable("jogo").onDelete("cascade")
        table.foreign("thumbnail").references("thumbnail").inTable("jogo").onDelete("cascade")  
     });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("jogos_favoritos");
  
};
