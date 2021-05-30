import { FC } from 'react'
import UserContext, { IUserContext } from './UserContext'
import { loginUser } from 'services/user'
import { useUser, useUserTokens } from 'services/user/hooks'
import { EUserRoles } from 'shared/types/user'
import { ILoginUserBody } from 'shared/types/auth'

const UserProvider: FC = ({ children }) => {
  const { user, isLoggedIn, saveUser, clearUser } = useUser()
  const { saveTokens, clearTokens, token } = useUserTokens()

  const loginAdmin = async (body: ILoginUserBody) => {
    try {
      const authResponse = await loginUser(body)
      const { user, token, refresh_token } = authResponse
      const isAdmin = user.role === EUserRoles.ADMIN
      if (!isAdmin) {
        // Only admin
        return
      }
      saveUser(user)
      saveTokens({ token, refresh_token })
      // Success login
    } catch (error) {
      // Error on login
    }
  }

  const logout = () => {
    clearUser()
    clearTokens()
  }

  const contextValue: IUserContext = {
    user,
    isLoggedIn,
    loginAdmin,
    logout,
    adminToken: token,
  }

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  )
}

export { UserProvider }
