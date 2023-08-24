import axios from "axios";

const httpConnector = axios.create({
  baseURL: "https://swapi.py4e.com/api/",
});

export default httpConnector;
