export type Person = {
  name?: string;
  url?: string;
  height?: string;
  gender?: string;
  mass?: string;
  birth_year?: string;
  films?: string[];
  species?: string[];
  homeworld?: string;
};

export type SpeciesCache = Record<string, string>;

export type Homeworld = {
  name: string;
  terrain: string;
  climate: string;
  population: string;
};

export type SWAPIListResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};