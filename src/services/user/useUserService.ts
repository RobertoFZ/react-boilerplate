import { useContext } from 'react'
import UserContext from 'components/context/UserContext'

const useUserService = () => {
  const userContextValue = useContext(UserContext)

  if (userContextValue === undefined) {
    throw new Error('You must use useUserService within a UserProvider')
  }

  return userContextValue
}

export default useUserService
