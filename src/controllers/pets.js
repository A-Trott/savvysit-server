import PetService from '#services/pets.js'
import ProfileService from "#services/profiles.js";


class PetController {

  async listAll(req, res) {
    try {
      const data = await PetService.listAll();
      res.status(200).json(data)

    } catch (error) {
      res.status(500).json({message: error.message})
    }
  }

  async listById(req, res) {
    try {
      const data = await PetService.listById(req.params.id);
      res.status(200).json(data)

    } catch (error) {
      res.status(500).json({message: error.message})
    }
  }

}

export default new PetController();