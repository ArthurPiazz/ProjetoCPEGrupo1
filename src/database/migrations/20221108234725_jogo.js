/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable("jogo", function (table) {
       table.string("user_id").notNullable();
       table.foreign("user_id").references("user_id").inTable("user").onDelete("cascade");
       table.string("jogo_id").primary().notNullable();
       table.float("horas_jogadas").notNullable();
       table.boolean("is_fav").notNullable();
       table.string("thumbnail").notNullable();  
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("jogo");
};
