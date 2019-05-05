const client = require('./db');

class Users {
  constructor(obj) {
    for (let key in obj) {
      this[key] = obj[key];
    }
  }

  showAll(res, cb) {
		let query = `
			SELECT * FROM	users;
		`;

		client.query(query, (err, result) => {
			if (err) throw err;
			res.render('../views/freelancers.pug', { freelancers: result });
		});
  }
}

module.exports = Users;