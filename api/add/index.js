const { json } = require('micro');

const knex = require('knex')({
  dialect: process.env.SQL_DIALECT || 'sqlite3',
  // TODO take details from env for prod
  connection: {
    filename: process.env.SQLITE_PATH || '../data.db',
  }
});

knex.schema.createTable('foods', table => {
  table.string('url').primary();
  table.string('name');
  table.string('carbs');
  table.string('protein');
  table.string('fat');
}).then(console.log).catch(console.error);

const isNumber = num => num.toString().match(/\d+(\.\d+)?/)[0];

module.exports = async (req, res) => {
  const { url, name, fat, protein, carbs } = await json(req);

  if (!url || !name || !isNumber(fat) || !isNumber(protein) || !isNumber(carbs)) {
    res.statusCode = 400;
    return 'Invalid param: Either url, name, fat, protein, carbs';
  }

  const data = {
    url,
    name,
    fat: fat.toString(),
    protein: protein.toString(),
    carbs: carbs.toString(),
  };

  knex('foods')
    .insert(data)
    .then(inserted => {
      console.log({ inserted });
      res.end("OK");
    })
    .catch(err => {
      res.statusCode = 500;
      res.end("Failed to insert into DB.");
    });
};
