import { useCallback, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Icons from '../../assets/icons'

interface NavigationType {
  current: number
  total: number
  newLink: string
}

const Pagination = ({
  current,
  total,
  newLink
}: NavigationType): JSX.Element => {
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        const inputValue = parseInt(
          (event.target as HTMLInputElement).value,
          10
        )
        if (inputValue > 0 && inputValue <= total) {
          navigate(`${newLink}${inputValue}`)
          if (inputRef.current) {
            inputRef.current.value = ''
          }
        }
      }
    },
    [navigate, newLink, total]
  )

  return (
    <div className='flex justify-center gap-4'>
      {current > 1 && (
        <Link to={`${newLink}${current - 1}`}>
          <Icons.Arrow
            className='h-8 w-8 rotate-180 text-gray-300 dark:text-pokeLightGray'
            aria-label='Previous page'
          />
        </Link>
      )}
      <div className='flex items-center gap-2'>
        <input
          ref={inputRef}
          className='w-16 rounded-md bg-pokeLightRed p-1 text-center font-inter text-white placeholder:text-gray-200 focus:outline-none dark:bg-pokeLightGray dark:text-gray-200 dark:placeholder:text-gray-400'
          type='number'
          min='1'
          max={total}
          placeholder={current.toString()}
          onKeyDown={handleKeyDown}
          aria-label='Page number'
        />
        <p className='font-inter text-gray-400 dark:text-gray-200'>{`of ${total}`}</p>
      </div>
      {current < total && (
        <Link to={`${newLink}${current + 1}`}>
          <Icons.Arrow
            className='h-8 w-8 text-gray-300 dark:text-pokeLightGray'
            aria-label='Next page'
          />
        </Link>
      )}
    </div>
  )
}

export default Pagination
