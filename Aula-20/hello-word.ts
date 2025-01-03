import express from "express" 

const app = Router()
const url = "http://localhost"
const port = 3300

app.get("/", (request, response) => {
    return response.send("Hello word")
} )

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${url}:${port}`)
})