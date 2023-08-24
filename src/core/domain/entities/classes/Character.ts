import { CharactersSpanish } from "../../../../application/types";
import { People } from "../interfaces/People";

export class Character implements People {
  characterId: string;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
  biography: string;

  constructor(people: People) {
    this.name = people.name;
    this.height = people.height;
    this.mass = people.mass;
    this.hair_color = people.hair_color;
    this.skin_color = people.skin_color;
    this.eye_color = people.eye_color;
    this.birth_year = people.birth_year;
    this.gender = people.gender;
    this.homeworld = people.homeworld;
    this.films = people.films;
    this.species = people.species;
    this.vehicles = people.vehicles;
    this.starships = people.starships;
    this.created = people.created;
    this.edited = people.edited;
    this.url = people.url;
    this.biography = "";
  }

  public setBiografia(biography: string): void {
    if (biography === "") {
      this.biography =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
    }else{
      this.biography = biography;
    }
  }

  //change fields to spanish
  public changeFieldsToSpanish(): CharactersSpanish {
    return {
      nombre: this.name,
      altura: this.height,
      masa: this.mass,
      color_cabello: this.hair_color,
      color_piel: this.skin_color,
      color_ojo: this.eye_color,
      fecha_nacimiento: this.birth_year,
      genero: this.gender,
      mundo_natal: this.homeworld,
      peliculas: this.films,
      especies: this.species,
      vehiculos: this.vehicles,
      naves_estelares: this.starships,
      creado: this.created,
      editado: this.edited,
      url: this.url,
      biografia: this.biography,
    }
  }
}
