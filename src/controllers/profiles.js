
import ProfileService from '#services/profiles.js';


class ProfileController {
  async listById(req, res) {
    try {
      const data = await ProfileService.listById(req.params.id);
      res.status(200).json(data)

    } catch (error) {
      res.status(500).json({message: error.message})
    }
  }

  async listHomeOwners(req, res) {
    try {
      const data = await ProfileService.listHomeOwners(req.params.id);
      res.status(200).json(data)

    } catch (error) {
      res.status(500).json({message: error.message})
    }
  }

  async listHomeOwnerById(req, res) {
    try {
      const data = await ProfileService.listHomeOwnerById(req.params.id);
      res.status(200).json(data)

    } catch (error) {
      res.status(500).json({message: error.message})
    }
  }

  async listHomeOwnerPets(req, res) {
    try {
      const data = await ProfileService.listHomeOwnerPets(req.params.id);
      res.status(200).json(data)

    } catch (error) {
      res.status(500).json({message: error.message})
    }
  }
}

export default new ProfileController();