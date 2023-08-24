import { getCharactersByPageSwapi } from "../../application/types";
import { Character } from "../domain/entities/classes/Character";

export interface CharacterRepository {
  // from swapi
  getCharactersByPage(page: number): Promise<getCharactersByPageSwapi>;
  // from dynamodb
  getCharacter(id: string): Promise<Character>;
  getCharacters(): Promise<Character[]>;
  createCharacterWithBiography(data: Character): Promise<Character>;
  updateCharacter(id: string, character: Partial<Character>): Promise<Character>;
  deleteCharacter(id: string): Promise<boolean>;
}
