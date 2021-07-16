import { UserProvider } from 'components/context/UserContext/UserProvider'
import AppLayout from 'components/layouts/AppLayout'
import { GlobalStyle } from 'components/layouts/GlobalStyle'
import PrivateRoute from 'components/molecules/PrivateRoute'
import LoginPage from 'pages/Login'
import ReportsPage from 'pages/Reports'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import routes from 'shared/constants/routes'

const { home, login, reports } = routes

const App: React.FC = ({ ...props }) => {
	return (
		<UserProvider>
			<AppLayout>
				<Router>
					<GlobalStyle />
					<PrivateRoute
						path={home}
						exact={true}
						component={LoginPage}
						{...props}
					/>
					<PrivateRoute
						path={reports}
						exact={true}
						component={ReportsPage}
						{...props}
					/>
					<Route path={login} exact>
						<LoginPage />
					</Route>
				</Router>
			</AppLayout>
		</UserProvider>
	)
}

export default App
