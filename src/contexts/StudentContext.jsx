import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'

export const StudentPageContext = React.createContext()

const StudentContextProvider = ({ children }) => {
  const [students, setStudents] = useState([
    { id: 1, firstname: 'Ouways', lastname: 'Noblet', age: 20, scores: [] },
  ])
  return (
    <StudentPageContext.Provider value={{ students, setStudents }}>
      {children}
    </StudentPageContext.Provider>
  )
}

export const useContextStudent = () => {
  return useContext(StudentPageContext)
}

export default StudentContextProvider
