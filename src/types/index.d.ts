interface PokemonType {
  name: string
  url: string
}

interface PokemonDetailedType {
  name: string
  image: string | null
  types: string[]
}

interface PokemonListApiResponseType {
  count: number
  results: PokemonType[]
}

type GetPokemonListType =
  | {
      count: number
      results: PokemonType[]
      error?: undefined
    }
  | {
      count?: undefined
      results?: undefined
      error: string
    }

interface PokemonTypeApiResponseType {
  type: {
    name: string
  }
}

interface PokemonDetailedApiResponseType {
  name: string
  sprites: {
    front_default: string
  }
  types: PokemonTypeApiResponseType[]
}

type GetPokemonDetailedType =
  | (PokemonDetailedType & { error?: undefined })
  | (Partial<PokemonDetailedType> & { error: string })

type PokemonTypeKeyType =
  | 'bug'
  | 'ice'
  | 'dark'
  | 'fire'
  | 'rock'
  | 'water'
  | 'fairy'
  | 'ghost'
  | 'grass'
  | 'steel'
  | 'dragon'
  | 'flying'
  | 'ground'
  | 'normal'
  | 'poison'
  | 'psychic'
  | 'fighting'
  | 'electric'
