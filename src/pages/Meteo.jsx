import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  GEOCODING_API_BASE_URL,
  CURRENT_DATA_API_BASE_URL,
  WHEATHER_API_KEY,
} from '../tools/function'

const Meteo = () => {
  const [currentWheather, setCurrentWheather] = useState({})
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const getCurrentWheather = async (cityName) => {
    const geoCodingData = await (
      await fetch(
        `${GEOCODING_API_BASE_URL}?q=${cityName}&limit=1&appid=${WHEATHER_API_KEY}`,
        {
          method: 'GET',
        }
      )
    ).json()

    const currentWheatherData = await (
      await fetch(
        `${CURRENT_DATA_API_BASE_URL}?lat=${geoCodingData[0].lat}&lon=${geoCodingData[0].lon}&units=metric&appid=${WHEATHER_API_KEY}`,
        {
          method: 'GET',
        }
      )
    ).json()

    setCurrentWheather(currentWheatherData)
  }

  const onSubmit = (data) => {
    getCurrentWheather(data.cityName)
    reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="nom de la ville"
          {...register('cityName', { required: true })}
        />
        {errors.name && errors.name.type && (
          <div style={{ color: 'red' }}>Remplis le champs tout de suite</div>
        )}
        <button type="submit">Valider</button>
      </form>
      {currentWheather.base && (
        <div>{`La température à ${currentWheather.name} est de ${currentWheather.main.temp}`}</div>
      )}
    </div>
  )
}

export default Meteo
