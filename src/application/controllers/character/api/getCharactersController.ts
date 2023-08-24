import { APIGatewayProxyResult, Handler } from "aws-lambda";
import { CharacterService } from "../../../../infraestructure/services/characterService";
import { CharactersSpanish } from "../../../types";

const characterService = new CharacterService();

export const handler: Handler = async (
  event
): Promise<APIGatewayProxyResult> => {
  const result: CharactersSpanish[] = await characterService.getCharacters();
  return {
    statusCode: 200,
    body: JSON.stringify({
      result,
    }),
  };
};
