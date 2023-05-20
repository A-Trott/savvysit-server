import petsFile from '#data/pets.json' assert {type: 'json'};
import profileFile from '#data/profiles.json' assert {type: 'json'}

class Pet {
  listAll = () => {
    // Create a lookup map for profile data using owner_id as the key
    const profileMap = profileFile.reduce((map, profile) => {
      map[profile.id] = profile.first_name;
      return map;
    }, {});

    // Map through petsFile and include owner's name
    return petsFile.map((pet) => {
      return {
        id: pet.id,
        name: pet.name,
        owner_id: pet.owner_id,
        owner_name: profileMap[pet.owner_id] || 'Unknown',
        animal_type: pet.animal_type,
        age: pet.age
      };
    });
  };

  listById = (id) => petsFile.find((pets) => pets.id === id)

}





export default new Pet();