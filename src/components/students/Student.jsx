import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useContextStudent } from '../../contexts/StudentContext'
import { useEffect } from 'react'

const Student = ({ item }) => {
  const [formShow, setFormShow] = useState(false)
  const { register, handleSubmit } = useForm()
  const { students, setStudents } = useContextStudent()

  const handleUpdateStudentScore = (data) => {
    const studentsTemp = [...students]
    const key = students.findIndex((student) => student.id === item.id)
    item.scores.push(+data.score)
    studentsTemp.splice(key, 1, item)
    setStudents(studentsTemp)
  }

  const handleDeleteStudent = () => {
    const studentsTemp = [...students]
    const key = students.findIndex((student) => student.id === item.id)
    studentsTemp.splice(key, 1)
    setStudents(studentsTemp)
  }

  useEffect(() => {
    return () => {
      console.log(item.firstname + ' deleted')
    }
  }, [])

  return (
    <div>
      <div>{`${item.lastname}-${item.firstname}-${item.age}`}</div>
      <div>
        {item.scores.length &&
          item.scores.reduce((p, c, _, a) => p + c / a.length, 0)}
      </div>
      <button onClick={handleDeleteStudent}>supprimer l'élève</button>
      <button onClick={() => setFormShow(!formShow)}>plus d'info</button>

      {formShow && (
        <form onSubmit={handleSubmit(handleUpdateStudentScore)}>
          <input
            placeholder="16"
            {...register('score', { required: true, max: 20 })}
          />
          / 20
          <button type="submit">Enregistrer</button>
        </form>
      )}
    </div>
  )
}

export default Student
