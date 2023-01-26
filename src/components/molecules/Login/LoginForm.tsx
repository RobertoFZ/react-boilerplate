import React from 'react'
import { TextField, Box } from '@mui/material'
import Copyright from '../Copyright'
import Form from 'components/atoms/Form'
import { LoginButton } from 'components/atoms/Login/LoginButton'
import { useForm } from 'react-hook-form'
import { ToBeDefined } from 'shared/types/common/ToBeDefined'

const LoginForm: React.FC = () => {
	const { register, handleSubmit } = useForm()

	const onSubmit = (data: ToBeDefined) => alert(JSON.stringify(data))

	return (
		<Form noValidate onSubmit={handleSubmit(onSubmit)}>
			<TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				id="email"
				label="Correo electrónico"
				autoComplete="email"
				autoFocus
				{...register('email')}
			/>
			<TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				label="Contraseña"
				type="password"
				id="password"
				{...register('password')}
			/>
			<LoginButton
				type="submit"
				fullWidth={true}
				variant="contained"
				color="primary"
			>
				Entrar
			</LoginButton>
			<Box mt={5}>
				<Copyright />
			</Box>
		</Form>
	)
}

export default LoginForm
