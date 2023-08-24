import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { Character } from "./../../core/domain/entities/classes/Character";

export class CharacterRepositoryImplementation {
  constructor(
    private readonly docClient: DocumentClient,
    private readonly tableName: string
  ) {}

  async getCharacterById(id: string): Promise<Character> {
    const result = await this.docClient
      .get({
        TableName: this.tableName,
        Key: { id },
      })
      .promise();

    return result.Item as Character;
  }

  async getCharacters(): Promise<Character[]> {
    const result = await this.docClient
      .scan({
        TableName: this.tableName,
      })
      .promise();

    return result.Items as Character[];
  }

  async createCharacter(character: Character): Promise<Character> {
    //search if character name already exists
    const result = await this.docClient
      .scan({
        TableName: this.tableName,
        FilterExpression: "name = :name",
        ExpressionAttributeValues: {
          ":name": character.name,
        },
      })
      .promise();

    if (result.Items && result.Items.length > 0) {
      throw new Error("Character already exists");
    } else {
      await this.docClient
        .put({
          TableName: this.tableName,
          Item: character,
        })
        .promise();
      return character;
    }
  }

  async updateCharacter(characterId: string, partialCharacter: Partial<Character>): Promise<Character> {
    const updated = await this.docClient
      .update({
        TableName: this.tableName,
        Key: { characterId },
        UpdateExpression: "set #biography = :biography",
        ExpressionAttributeNames: {
          "#biography": "biography",
        },
        ExpressionAttributeValues: {
          ":biography": partialCharacter.biography,
        },
        ReturnValues: "ALL_NEW",
      })
      .promise();

    return updated.Attributes as Character;
  }

  async deleteCharacter(characterId: string): Promise<boolean> {
    try {
      await this.docClient
      .delete({
        TableName: this.tableName,
        Key: { characterId },
      })
      .promise();
      return true;
    } catch (error) {
      return false;
    }
  }
}
