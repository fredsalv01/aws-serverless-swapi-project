import { Character } from "../../core/domain/entities/classes/Character";
import { CharacterRepository } from "./../../core/repositories/characterRepository";
import CharacterRepositoryImplementation from "./../../config/index";

export class CharacterService implements CharacterRepository {
  // This method is comming from SWAPI
  getCharactersByPage(page: number): Promise<Character[]> {
    throw new Error("Method not implemented.");
  }

  // this methods are comming from DynamoDB
  async getCharacter(id: string): Promise<Character> {
    return CharacterRepositoryImplementation.getCharacterById(id);
  }

  async getCharacters() {
    return CharacterRepositoryImplementation.getCharacters();
  }

  createCharacterWithBiography(data: Character): Promise<Character> {
    return CharacterRepositoryImplementation.createCharacter(data);
  }

  async updateCharacter(characterId: string, character: Character) {
    return CharacterRepositoryImplementation.updateCharacter(
      characterId,
      character
    );
  }

  async deleteCharacter(characterId: string): Promise<boolean> {
    return CharacterRepositoryImplementation.deleteCharacter(characterId);
  }
}
