import { People } from "../../core/domain/entities/interfaces/People";

export type SwapiPeopleByPageResponse = {
  data: {
    count: number;
    next: string | null;
    previous: string | null;
    results: People[];
  };
};

export type getCharactersByPageSwapi = Readonly<{
  conteo: number;
  siguiente: string | null;
  anterior: string | null;
  resultados: CharactersSpanish[];
}>;

export type CharactersSpanish = {
  id?: string | undefined;
  nombre: string;
  altura: string;
  masa: string;
  color_cabello: string;
  color_piel: string;
  color_ojo: string;
  fecha_nacimiento: string;
  genero: string;
  mundo_natal: string;
  peliculas: string[];
  especies: string[];
  vehiculos: string[];
  naves_estelares: string[];
  creado: string;
  editado: string;
  url: string;
  biografia: string;
  idSwapi: string;
};
