import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import SchoolIcon from '@mui/icons-material/School';
import { Person } from '@mui/icons-material';
import { useForm } from '../../hooks/useForm';

const doLogin = async ( correo, password ) => {

    const resp = await fetch('http://localhost:8090/api/auth/login', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            correo,
            password
        })
    })
    const data = await resp.json()

    console.log(data);
    
}

export const LoginScreen = () => {

    const { correo, password, onInputChange } = useForm({
        correo: '',
        password: ''
    })

    const handleSubmit = ( evt ) => {
        evt.preventDefault()

        console.log( correo, password );
        

        doLogin( correo, password )
    }

    return (
        <AuthLayout title='Iniciar Sesion'> 

            <form action="submit" onSubmit={ handleSubmit } >

                <hr />

                <Grid 
                    container
                    direction='row'
                    spacing={2}
                    sx={{
                        mt: 1
                    }} 
                    alignItems='center'
                    justifyContent='center'>

                    <Grid item container xs={ 4 } lg={ 4 } justifyContent='center' alignContent='center'>
                        <SchoolIcon sx={{
                            fontSize: 120,
                            color: 'primary.main'
                        }} />

                    </Grid> 

                    <Grid item xs={ 8 } lg={ 8 }>

                        <TextField
                            variant='outlined'
                            label='correo'
                            fullWidth
                            type='email'
                            onChange={ onInputChange }
                            name='correo'
                            value={ correo } />

                        <TextField
                            variant='outlined'
                            label='password'
                            name='password'
                            value={ password }
                            onChange={ onInputChange }
                            fullWidth 
                            type='password'
                            sx={{
                                mt: 2,
                                mb: 2
                            }} />

                    </Grid>

                </Grid>

                <Grid 
                    container
                    direction='column'
                    alignContent='flex-end'>

                    <Link component='a' sx={{ mb: 1 }}> 
                        <Typography> ¿Olvidaste tu contraseña?  </Typography>
                    </Link>

                    <Button variant='contained' endIcon={ <Person /> } type='submit' >
                        Iniciar Sesion
                    </Button>

                </Grid>
            </form>
        </AuthLayout>
    )
}
