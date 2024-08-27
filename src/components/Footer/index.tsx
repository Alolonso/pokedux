import Icons from '../../assets/icons'

const Footer = (): JSX.Element => {
  return (
    <footer className='flex flex-col items-center gap-1 bg-gray-100 py-5'>
      <div className='flex h-7 items-center gap-3'>
        <a
          className='transition-transform hover:scale-125'
          href='https://github.com/Alolonso/pokedux'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Icons.Github className='h-auto w-7' />
        </a>
        <a
          className='transition-transform hover:scale-125'
          href='https://alolonso.github.io/cv-portfolio/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Icons.Alolonso className='h-auto w-8' />
        </a>
      </div>
      <p>
        <span className='text-sm text-gray-400'>made by </span>
        <a
          className='text-base text-gray-500 hover:underline'
          href='https://alolonso.github.io/cv-portfolio/'
          target='_blank'
          rel='noopener noreferrer'
        >
          alolonso
        </a>
      </p>
    </footer>
  )
}

export default Footer
