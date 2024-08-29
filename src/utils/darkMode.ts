export const setDarkMode = (isDarkMode: boolean) => {
  window.localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
  isDarkMode
    ? document.body.classList.add('dark')
    : document.body.classList.remove('dark')
}

export const getInitialDarkMode = (): boolean => {
  const isDarkModeSO = window.matchMedia('(prefers-color-scheme: dark)').matches
  const isDarkModeLocalStorage = JSON.parse(
    window.localStorage.getItem('darkMode') || 'null'
  )
  return isDarkModeLocalStorage === null ? isDarkModeSO : isDarkModeLocalStorage
}
