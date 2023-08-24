import { APIGatewayProxyResult, Context } from "aws-lambda";
import { charactersFromDBMock } from "../mocks/charactersFromDBMock";
import { handler } from "./../../src/application/controllers/character/api/getCharactersController";
//get mocks

describe("getCharactersController from db", () => {
  const mockValue = charactersFromDBMock;

  const mockAxios = {
    get: jest.fn().mockResolvedValue(mockValue),
  };

  jest.mock("axios", () => mockAxios);

  it("should return 200", async () => {
    const result: APIGatewayProxyResult = await handler(
      {},
      {} as Context,
      () => {}
    );
    expect(result.statusCode).toBe(200);
    expect(result.body).toBe(JSON.stringify({ ...mockValue }));
  });
});
