import { useContext } from 'react'
import UserContext from 'components/context/UserContext'
import { IUserContext } from 'components/context/UserContext/UserContext'

const useUserService = (): IUserContext => {
	const userContextValue = useContext(UserContext)

	if (userContextValue === undefined) {
		throw new Error('You must use useUserService within a UserProvider')
	}

	return userContextValue
}

export default useUserService
