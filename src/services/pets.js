import Pet from '#models/pet.js'

class PetService {

  listAll() {
    return Pet.listAll();
  }
  listById(id) {
    return Pet.listById(id);
  }


}

export default new PetService();