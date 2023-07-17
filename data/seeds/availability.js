/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// generate time relative to today's date
const today = Number(new Date());
const generateTimeStamp = (increment)=>{
  return today+increment
}

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("availability").del();
  await knex("availability").insert([
    {
      id: 1,
      provider_id: 1,
      timestamp: generateTimeStamp(50000),
      is_available: true,
    },
    {
      id: 2,
      provider_id: 1,
      timestamp: generateTimeStamp(105000000),
      is_available: true,
    },

    {
      id: 3,
      provider_id: 2,
      timestamp: generateTimeStamp(50000),
      is_available: true,
    },
    {
      id: 4,
      provider_id: 2,
      timestamp: generateTimeStamp(105000000),
      is_available: true,
    },

    {
      id: 5,
      provider_id: 3,
      timestamp: generateTimeStamp(50000),
      is_available: true,
    },
    {
      id: 6,
      provider_id: 3,
      timestamp: generateTimeStamp(105000000),
      is_available: true,
    },

    {
      id: 7,
      provider_id: 4,
      timestamp: generateTimeStamp(50000),
      is_available: true,
    },
    {
      id: 8,
      provider_id: 4,
      timestamp: generateTimeStamp(105000000),
      is_available: true,
    },

    {
      id: 9,
      provider_id: 5,
      timestamp: generateTimeStamp(50000),
      is_available: true,
    },
    {
      id: 10,
      provider_id: 5,
      timestamp: generateTimeStamp(105000000),
      is_available: true,
    },

    {
      id: 11,
      provider_id: 1,
      timestamp: generateTimeStamp(200000000),
      is_available: true,
    },
    {
      id: 12,
      provider_id: 1,
      timestamp: generateTimeStamp(205000000),
      is_available: true,
    },

    {
      id: 13,
      provider_id: 2,
      timestamp: generateTimeStamp(200000000),
      is_available: true,
    },
    {
      id: 14,
      provider_id: 2,
      timestamp: generateTimeStamp(205000000),
      is_available: true,
    },

    {
      id: 15,
      provider_id: 3,
      timestamp: generateTimeStamp(200000000),
      is_available: true,
    },
    {
      id: 16,
      provider_id: 4,
      timestamp: generateTimeStamp(200000000),
      is_available: true,
    },

    {
      id: 17,
      provider_id: 4,
      timestamp: generateTimeStamp(205000000),
      is_available: true,
    },
    {
      id: 18,
      provider_id: 5,
      timestamp: generateTimeStamp(200000000),
      is_available: true,
    },
    {
      id: 19,
      provider_id: 1,
      timestamp: generateTimeStamp(300000000),
      is_available: true,
    },
    {
      id: 20,
      provider_id: 1,
      timestamp: generateTimeStamp(30050000),
      is_available: true,
    },

  ]);
};
