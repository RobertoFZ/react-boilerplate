import { createContext } from 'react'
import { IUser } from 'shared/types/user'
import { ILoginUserBody } from 'shared/types/auth'

interface IUserContext {
  user: IUser | undefined
  isLoggedIn: boolean
  loginAdmin: (body: ILoginUserBody) => void
  logout: () => void
  adminToken: string
}

const UserContext = createContext<IUserContext | undefined>(undefined)

export default UserContext
export type { IUserContext }
