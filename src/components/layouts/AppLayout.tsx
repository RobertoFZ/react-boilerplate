import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { blueGrey, teal } from '@mui/material/colors'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Copyright from 'components/molecules/Copyright'
import useUserService from 'services/user/useUserService'
import { When } from 'react-if'
import { FormControlLabel, Menu, MenuItem, Switch } from '@mui/material'
import { ToBeDefined } from 'shared/types/common/ToBeDefined'

const AppLayout: React.FC = ({ children }): JSX.Element => {
	const [darkState, setDarkState] = useState<boolean>(true)
	const palletType = darkState ? 'dark' : 'light'
	const mainPrimaryColor = darkState ? blueGrey[500] : teal[500]
	const mainSecondaryColor = darkState ? blueGrey[900] : teal[500]
	const [anchorEl, setAnchorEl] = React.useState(null)
	const { isLoggedIn } = useUserService()

	const darkTheme = createTheme({
		palette: {
			mode: palletType,
			primary: {
				main: mainPrimaryColor,
			},
			secondary: {
				main: mainSecondaryColor,
			},
		},
	})

	const handleClick = (event: ToBeDefined) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const changeTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDarkState(!darkState)
	}

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />

			<AppBar position="static">
				<Toolbar>
					<When condition={isLoggedIn}>
						<IconButton
							edge="start"
							color="inherit"
							onClick={handleClick}
							aria-label="menu"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							<MenuItem onClick={handleClose}>Salir</MenuItem>
						</Menu>
					</When>
					<div style={{ flexGrow: 1 }}></div>
					<FormControlLabel
						control={<Switch 
							checked={darkState} 
							onChange={changeTheme} />}
						label="Modo oscuro"
					/>
				</Toolbar>
			</AppBar>
			<>{children}</>
			<Copyright />
		</ThemeProvider>
	)
}

export default AppLayout
