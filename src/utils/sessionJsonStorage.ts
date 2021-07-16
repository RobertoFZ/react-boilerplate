import { ToBeDefined } from 'shared/types/common/ToBeDefined'

interface ISessionStorate<T> {
	get: () => T | undefined
	set: (entity: T) => void
	remove: () => void
}
const sessionJsonStorage = <T = ToBeDefined>(
	storageKey: string
): ISessionStorate<T> => {
	const get = () => {
		const storageValue = sessionStorage.getItem(storageKey)
		return storageValue ? (JSON.parse(storageValue) as T) : undefined
	}

	const set = (value: T) => {
		const stringValue = JSON.stringify(value)
		sessionStorage.setItem(storageKey, stringValue)
	}

	const remove = () => {
		sessionStorage.removeItem(storageKey)
	}

	return {
		get,
		set,
		remove,
	}
}

export default sessionJsonStorage
