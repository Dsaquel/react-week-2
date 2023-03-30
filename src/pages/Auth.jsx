import CardAuth from '../components/auth/CardAuth'
import FormAuth from '../components/auth/FormAuth'
import AuthContextProvider from '../contexts/AuthContext'

const Auth = () => {
  return (
    <AuthContextProvider>
      <FormAuth />
      <CardAuth />
    </AuthContextProvider>
  )
}

export default Auth
