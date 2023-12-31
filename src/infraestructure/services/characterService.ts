import { Character } from "../../core/domain/entities/classes/Character";
import { CharacterRepository } from "../../core/repositories/characterRepository";
import CharacterRepositoryImplementation from "../../config/index";
import httpConnector from "../../config/http-connector/http-connector";
import {
  CharactersSpanish,
  SwapiPeopleByPageResponse,
  getCharactersByPageSwapi,
} from "../../application/types";

export class CharacterService implements CharacterRepository {
  // This method is comming from SWAPI
  async getCharactersByPage(page: number): Promise<getCharactersByPageSwapi> {
    try {
      const { data }: SwapiPeopleByPageResponse = await httpConnector.get(
        `people/?page=${page}`
      );

      const characters: Character[] = data.results.map((character) => {
        const characterItem = new Character(character);
        characterItem.setBiografia("");
        characterItem.characterId = undefined;
        return characterItem;
      });

      return {
        conteo: data.count,
        siguiente: data.next ?? null,
        anterior: data.previous ?? null,
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
  async getCharacters(): Promise<CharactersSpanish[]> {
    try {
      const result = await CharacterRepositoryImplementation.getCharacters();
      console.log("result from api  ", result);
      const response = [
        ...result.map((character) => {
          const newCharacter = new Character(character, character.characterId);
          newCharacter.setBiografia(character.biography);
          return newCharacter.changeFieldsToSpanish();
        }),
      ];
      return response;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async getCharacter(id: string): Promise<CharactersSpanish> {
    const result = await CharacterRepositoryImplementation.getCharacterById(id);
    return result.changeFieldsToSpanish();
  }

  async createCharacterWithBiography(data: Character): Promise<Character> {
    data.setBiografia("");
    data.generateCharacterId();
    console.log("data a enviar", data);
    try {
      const result = await CharacterRepositoryImplementation.createCharacter(
        data
      );
      console.log("result from api  ", result);
      return result;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
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
