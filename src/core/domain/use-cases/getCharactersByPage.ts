import { Character } from "../entities/classes/Character";
import { CharacterRepository } from "../../repositories/characterRepository";

interface GetCharactersByPage {
  page: number;
}

export class GetCharactersByPageUseCase {
  private characterRepository: CharacterRepository;

  constructor(characterRepository: CharacterRepository) {
    this.characterRepository = characterRepository;
  }

  async execute(data: GetCharactersByPage): Promise<Character[]> {
    const { page } = data;
    const characters = await this.characterRepository.getCharactersByPage(page);
    return characters;
  }
}