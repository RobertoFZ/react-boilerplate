interface IFetchResponse<T = any> {
  status: number
  message: string
  data: T
}

export default IFetchResponse
