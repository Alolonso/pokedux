import axios from 'axios'

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

const pokeapi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 5000
})

export const getPokemonList = async (
  limit: number = 10000,
  offset: number = 0
): Promise<GetPokemonListType> => {
  try {
    const { data } = await pokeapi.get<PokemonListApiResponseType>(`pokemon`, {
      params: { limit, offset }
    })

    return { count: data.count, results: data.results }
  } catch (error) {
    console.error('Error fetching Pokémon list:', error)
    return {
      error: 'There was an issue retrieving the data. Please try again later'
    }
  }
}

export const getPokemonDetails = async (
  pokemon: PokemonType
): Promise<GetPokemonDetailedType> => {
  try {
    const { data } = await pokeapi.get<PokemonDetailedApiResponseType>(
      pokemon.url
    )

    return {
      name: data.name,
      image: data.sprites.front_default,
      types: data.types.map(({ type }) => type.name)
    }
  } catch (error) {
    return {
      error: 'There was an issue retrieving the data. Please try again later'
    }
  }
}
