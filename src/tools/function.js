export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const WHEATHER_API_KEY = '8cfff146be62ecbe12d0701dba5c55fe'
export const CURRENT_DATA_API_BASE_URL =
  'https://api.openweathermap.org/data/2.5/weather'
export const GEOCODING_API_BASE_URL =
  'http://api.openweathermap.org/geo/1.0/direct'
