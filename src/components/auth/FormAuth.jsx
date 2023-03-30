import { useForm } from 'react-hook-form'
import { useContextAuth } from '../../contexts/AuthContext'

const FormAuth = () => {
  const { setPassword } = useContextAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = (data) => {
    setPassword(data.password)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="password"
        type="password"
        {...register('password', { required: true })}
      />
      {errors.password && (
        <div style={{ color: 'red' }}>
          {errors.password.type === 'required' && 'Besoin du mot de passe'}
        </div>
      )}
      <button type="submit">Confimer</button>
    </form>
  )
}

export default FormAuth
