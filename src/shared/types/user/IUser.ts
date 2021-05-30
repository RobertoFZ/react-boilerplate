import { EUserRoles } from './EUserRoles'
import { IUserProfile } from './IUserProfile'
interface IUser {
  id: number
  first_name: string
  last_name: string
  email: string
  role: EUserRoles
  active: boolean
  created_at: string
  updated_at?: string
  deleted_at?: string
  profile: IUserProfile
}

export type { IUser }
