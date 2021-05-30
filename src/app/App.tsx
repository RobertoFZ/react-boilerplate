import { UserProvider } from 'components/context/UserContext/UserProvider';
import { GlobalStyle } from 'components/layouts/GlobalStyle';
import PrivateRoute from 'components/molecules/PrivateRoute';
import LoginPage from 'pages/Login';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from 'shared/constants/routes';

const {
  home,
  login,
} = routes;

const App: React.FC = ({ ...props }) => {
  return (
    <UserProvider>
      <Router>
        <GlobalStyle />
        <PrivateRoute path={home} exact component={LoginPage} {...props} />
        <Route path={login} exact>
          <LoginPage />
        </Route>
      </Router>
    </UserProvider>
  )
}

export default App;
