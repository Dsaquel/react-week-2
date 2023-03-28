import { useState } from 'react'
import { useForm } from 'react-hook-form'

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    getValues,
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div>
      <h1>react hook form</h1>
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
          {...register('name', { required: true, minLength: 3 })}
        />
        {errors.name && (
          <div style={{ color: 'red' }}>
            {errors.name.type === 'required' && 'Ce champs doit être rempli'}
            {errors.name.type === 'minLength' && 'minimum 3 caractères'}
          </div>
        )}
        <input placeholder="age" {...register('age', { max: 130 })} />
        {errors.age && <div style={{ color: 'red' }}>Age maxi: 130</div>}
        <button onClick={() => reset()}>reset</button>
        <button onClick={() => setValue('age', '50')}>age 50</button>
        <button onClick={() => console.log(getValues('name'))}>
          valeur de name
        </button>
        <button type="submit">Valider</button>
      </form>
    </div>
  )
}

export default ReactHookForm
