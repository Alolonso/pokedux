export const PokemonCardSkeleton = (): JSX.Element => {
  const commonCircleClass = 'h-8 w-8 rounded-lg bg-gray-300 dark:bg-slate-400'

  return (
    <div className='flex w-64 flex-col items-center gap-3 rounded-2xl bg-gray-200 p-3 shadow-md dark:bg-pokeLightGray'>
      <div className='h-56 w-full rounded-2xl bg-gray-300 dark:bg-slate-400'></div>
      <div className='h-8 w-2/3 rounded-xl bg-gray-300 dark:bg-slate-400'></div>
      <div className='flex gap-2'>
        <div className={commonCircleClass}></div>
        <div className={commonCircleClass}></div>
      </div>
    </div>
  )
}

export default PokemonCardSkeleton
