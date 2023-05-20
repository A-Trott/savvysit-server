import { Router } from 'express';
import PetController from '#controllers/pets.js'

const petRouter = Router();

petRouter
  .get('/', PetController.listAll)
  .get('/:id', PetController.listById)
export default petRouter