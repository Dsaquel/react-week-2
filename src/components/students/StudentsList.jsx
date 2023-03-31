import { useContextStudent } from '../../contexts/StudentContext'
import Student from './Student'

const StudentsList = () => {
  const { students, setStudents } = useContextStudent()

  const sortByLastname = () => {
    setStudents(students.sort((a, b) => b.lastname.localeCompare(a.lastname)))
  }

  return (
    <div>
      <div>
        {students.map((student, i) => (
          <Student item={student} key={i} />
        ))}
      </div>
      <button onClick={sortByLastname}>trié par ordre alphabétique</button>
    </div>
  )
}

export default StudentsList
