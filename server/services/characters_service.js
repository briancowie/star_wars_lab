const SqlRunner = require('../helpers/sql_runner')

const charactersService = {

  selectAll: () => {
    return SqlRunner.run("SELECT * FROM characters")
      .then(result => result.rows)
  },

  selectOneById: (id) => {
    return SqlRunner.run("SELECT * FROM characters WHERE id = $1", [id])
      .then(result => result.rows[0])
  },

  updateOne: (id, updatedCharacter) => {
    return SqlRunner.run(`
      UPDATE characters 
      SET (name, darkside, age) = ($1, $2, $3) 
      WHERE id = $4`, 
      [updatedCharacter.name, updatedCharacter.darkside, updatedCharacter.age, id])
  },
  deleteOne: (id) => {
    return SqlRunner.run("DELETE FROM characters WHERE id = $1", [id])
      .then(result => result.rowCount)
  },
  insertOne: (newCharacter) => {
    return SqlRunner.run("INSERT INTO characters(name, darkside, age) VALUES ($1, $2, $3)", [ newCharacter.name , newCharacter.darkside , newCharacter.age ])
  },
  selectAllDarkside: () => {
  return SqlRunner.run("SELECT * FROM characters WHERE darkside = true")
    .then(result => result.rows)
},
};



module.exports = charactersService;
