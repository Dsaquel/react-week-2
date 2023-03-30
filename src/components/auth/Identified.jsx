import { useState } from 'react'
import { useContextAuth } from '../../contexts/AuthContext'

const Identified = () => {
  const [realPassword, setRealPassword] = useState('icNmFj3wjTED6EV')
  const { password } = useContextAuth()

  return (
    <div>
      {password && password === realPassword ? (
        <div style={{ width: '50px', height: '50px', background: 'green' }} />
      ) : password && password !== realPassword ? (
        <div style={{ width: '50px', height: '50px', background: 'red' }} />
      ) : (
        <div>Veuillez rentrer un mot de passe</div>
      )}
    </div>
  )
}

export default Identified
