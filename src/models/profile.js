import profilesFile from '#data/profiles.json' assert {type: 'json'};
import petsFile from '#data/pets.json' assert {type: 'json'};

class Profile {
  listById = (id) => profilesFile.find((profile) => profile.id === id)
  listHomeOwners = (id) => profilesFile.filter((profile) => profile.id !== id && profile.is_sitter === 'false')

  listHomeOwnerById = (id) => profilesFile.find((profile) => profile.id === id)

  listHomeOwnerPets = (id) => petsFile.filter((pets) => pets.owner_id === id)
}

export default new Profile()