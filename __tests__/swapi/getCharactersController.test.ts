import { APIGatewayProxyResult, Context } from "aws-lambda";
import { charactersFromApiMock } from "../mocks/charactersFromApiMock";
import { handler } from "./../../src/application/controllers/character/swapi/getCharactersController";
//get mocks

describe("getCharactersController from Api", () => {
  const mockValue = charactersFromApiMock;

  const mockAxios = {
    get: jest.fn().mockResolvedValue(mockValue),
  };

  jest.mock("axios", () => mockAxios);

  it("should return 200", async () => {
    const result: APIGatewayProxyResult = await handler(
      { pathParameters: { page: "1" } },
      {} as Context,
      () => {}
    );
    expect(result.statusCode).toBe(200);
    expect(result.body).toBe(JSON.stringify({ ...mockValue }));
  });
});
