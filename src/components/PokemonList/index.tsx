export const PokemonList = ({
  pokemonList
}: {
  pokemonList: PokemonDetailedType[]
}): JSX.Element => {
  console.log(pokemonList)

  return (
    <div className='flex justify-center'>
      <div className='flex max-w-[1100px] flex-wrap items-start justify-center gap-6'></div>
    </div>
  )
}

export default PokemonList
