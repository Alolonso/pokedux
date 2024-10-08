import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokeState {
  pokemonList: PokemonType[]
  pokemonCount: number
}

const initialState: PokeState = {
  pokemonList: [],
  pokemonCount: 0
}

export const pokeSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemonList: (state, action: PayloadAction<PokemonType[]>) => {
      state.pokemonList = action.payload
    },
    setPokemonCount: (state, action: PayloadAction<number>) => {
      state.pokemonCount = action.payload
    }
  }
})

export const { setPokemonList, setPokemonCount } = pokeSlice.actions
