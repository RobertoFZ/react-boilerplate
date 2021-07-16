import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { blueGrey, teal } from '@material-ui/core/colors'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Copyright from 'components/molecules/Copyright'
import useUserService from 'services/user/useUserService'
import { When } from 'react-if'
import { FormControlLabel, Menu, MenuItem, Switch } from '@material-ui/core'
import { ToBeDefined } from 'shared/types/common/ToBeDefined'

const AppLayout: React.FC = ({ children }): JSX.Element => {
	const [darkState, setDarkState] = useState<boolean>(true)
	const palletType = darkState ? 'dark' : 'light'
	const mainPrimaryColor = darkState ? blueGrey[500] : teal[500]
	const mainSecondaryColor = darkState ? blueGrey[900] : teal[500]
	const [anchorEl, setAnchorEl] = React.useState(null)
	const { isLoggedIn } = useUserService()

	const darkTheme = createMuiTheme({
		palette: {
			type: palletType,
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
