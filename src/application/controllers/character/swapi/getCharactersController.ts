import { APIGatewayProxyResult, Handler } from "aws-lambda";
import { getCharactersByPageSwapi } from "../../../types";
import { CharacterService } from "../../../../infraestructure/services/characterService";

const characterService = new CharacterService();

export const handler: Handler = async (
  event
): Promise<APIGatewayProxyResult> => {
  try {
    const page = event.pathParameters?.page;

    const result: getCharactersByPageSwapi =
      await characterService.getCharactersByPage(page);
    return {
      statusCode: 200,
      body: JSON.stringify({
        result,
      }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error
      }),
    };
  }
};