import React, { useState } from 'react'
import {
	Button,
	Container,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material'
import GetAppIcon from '@mui/icons-material/GetApp'
import { IReport } from 'shared/types/report/IReport'
import { getAllReports } from 'services/report'
import { useEffect } from 'react'
import { When } from 'react-if'

const ReportsPage: React.FC = () => {
	const [reports, setReports] = useState<IReport[]>([])
	const getReports = async () => {
		try {
			const reports = await getAllReports()
			setReports(reports)
		} catch (error) {
			alert('No se pudo recuperar la lista de reportes')
		}
	}

	useEffect(() => {
		getReports()
	}, [])

	return (
		<Container>
			<br />
			<Typography component="h1" variant="h3">
				Reportes
			</Typography>
			<br />
			<TableContainer component={Paper}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Fecha</TableCell>
							<TableCell align="center">Opciones</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{reports.map((report: IReport) => (
							<TableRow key={report.date.toISOString()}>
								<TableCell component="th" scope="row">
									{report.date}
								</TableCell>
								<TableCell>
									<Button
										variant="contained"
										color="primary"
										startIcon={<GetAppIcon />}
									>
										Descargar
									</Button>
								</TableCell>
							</TableRow>
						))}
						<When condition={reports.length === 0}>
							<TableRow>
								<TableCell colSpan={2} scope="row">
									<Typography component="h1" variant="h5" align="center">
										No se tienen datos
									</Typography>
								</TableCell>
							</TableRow>
						</When>
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	)
}

export default ReportsPage
