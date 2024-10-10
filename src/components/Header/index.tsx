import { useState, useRef, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store'
import { toggleDarkMode } from '../../store/slices/uiSlice'
import {
  GitHubIcon,
  LightIcon,
  DarkIcon,
  PokeduxIcon
} from '../../assets/icons'

const Header = (): JSX.Element => {
  const darkMode = useAppSelector((state) => state.ui.darkMode)
  const dispatch = useAppDispatch()
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false)

  const burgerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const burgerClass =
    'h-1 w-9 transform rounded transition-transform duration-500'

  const updateMenu = useCallback(() => {
    setIsMenuClicked((prev) => !prev)
  }, [])

  useEffect(() => {
    if (!isMenuClicked) return

    const handleClickOutside = (event: MouseEvent) => {
      if (
        burgerRef.current &&
        menuRef.current &&
        !burgerRef.current.contains(event.target as Node) &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuClicked(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuClicked])

  return (
    <header className='flex h-24 items-center justify-between bg-pokeDarkRed px-5 shadow-md'>
      <Link to={'/'} aria-label='Go to homepage'>
        <PokeduxIcon className='h-auto w-48' />
      </Link>

      <div aria-label='Main navigation'>
        <div className='sm:hidden'>
          {/* hamburger icon */}
          <button
            ref={burgerRef}
            aria-label='Toggle menu'
            className='relative z-10 flex flex-col gap-1.5'
            onClick={updateMenu}
          >
            <div
              className={`${burgerClass} ${isMenuClicked ? 'translate-y-2.5 rotate-45 bg-pokeLightGray dark:bg-gray-50' : 'bg-white dark:bg-pokeLightGray'} `}
            ></div>
            <div
              className={`${burgerClass} ${isMenuClicked ? 'scale-0 bg-pokeLightGray dark:bg-gray-50' : 'bg-white dark:bg-pokeLightGray'} `}
            ></div>
            <div
              className={`${burgerClass} ${isMenuClicked ? '-translate-y-2.5 -rotate-45 bg-pokeLightGray dark:bg-gray-50' : 'bg-white dark:bg-pokeLightGray'} `}
            ></div>
          </button>

          {/* mobile menu */}
          <div
            ref={menuRef}
            className={`absolute -right-[76px] top-0 flex h-[196px] w-[76px] transform flex-col items-center justify-end gap-4 rounded-bl-2xl bg-pokeLightRed pb-4 shadow-md transition-transform duration-500 ${isMenuClicked ? '-translate-x-[76px]' : ''}`}
          >
            <a
              href='https://github.com/Alolonso/pokedux'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Visit our GitHub repository'
            >
              <GitHubIcon className='h-auto w-9 text-white dark:text-pokeLightGray' />
            </a>
            <button
              className='ml-1 dark:ml-0'
              onClick={() => dispatch(toggleDarkMode())}
              aria-label={`Toggle to ${darkMode ? 'light' : 'dark'} mode`}
            >
              {darkMode ? (
                <LightIcon className='h-auto w-11 text-pokeLightGray' />
              ) : (
                <DarkIcon className='h-auto w-11 text-white' />
              )}
            </button>
          </div>
        </div>

        {/* desktop menu */}
        <div className='hidden items-center gap-3 sm:flex'>
          <a
            href='https://github.com/Alolonso/pokedux'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Visit our GitHub repository'
          >
            <GitHubIcon className='h-auto w-9 text-white hover:text-pokeLightGray dark:text-pokeLightGray dark:hover:text-gray-50' />
          </a>
          <button
            onClick={() => dispatch(toggleDarkMode())}
            aria-label={`Toggle to ${darkMode ? 'light' : 'dark'} mode`}
          >
            {darkMode ? (
              <LightIcon className='h-auto w-11 text-pokeLightGray hover:text-gray-50' />
            ) : (
              <DarkIcon className='h-auto w-11 text-white hover:text-pokeLightGray' />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
