import dotenv from 'dotenv'
import path from 'path'
import express from 'express'

// fix __dirname not defined error
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// routes
import * as promptsRouter from './prompt/routes.js';


// create express app
const app = express()

// ensure request body is processed well
app.use(express.json())

// get environment vars
dotenv.config({ path: path.join(__dirname, ".env") })
console.log("OPENAPI_KEY ", process.env.OPENAPI_KEY);



// handle index route
app.get("/", async (_req, res)=> {

    res.json({
        apiName: "Yoda AI",
        status: 'running',
    })
})

// handle prompt requests
app.use("/prompts", promptsRouter.default)


// start express server
const PORT = process.env.PORT || 8080
app.listen(PORT, ()=> {

    console.log(`Yoda AI Started on PORT ${PORT}`)
})
