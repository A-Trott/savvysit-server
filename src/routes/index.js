import { Router } from 'express';
import profileRouter from '#app/routes/profile.js'
import petsRouter from '#app/routes/pets.js'

const routes = Router();

// Routing middleware


// All Possible Routes

routes.use('/api/profile', profileRouter)
routes.use('/api/pets', petsRouter)


export default routes