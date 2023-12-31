import { APIGatewayProxyResult, Handler } from "aws-lambda";
import { CharacterService } from "../../../../infraestructure/services/characterService";
import { Character } from "../../../../core/domain/entities/classes/Character";

const characterService = new CharacterService();

export const handler: Handler = async (event): Promise<APIGatewayProxyResult> => {
  const { body } = event;

  const data: Character = new Character(JSON.parse(body));

  const result: Character = await characterService.createCharacterWithBiography(
    data
  );

  const createResult = new Character(result, result.characterId);
  createResult.setBiografia(result.biography);
  return {
    statusCode: 200,
    body: JSON.stringify(createResult.changeFieldsToSpanish()),
  }
};
