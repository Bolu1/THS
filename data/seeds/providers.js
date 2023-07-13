/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('providers').del()
  await knex('providers').insert([
    {id: 1, provider: 'rowValue1'},
    {id: 2, provider: 'rowValue2'},
    {id: 3, provider: 'rowValue3'}
  ]);
};
