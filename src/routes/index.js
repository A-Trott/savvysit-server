import { Router } from 'express';
import profileRouter from '#app/routes/profile.js'

const routes = Router();

// Routing middleware


// All Possible Routes

routes.use('/api/profiles', profileRouter)

export default routes