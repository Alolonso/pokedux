import { getPokemonDetails } from '../api/pokeapi'

export const fetchDetailedPokemonData = async (pokemonList: PokemonType[]) => {
  const fetchWithRetries = async (
    pokemon: PokemonType,
    retries: number
  ): Promise<GetPokemonDetailedType> => {
    let lastError: string | undefined

    for (let attempt = 0; attempt < retries; attempt++) {
      const result = await getPokemonDetails(pokemon)

      if ('error' in result) {
        lastError = result.error
        await new Promise((resolve) => setTimeout(resolve, 1000))
      } else {
        return result
      }
    }

    return {
      error: lastError || 'Unknown error'
    } as Partial<PokemonDetailedType> & { error: string }
  }

  const pokemonDetailedList = await Promise.all(
    pokemonList.map((pokemon) => fetchWithRetries(pokemon, 5))
  )

  return pokemonDetailedList
}
