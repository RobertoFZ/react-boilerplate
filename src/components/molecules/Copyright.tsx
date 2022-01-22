import React from 'react'
import { Link, Typography } from '@material-ui/core'

export const Copyright = (): JSX.Element => (
	<Typography variant="body2" color="textSecondary" align="center">
		{'Copyright © '}
		<Link color="inherit" href="https://franzet.com/">
			Franzet.com
		</Link>{' '}
		{new Date().getFullYear()}
		{'.'}
	</Typography>
)

export default Copyright
