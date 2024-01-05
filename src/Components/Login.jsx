import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material';
import { LockOpen } from '@mui/icons-material';
import MuiLink from '@mui/material/Link';
import styled from 'styled-components';


const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };
      const ThemeProvider = styled.div`
        background: hsla(271, 100%, 20%, 1);
        background: linear-gradient(225deg, hsla(271, 100%, 20%, 1) 0%, hsla(294, 100%, 20%, 1) 100%);
        background: -moz-linear-gradient(225deg, hsla(271, 100%, 20%, 1) 0%, hsla(294, 100%, 20%, 1) 100%);
        background: -webkit-linear-gradient(225deg, hsla(271, 100%, 20%, 1) 0%, hsla(294, 100%, 20%, 1) 100%);
        padding: 0;
        margine: 0;
        height: 100vh;
    `
  return (
    <div>
      <ThemeProvider>
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                    <Box 
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100vh',
                            width: '100%',
                            color: 'white',
                        }}>
                        <Paper elevation={24}
                            sx={{
                                margin: 'auto',
                                padding: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: '100%',
                                border: '1px solid #854CE6',
                                borderRadius: '10px',
                                background: 'white',
                                color: 'black',
                            }}>
                            <Avatar
                                sx={{ 
                                    m: 1, 
                                    bgcolor: 'secondary.main' 
                                    }}>
                                    <LockOpen />
                            </Avatar>
                            <Typography component="h1" variant='h5'>
                                Login
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
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
                                <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                >
                                Sign In
                                </Button>
                                <Grid container>
                                <Grid item xs>
                                    <MuiLink href="#" variant="body2">
                                    Forgot password?
                                    </MuiLink>
                                </Grid>
                                <Grid item>
                                    <RouterLink to="/" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                    </RouterLink>
                                </Grid>
                                </Grid>
                            </Box>
                            <br />
                            <Typography variant="body2" color="text.secondary" align="center" >
                                {'Copyright © '}
                                <MuiLink color="inherit" href="https://ravinduwickramageportfolio.web.app/">
                                    Ravindu Wickramage Portfolio
                                </MuiLink>{' '}
                                {new Date().getFullYear()}
                                {'.'}
                            </Typography>
                        </Paper>
                    </Box>
            </Container>
      </ThemeProvider>
    </div>
  )
}

export default Login
