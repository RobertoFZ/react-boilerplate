import axios from 'axios'
import IFetchResponse from 'shared/types/common/IFetchResponse'
import { environment } from 'shared/constants'
import { IReport } from 'shared/types/report/IReport'
const { apiUrl } = environment

const getAllReports = async (): Promise<IReport[]> => {
	const response = await axios.post<IFetchResponse<IReport[]>>(
		`${apiUrl}/report`,
	)
	return response.data.data
}

export { getAllReports }
