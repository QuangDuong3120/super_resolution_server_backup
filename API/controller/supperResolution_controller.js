const database = require('./../database_connection.js');

module.exports = {
  getLastedDomain: function (req, res) {
    var sql = `SELECT * FROM superresolutiondatabase.ai_server`;

    database.query(sql, (err, result) => {
      if (err) {
        res.json({ message: `Error: ${err}` });
      } else {
        const lastestDomainIndex = result.length - 1;
        res.json(result[lastestDomainIndex]);
      }
    });
  },

  updateLatestDomain: (req, res) => {
    const domain = req.body.domain;

    var sql = `INSERT INTO superresolutiondatabase.ai_server(domain_name) VALUES(\"${domain}\")`;

    database.query(sql, (err, result) => {
      if (err) {
        res.json({ error: err });
      } else {
        res.json({ message: 'Insert Domain successfully' });
      }
    });
  },
};
