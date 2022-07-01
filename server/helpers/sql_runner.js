const { Pool } = require("pg")

const pool = new Pool({
   host: 'localhost',
   user: 'user',
   database: 'star_wars'
})

const SqlRunner = {
    run: (sql, values = []) => {
        console.log("run in SqlRunner", sql, values)
        return pool.query(sql, values)
    }
}

module.exports = SqlRunner