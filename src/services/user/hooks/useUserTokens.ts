import { useState } from 'react'
import sessionJsonStorage from 'utils/sessionJsonStorage'
import type { IToken } from 'shared/types/auth'

interface IUserTokens {
	token: IToken
	refresh_token: IToken
}

interface IUseUserTokens {
	tokens: IUserTokens | undefined
	saveTokens: (tokens: IUserTokens) => void
	clearTokens: () => void
	token: string
}

const tokensStorageKey = 'user-tokens'
const tokensStorage = sessionJsonStorage<IUserTokens>(tokensStorageKey)

const useUserTokens = (): IUseUserTokens => {
	const [tokens, setTokens] = useState<IUserTokens | undefined>(
		tokensStorage.get()
	)

	const saveTokens = (tokens: IUserTokens) => {
		tokensStorage.set(tokens)
		setTokens(tokens)
	}

	const clearTokens = () => {
		tokensStorage.remove()
		setTokens(undefined)
	}

	return {
		tokens,
		saveTokens,
		clearTokens,
		token: tokens?.token?.token || '',
	}
}

export { useUserTokens }
