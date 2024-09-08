/**
 * Accepted Species in the application
 */
export enum Species {
    Dogs = 'dogs',
    Cats = 'cats'
  }
  
/**
 * Interface for the pet object
 */
export type Pet = {
      id: number;
      name: string;
      lastname: string;
      sex: "male" | "female";
      breed: string | null;
      color: string[];
      weight: number;
      profilePicture: string;
  }
  
  
  