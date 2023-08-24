import { Character } from "../../core/domain/entities/classes/Character";
import { CharacterRepository } from "../../core/repositories/characterRepository";
import CharacterRepositoryImplementation from "../../config/index";
import httpConnector from "../../config/http-connector/http-connector";
import {
  SwapiPeopleByPageResponse,
  getCharactersByPageSwapi,
} from "../../application/types";

export class CharacterService implements CharacterRepository {
  // This method is comming from SWAPI
  async getCharactersByPage(page: number): Promise<getCharactersByPageSwapi> {
    try {
      const result: SwapiPeopleByPageResponse = await httpConnector.get(
        `people/?page=${page}&format=json`
      );

      const characters: Character[] = result.results.map((character) => {
        return new Character(character);
      });

      return {
        conteo: result.count,
        siguiente: result.next,
        anterior: result.previous,
        resultados: [
          ...characters.map((character) => character.changeFieldsToSpanish()),
        ],
      };
    } catch (error) {
      console.error(error);
      return {
        conteo: 0,
        siguiente: null,
        anterior: null,
        resultados: [],
      };
    }
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
