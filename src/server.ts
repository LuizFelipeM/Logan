import cors from "cors"
import express from "express"

const app = express()

app.use(cors())

app.get("/",(req, res) => {
    res.send("Qualquer Coisa")
})

app.listen(9868)