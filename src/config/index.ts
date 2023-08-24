import { CharacterRepositoryImplementation as CharacterRepositoryImpl } from "./../infraestructure/repositories/CharacterRepository";
import createDynamoDBClient from "./aws/database";

let { CHARACTERS_TABLE } = process.env;

if(!CHARACTERS_TABLE){
  CHARACTERS_TABLE = 'characters'
}

const CharacterRepositoryImplementation = new CharacterRepositoryImpl(createDynamoDBClient(), CHARACTERS_TABLE);

export default CharacterRepositoryImplementation