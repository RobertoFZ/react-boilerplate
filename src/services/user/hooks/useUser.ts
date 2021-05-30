import { useState } from 'react'
import sessionJsonStorage from 'utils/sessionJsonStorage'
import { IUser } from 'shared/types/user'

const userStorageKey = 'user'
const userStorage = sessionJsonStorage<IUser>(userStorageKey)

const useUser = () => {
  const [user, setUser] = useState<IUser | undefined>(userStorage.get())
  const isLoggedIn = Boolean(user)

  const saveUser = (user: IUser) => {
    userStorage.set(user)
    setUser(user)
  }

  const clearUser = () => {
    userStorage.remove()
    setUser(undefined)
  }

  return {
    user,
    saveUser,
    clearUser,
    isLoggedIn,
  }
}

export { useUser }
