// create a character test

import { APIGatewayProxyResult, Context } from "aws-lambda";
import { charactersFromDBMock } from "../mocks/charactersFromDBMock";
import { handler } from "../../src/application/controllers/character/api/createCharacterController";
import { Character } from "../../src/core/domain/entities/classes/Character";

describe("createCharacterController", () => {
  const mockValue = charactersFromDBMock[0];

  const mockAxios = {
    post: jest.fn().mockResolvedValue(mockValue),
  };

  // request data mock
  const mockRequest: Character = {
    characterId: "test",
    name: "test",
    height: "test",
    mass: "test",
    hair_color: "test",
    skin_color: "test",
    eye_color: "test",
    birth_year: "test",
    gender: "text",
    homeworld: "test",
    films: ["test"],
    species: ["test"],
    vehicles: ["test"],
    starships: ["test"],
    created: "test",
    edited: "test",
    url: "test",
    biography: "test",
    idSwapi: "test",

    setBiografia: jest.fn(),
    changeFieldsToSpanish: jest.fn(),
    generateCharacterId: jest.fn(),
  };

  jest.mock("axios", () => mockAxios);

  it("should return 200", async () => {
    const mockContext = {} as Context;

    const result = (await handler(
      {
        body: JSON.stringify(mockRequest),
      },
      mockContext,
      () => {}
    )) as APIGatewayProxyResult;

    expect(result.statusCode).toEqual(200);
  });
});
