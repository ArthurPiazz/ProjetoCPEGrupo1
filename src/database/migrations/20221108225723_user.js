/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("user", function (table) {
       table.string("user_id").primary().notNullable();
       table.string("name").primary().notNullable();
       table.string("phone_number").primary().notNullable();
       table.string("password").primary().notNullable();
       table.string("email").primary().notNullable();
       table.int("plano").primary().notNullable();       
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("user");
};
