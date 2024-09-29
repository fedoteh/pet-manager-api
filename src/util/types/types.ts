
/**
 * Accepted Species in the application
 */
enum Species {
  Dogs = 'dogs',
  Cats = 'cats'
}
  
/**
 * Interface for the pet object
 */
interface Pet {
  id: number;
  name: string;
  lastname: string;
  sex: "male" | "female";
  breed: string | null;
  color: string[];
  weight: number;
  profilePicture?: string;
}

/**
 * Interface for the dog object.
 * Extends the `Pet` interface.
 * 
 * @interface Dog
 * @extends {Pet}
 * 
 * @property {string[]} [activities] - Optional array of activities the dog enjoys.
 * @property {string} [favoriteSnack] - Optional favorite snack of the dog.
 */
interface Dog extends Pet {
  activities?: string[];
  favoriteSnack?: string;
}

/**
 * Interface for the cat object.
 * Extends the `Pet` interface.
 * 
 * @interface Cat
 * @extends {Pet}
 * 
 * @property {string} [favoriteToy] - Optional favorite toy of the cat.
 * @property {string} [favoritePlace] - Optional favorite place of the cat.
 */
interface Cat extends Pet {
  favoriteToy?: string;
  favoritePlace?: string;
}
  
export { Species, Pet, Dog, Cat };
  