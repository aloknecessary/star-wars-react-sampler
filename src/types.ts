// TODO: define interface
export interface PersonType {
  name: string,
  age: number,
  eye_color: string,
  hair_color: string,
  height: number,
  mass: number,
  gender:string,
  skin_color: string,
  birth_year: string,
  films: string[],
  species: string[],
  vehicles: string[],
  starships: string[],
}


export interface FilmType {
  title: string,
  opening_crawl: string,
  director:string,
  producer: string,
  release_date: string
}

export interface SpeciesType {
  name: string,
  classification: string,
  designation:string,
  average_height: string,
  skin_colors:string,
  hair_colors:string,
  eye_colors:string,
  average_lifespan:string,
  language:string
}