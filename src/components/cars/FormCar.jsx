import { useForm } from 'react-hook-form'

const FormCar = ({ setCars }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = (data) => {
    setCars((rest) => [...rest, data])
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        width: '400px',
      }}
    >
      <input
        placeholder="name"
        type="text"
        {...register('name', { required: true, minLength: 2 })}
      />
      {errors.name && (
        <div style={{ color: 'red' }}>
          {errors.name.type === 'required' && 'Ce champs doit être rempli'}
          {errors.name.type === 'minLength' && 'minimum 2 caractères'}
        </div>
      )}
      <input
        placeholder="km"
        type="number"
        {...register('km', {
          required: true,
          max: 2000000,
          valueAsNumber: true,
        })}
      />
      {errors.km && (
        <div style={{ color: 'red' }}>
          {errors.name.type === 'required' && 'Ce champs doit être rempli'}
          {errors.name.type === 'max' && 'maximum 2M'}
          {errors.name.type === 'valueAsNumber' && 'que des nombres'}
        </div>
      )}

      <button type="submit">Valider</button>
    </form>
  )
}

export default FormCar
