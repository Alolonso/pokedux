export const getPokemonTypes = (type: PokemonTypeKeyType): string => {
  const pokemonTypes: Record<PokemonTypeKeyType, string> = {
    bug: '#A8B820',
    ice: '#98D8D8',
    dark: '#705848',
    fire: '#F08030',
    rock: '#B8A038',
    water: '#6890F0',
    fairy: '#EE99AC',
    ghost: '#705898',
    grass: '#78C850',
    steel: '#B8B8D0',
    dragon: '#7038F8',
    flying: '#A890F0',
    ground: '#E0C068',
    normal: '#A8A878',
    poison: '#A040A0',
    psychic: '#F85888',
    fighting: '#C03028',
    electric: '#F8D030'
  }

  return pokemonTypes[type] || '#000'
}
