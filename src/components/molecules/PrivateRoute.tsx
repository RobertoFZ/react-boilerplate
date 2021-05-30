import React, { FC } from 'react'
import { If, Then, Else } from 'react-if'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import routes from 'shared/constants/routes'
import useUserService from 'services/user/useUserService'

const PrivateRoute: FC<RouteProps> = ({
  children,
  ...routeProps
}: RouteProps) => {
  const { login } = routes
  const { isLoggedIn } = useUserService()

  return (
    <Route
      {...routeProps}
      render={() => (
        <If condition={isLoggedIn}>
          <Then>{children}</Then>
          <Else>
            <Redirect to={login} />
          </Else>
        </If>
      )}
    />
  )
}

export default PrivateRoute
