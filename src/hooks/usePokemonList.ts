import { useState, useCallback, useEffect } from 'react'
import { useAppDispatch } from '../store'
import { fetchDetailedPokemonData } from '../utils/detailedPokemon'
import { setError } from '../store/slices/uiSlice'

export const usePokemonList = (
  currentPage: number,
  pokemonList: PokemonType[]
): { pokemonDetailedList: PokemonDetailedType[] } => {
  const [pokemonDetailedList, setPokemonDetailedList] = useState<
    PokemonDetailedType[]
  >([])
  const dispatch = useAppDispatch()

  const fetchPokemonDetails = useCallback(async () => {
    const startIndex = (currentPage - 1) * 20
    const endIndex = startIndex + 20
    const pokemonSubset = pokemonList.slice(startIndex, endIndex)

    try {
      const detailedList = await fetchDetailedPokemonData(pokemonSubset)

      const validPokemonList = detailedList.filter(
        (pokemon): pokemon is PokemonDetailedType => !('error' in pokemon)
      )

      const errors = detailedList.filter((pokemon) => 'error' in pokemon)
      if (errors.length > 0) {
        dispatch(setError((errors[0] as { error: string }).error))
      } else {
        setPokemonDetailedList(validPokemonList)
      }
    } catch (error) {
      dispatch(setError('Failed to fetch Pokemon details.'))
    }
  }, [currentPage, pokemonList, dispatch])

  useEffect(() => {
    setPokemonDetailedList([])
    fetchPokemonDetails()
  }, [fetchPokemonDetails])

  return { pokemonDetailedList }
}
