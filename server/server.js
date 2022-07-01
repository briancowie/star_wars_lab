const express = require("express");
const cors = require("cors")
const charactersRouter = require("./routers/characters_router")

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api", charactersRouter)

app.get("/", (req, res) => {
  res.send("<h1>I am the homepage</h1>")
})

app.listen(9000, () => {
  console.log("Server started on port 9000")
})
