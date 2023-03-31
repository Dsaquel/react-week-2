import { useForm } from 'react-hook-form'
import { useContextStudent } from '../../contexts/StudentContext'

const FormStudents = () => {
  const { setStudents, students } = useContextStudent()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = (data) => {
    const maxId = Math.max(...students.map((o) => o.id), 0)
    data.id = maxId + 1
    data.scores = []
    setStudents((rest) => [...rest, data])
    reset()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="nom" {...register('lastname', { required: true })} />
      <input
        placeholder="prenom"
        {...register('firstname', { required: true })}
      />
      <input placeholder="âge" {...register('age', { required: true })} />
      {errors.lastname ||
        errors.firstname ||
        (errors.age && (
          <div style={{ color: 'red' }}>Tout les champs sont requis</div>
        ))}
      <button type="submit">Ajouter</button>
    </form>
  )
}

export default FormStudents
