import {Router} from "express" 

const app = Router()

app.get("/", (request, response) => {
    return response.send("Hello word")
} )