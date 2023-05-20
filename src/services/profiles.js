import Profile from '#models/profile.js'
class ProfileService {
  listById(id) {
    return Profile.listById(id);
  }

  listHomeOwners(id) {
    return Profile.listHomeOwners(id);
  }

  listHomeOwnerById(id) {
    return Profile.listHomeOwnerById(id);
  }

  listHomeOwnerPets(id) {
    return Profile.listHomeOwnerPets(id);
  }
}

export default new ProfileService();

