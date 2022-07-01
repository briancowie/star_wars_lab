// Controller
const express = require("express");
const charactersService = require("../services/characters_service")


const charactersRouter = express.Router();

// Index - get all the characters
charactersRouter.get("/starwars", (req, res) => {
  console.log(req.query)
  charactersService.selectAll()
    .then(characters => res.json(characters))
});

// Index - get all the darkside characters
charactersRouter.get("/starwars/darkside", (req, res) => {
  charactersService.selectAllDarkside()
    .then(characters => res.json(characters))
});

// Show - get one tea by id
charactersRouter.get("/starwars/:id", (req, res) => {
  const id = Number(req.params.id);
  charactersService.selectOneById(id)
    .then(character => {
      if (character) {
        res.json(character)
      } else {
        res.sendStatus(404)
      }
    })
});

// Create - add a character
charactersRouter.post("/starwars", (req, res) => {
  const characterToAdd = req.body;
  charactersService.insertOne(characterToAdd)
    .then(_ => res.sendStatus(201))
    .catch(err => res.status(500).json(err))
});

// // Destroy - delete a tea
charactersRouter.delete("/starwars/:id", (req, res) => {
  const id = Number(req.params.id);
  charactersService.deleteOne(id)
    .then(result => {
      if (result.rowCount > 1){
        res.sendStatus(204)
      } else {
        res.sendStatus(404)
      }
    })
});

// Update - replace a tea
charactersRouter.put("/starwars/:id", (req, res) => {
  const id = Number(req.params.id);
  const updatedCharacter = req.body;
  charactersService.updateOne(id, updatedCharacter)
    .then(_ => res.sendStatus(204))
});


module.exports = charactersRouter;