const POOL = require("pg").Pool;
const pool = new POOL({

    connectionString: "postgres://monk:YEP2duBwUtrVv7d7uC22Zuu9PrK7s0Hq@dpg-cjrc5o8jbais73bqcuu0-a.ohio-postgres.render.com/tukey",
    ssl: {
        rejectUnauthorized: false
    }


    // user: "playabook",
    // password: "8896",
    // port: 5432,
    // host: "localhost",
    // database: "jape"
});
module.exports = pool;