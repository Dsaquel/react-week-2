export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const WHEATHER_API_KEY = '8cfff146be62ecbe12d0701dba5c55fe'
export const CURRENT_DATA_API_BASE_URL =
  'https://api.openweathermap.org/data/2.5/weather'
export const GEOCODING_API_BASE_URL =
  'http://api.openweathermap.org/geo/1.0/direct'
export const DUMMY_API_KEY = '64243be800eb51e81b9eca66'
export const DUMMY_API_BASE_URL = 'https://dummyapi.io/data/v1'

export function shuffleArray(array) {
  let currentIndex = array.length,
    randomIndex

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

export const getRandomString = () => Math.random().toString(36).slice(2, 7)
