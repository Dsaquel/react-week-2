import { useEffect } from 'react'
import { useState } from 'react'
import User from '../components/users/User'
import { DUMMY_API_BASE_URL, DUMMY_API_KEY } from '../tools/function'

const Users = () => {
  const [users, setUsers] = useState()
  const [usersLoading, setUsersLoading] = useState(false)
  const [buttonLoading, setButtonLoading] = useState(false)

  const fetchUsers = async (pageNumber = 1) => {
    try {
      setUsersLoading(true)
      const dummyUsers = await (
        await fetch(`${DUMMY_API_BASE_URL}/user?page=${pageNumber}&limit=10`, {
          method: 'GET',
          headers: {
            'app-id': DUMMY_API_KEY,
          },
        })
      ).json()
      setUsers(dummyUsers)
    } catch (e) {
      console.log(e)
    } finally {
      setUsersLoading(false)
    }
  }

  useEffect(() => {
    const init = async () => {
      await fetchUsers(1)
    }
    init()
  }, [])

  const nextPage = async () => {
    setButtonLoading(true)
    await fetchUsers(users.page + 1)
    setButtonLoading(false)
  }

  return (
    <div>
      <button onClick={nextPage} disabled={buttonLoading}>
        {buttonLoading ? 'en cours...' : 'next page'}
      </button>

      {!usersLoading ? (
        <div>
          {users && users.data.length ? (
            <div>
              {users.data.map((user, i) => (
                <User key={i} item={user} index={i} />
              ))}
            </div>
          ) : (
            <div>no users</div>
          )}
        </div>
      ) : (
        <div>Chargement...</div>
      )}
    </div>
  )
}

export default Users
