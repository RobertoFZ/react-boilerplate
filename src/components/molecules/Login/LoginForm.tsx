import React from 'react';
import { TextField, FormControlLabel, Checkbox, Grid, Box, Link } from '@material-ui/core';
import Copyright from '../Copyright';
import Form from 'components/atoms/Form';
import { LoginButton } from 'components/atoms/Login/LoginButton';

const LoginForm: React.FC = () => (
  <Form noValidate>
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus
    />
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      name="password"
      label="Password"
      type="password"
      id="password"
      autoComplete="current-password"
    />
    <FormControlLabel
      control={<Checkbox value="remember" color="primary" />}
      label="Remember me"
    />
    <LoginButton
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
    >
      Sign In
    </LoginButton>
    <Grid container>
      <Grid item xs>
        <Link href="#" variant="body2">
          Forgot password?
        </Link>
      </Grid>
      <Grid item>
        <Link href="#" variant="body2">
          {"Don't have an account? Sign Up"}
        </Link>
      </Grid>
    </Grid>
    <Box mt={5}>
      <Copyright />
    </Box>
  </Form>
);

export default LoginForm;
