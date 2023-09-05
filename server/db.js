const POOL = require("pg").Pool;
const pool = new POOL({
    user: "playabook",
    password: "8896",
    port: 5432,
    host: "localhost",
    database: "jape"
});
module.exports = pool;