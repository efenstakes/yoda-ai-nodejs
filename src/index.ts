import OpenAI from 'openai';
import dotenv from 'dotenv'
import path from 'path'
import express from 'express'

// fix __dirname not defined error
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// create express app
const app = express()

// ensure request body is processed well
app.use(express.json())

// get environment vars
dotenv.config({ path: path.join(__dirname, ".env") })
console.log("OPENAPI_KEY ", process.env.OPENAPI_KEY);

// initialize openai
const openai = new OpenAI({
  apiKey: process.env.OPENAPI_KEY, // defaults to process.env["OPENAI_API_KEY"]
});




// start express server
const PORT = process.env.PORT || 8080
app.listen(PORT, ()=> {

    console.log(`Yoda AI Started on PORT ${PORT}`)
})