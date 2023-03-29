import { useState } from 'react'
import { useForm } from 'react-hook-form'

const ExerciceApi = () => {
  const [usersEstimateAge, setUsersEstimateAge] = useState([])
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm()

  const searchEstimateAge = async (firstname) => {
    const data = await (
      await fetch(`https://api.agify.io?name=${firstname}&country=FR`, {
        method: 'GET',
      })
    ).json()

    setUsersEstimateAge((rest) => [...rest, data])
  }

  const onSubmit = (data) => {
    searchEstimateAge(data.firstname)
    setFocus('name')
    reset()
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="firstname"
          type="text"
          {...register('firstname', { required: true })}
        />
        {errors.firstname && (
          <div style={{ color: 'red' }}>
            {errors.firstname.type === 'required' &&
              'Ce champs doit être rempli'}
          </div>
        )}
        <button type="submit">Valider</button>
      </form>

      <div>
        {usersEstimateAge.map((userEstimateAge, i) => (
          <div key={i}>
            {`${userEstimateAge.name} a ${userEstimateAge.age}`}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExerciceApi
