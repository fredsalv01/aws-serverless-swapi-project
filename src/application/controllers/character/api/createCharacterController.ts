import { Handler } from "aws-lambda";
import { CharacterService } from "../../../../infraestructure/services/characterService";
import { Character } from "../../../../core/domain/entities/classes/Character";

const characterService = new CharacterService();

export const handler: Handler = async (
  event
): Promise<Character> => {
  const { body } = event;

  const data: Character = new Character(JSON.parse(body));

  const result: Character =
    await characterService.createCharacterWithBiography(data);
  return result;
};
