import axios from 'axios'
import { IAuthResponse, ILoginUserBody } from 'shared/types/auth'
import IFetchResponse from 'shared/types/common/IFetchResponse'
import { environment } from 'shared/constants'
const { apiUrl } = environment

const loginUser = async (body: ILoginUserBody) => {
  const response = await axios.post<IFetchResponse<IAuthResponse>>(
    `${apiUrl}/auth/login`,
    body
  )
  return response.data.data
}

export { loginUser }
