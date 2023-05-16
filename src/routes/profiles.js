import { Router } from 'express';
import profileController from '#controllers/profile.js'

const profileRouter = Router();

profileRouter
  .get('/', profileController.listAll)




export default profileRouter