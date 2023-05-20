import { Router } from 'express';
import ProfileController from '#controllers/profiles.js'

const profileRouter = Router();

profileRouter
  .get('/:id', ProfileController.listById)
  .get('/:id/homeowners', ProfileController.listHomeOwners)
  .get('/homeowner/:id', ProfileController.listHomeOwnerById)
  .get('/homeowner/:id/pets', ProfileController.listHomeOwnerPets)

export default profileRouter