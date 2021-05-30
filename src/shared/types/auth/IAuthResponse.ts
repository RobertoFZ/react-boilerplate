import { IToken } from './IToken'
import { IUser, IUserProfile } from 'shared/types/user'

interface IAuthResponse {
  token: IToken
  refresh_token: IToken
  user: IUser
  profile: IUserProfile
}

export type { IAuthResponse }
