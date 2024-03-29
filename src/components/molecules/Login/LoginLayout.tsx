import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import GridFullHeight from 'components/atoms/GridFullHeight'
import { GridWithImageBg } from 'components/atoms/GridWithImageBg'
import { Avatar, Grid, Paper, Typography } from '@mui/material'
import { PaperContainer } from 'components/atoms/PaperContainer'
import LoginForm from './LoginForm'

const LoginLayout = (): JSX.Element => (
	<GridFullHeight container>
		<CssBaseline />
		<GridWithImageBg item xs={false} sm={4} md={7} />
		<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
			<PaperContainer>
				<Avatar>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Entrar al sistema
				</Typography>
				<LoginForm />
			</PaperContainer>
		</Grid>
	</GridFullHeight>
)

export default LoginLayout
