import axios from "axios";
import { BASE_URL_SWAPI } from "../constants";

const httpConnector = axios.create({
  baseURL: BASE_URL_SWAPI,
});

export default httpConnector;
