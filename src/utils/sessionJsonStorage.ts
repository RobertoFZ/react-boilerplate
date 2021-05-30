const sessionJsonStorage = <T = any>(storageKey: string) => {
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
