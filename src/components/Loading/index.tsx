const Loading = (): JSX.Element => {
  return (
    <div className='flex w-full justify-center'>
      <p className='animate-spin font-essentiarum text-6xl'>
        <span className='text-pokeLightGray'>X</span>
        <span className='text-pokeLightRed'>z</span>
        <span className='text-gray-300'>x</span>
      </p>
    </div>
  )
}

export default Loading
