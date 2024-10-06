import PokemonCard from '../PokemonCard'

export const PokemonList = ({
  pokemonList
}: {
  pokemonList: PokemonDetailedType[]
}): JSX.Element => {
  console.log(pokemonList)

  return (
    <div className='flex justify-center px-6'>
      <div className='flex max-w-[1100px] flex-wrap items-start justify-center gap-6'>
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  )
}

export default PokemonList
