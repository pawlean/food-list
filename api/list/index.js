const mockList = require('./mock/list');

const knex = require('knex')({
  dialect: process.env.SQL_DIALECT || 'sqlite3',
  // TODO take details from env for prod
  connection: {
    filename: process.env.SQLITE_PATH || '../data.db',
  }
});

// module.exports = (req, res) => mockList();

module.exports = (req, res) => {
  knex
    .select('*')
    .from('foods')
    .then(result => res.end(JSON.stringify(result)))
    .catch(err => {
      res.statusCode = 500;
      res.end("Failed to get results.");
    });
};
