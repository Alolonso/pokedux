import { getPokemonTypes } from '../../utils/getPokemonTypes'
import { PokemonIcon, TypeIcon } from '../../assets/icons'

const getStyles = (types: PokemonTypeKeyType[]) => {
  const colors = types.map((type) => getPokemonTypes(type))
  return types.length > 1
    ? `linear-gradient(to bottom, ${colors[0]}8C, ${colors[1]}8C)`
    : `${colors[0]}8C`
}

const PokemonCard = ({
  pokemon
}: {
  pokemon: PokemonDetailedType
}): JSX.Element => {
  const gradient = getStyles(pokemon.types as PokemonTypeKeyType[])
  const nameToShow = pokemon.name
    .replace(/-/g, ' ')
    .replace(/^\w/, (c) => c.toUpperCase())
  const softShadow = '1px 1px 4px rgba(0, 0, 0, 0.3)'

  return (
    <div className='relative w-64 overflow-hidden rounded-2xl shadow-md dark:bg-pokeLightGray'>
      <div
        style={{ background: gradient }}
        className='absolute h-full w-full dark:hidden'
      >
        <PokemonIcon className='absolute -left-5 -top-4 h-auto w-36 -rotate-[18deg] text-white opacity-20' />
        <PokemonIcon className='absolute -bottom-10 -right-5 h-auto w-56 rotate-[20deg] text-white opacity-20' />
      </div>

      <div className='flex h-full w-full flex-col gap-2 p-3'>
        <div className='relative overflow-hidden rounded-2xl dark:bg-white'>
          <div
            style={{ background: gradient }}
            className='absolute hidden h-full w-full dark:block'
          >
            <PokemonIcon className='absolute -left-5 -top-4 h-auto w-32 -rotate-[18deg] text-white opacity-20' />
            <PokemonIcon className='absolute -bottom-10 -right-4 h-auto w-48 rotate-[20deg] text-white opacity-20' />
          </div>

          {pokemon.image ? (
            <img
              draggable='false'
              style={{ imageRendering: 'pixelated' }}
              className='relative min-h-56 w-full -scale-x-100'
              src={pokemon.image}
              alt={`${pokemon.name}-image`}
            />
          ) : (
            <div className='relative flex h-56 w-full items-center justify-center'>
              <p className='text-center text-3xl text-pokeLightGray'>
                Image unavailable
              </p>
            </div>
          )}
        </div>

        <p
          translate='no'
          style={{ textShadow: softShadow }}
          className='relative text-center font-inter text-[23px] text-white dark:text-gray-200'
        >
          {nameToShow}
        </p>

        <div className='relative flex justify-center gap-2'>
          {pokemon.types.map((type) => (
            <div
              key={type}
              className='flex h-8 w-8 items-center justify-center rounded-lg bg-[#ffffff8C] shadow-sm dark:bg-gray-200'
            >
              <TypeIcon
                style={{
                  color: getPokemonTypes(type as PokemonTypeKeyType)
                }}
                className='h-5 w-5'
                type={type as PokemonTypeKeyType}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PokemonCard
