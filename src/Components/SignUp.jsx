import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Paper, TextField, Typography, } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React from 'react'
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import MuiLink from '@mui/material/Link';

const SignUp = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
    }
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
            <Container component="main" maxWidth="sm" >
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
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant='h5'>
                                Sign Up
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="given-name"
                                            name="firstName"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            autoComplete="family-name"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="new-password"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <FormControlLabel 
                                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                                            label="I accept the Terms of Use & Privacy Policy"
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign Up
                                </Button>
                                <Grid container alignItems='center' justifyContent='center'>
                                    <Grid item>
                                        <RouterLink to="/login" variant="body2">
                                            Already have an account? Login
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

export default SignUp
