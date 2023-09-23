import { Router } from 'express'
import { prompt } from './controllers.js'


// create router
const router = Router()


// route to 
router.post("/", prompt)


export default router