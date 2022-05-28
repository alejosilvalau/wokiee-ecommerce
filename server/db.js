require("dotenv").config();
const { Client } = require("pg");

// const connectionString = `postgresql://${"postgres"}:${"8880"}@${"localhost"}:${5432}/${"wokiee"}`;

const connectionString = `postgresql://${process.env.PG_USER}:${
	process.env.PG_PASSWORD
}@${process.env.PG_HOST}:${5432}/${process.env.PG_DATABASE}`;

// const pool = new Client({
// 	connectionString:
// 		process.env.NODE_ENV === "production"
// 			? process.env.DATABASE_URL
// 			: connectionString,
// 	ssl: {
// 		rejectUnauthorized: false,
// 	},
// });

const pool = (() => {
	if (process.env.NODE_ENV !== "production") {
		return new Client({
			connectionString,
			ssl: false,
		});
	} else {
		return new Client({
			connectionString: process.env.DATABASE_URL,
			ssl: {
				rejectUnauthorized: false,
			},
		});
	}
})();

pool.connect();

console.log("Connected to db");

module.exports = pool;
