import axios from 'axios'

interface PokemonApiResponse {
  count: number
  results: Pokemon[]
}

type GetPokemonListResponse =
  | {
      count: number
      results: Pokemon[]
      error?: undefined
    }
  | {
      count?: undefined
      results?: undefined
      error: string
    }

const pokeapi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 5000
})

export const getPokemonList = async (
  limit: number = 10000,
  offset: number = 0
): Promise<GetPokemonListResponse> => {
  try {
    const { data } = await pokeapi.get<PokemonApiResponse>(`pokemon`, {
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
