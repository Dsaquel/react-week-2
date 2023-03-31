import { useEffect } from 'react'
import { useState } from 'react'
import { DUMMY_API_BASE_URL, DUMMY_API_KEY } from '../../tools/function'
import Identified from './Identified'

const CardAuth = () => {
  const [user, setUser] = useState()

  const fetchUser = async () => {
    try {
      const dummyUsers = await (
        await fetch(`${DUMMY_API_BASE_URL}/user?limit=1`, {
          method: 'GET',
          headers: {
            'app-id': DUMMY_API_KEY,
          },
        })
      ).json()
      setUser(dummyUsers.data[0])
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    const init = async () => {
      await fetchUser()
    }
    init()
  }, [])

  return (
    <div>
      {user && <div>{`${user.firstName}-${user.lastName}`}</div>}
      <Identified />
    </div>
  )
}

export default CardAuth
