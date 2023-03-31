import FormStudents from '../components/students/FormStudents'
import StudentsList from '../components/students/StudentsList'
import StudentContextProvider from '../contexts/StudentContext'

const Students = () => {
  return (
    <StudentContextProvider>
      <FormStudents />
      <StudentsList />
    </StudentContextProvider>
  )
}

export default Students
