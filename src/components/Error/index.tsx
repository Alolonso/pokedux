const Error = ({ message }: { message: string }): JSX.Element => {
  return (
    <div className='flex flex-col items-center gap-1'>
      <p className='text-2xl text-pokeLightRed'>Error</p>
      <p className='max-w-60 text-center dark:text-gray-200 text-gray-400 sm:max-w-96'>
        {message}
      </p>
    </div>
  )
}

export default Error
