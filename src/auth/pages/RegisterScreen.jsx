import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { PersonAddAlt1Rounded } from '@mui/icons-material'

export const RegisterScreen = () => {
    return (
        <AuthLayout title='Registrar usuario'>
            <hr />
            <Grid container columns={12} spacing={2} padding={4} direction='row'>

                <Grid item container xs={12} lg={4} alignContent='center' justifyContent='center'>
                    <PersonAddAlt1Rounded width="100%" className='border' sx={{
                        fontSize: 90,
                        color: 'primary.main',
                        padding: 2,
                        borderRadius: 50,
                        mr: 4
                    }} />
                </Grid>

                <Grid container item xs={12} lg={8} direction='column'>
                    <FormControl fullWidth>
                        <InputLabel> Tipo </InputLabel>
                        <Select
                            label="Tipo" >
                            <MenuItem value={ 10 }> ADMINISTRADOR </MenuItem>
                            <MenuItem value={ 20 }> GESTION </MenuItem>
                            <MenuItem value={ 30 }> PROFESOR </MenuItem>
                            <MenuItem value={ 40 }> ALUMNO </MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        type='text'
                        label='nombre'
                        autoComplete='false'
                        sx={{ mt: 2 }}
                        />
                    <TextField
                        type='text'
                        label='CURP'
                        autoComplete='false'
                        sx={{ mt: 2 }}
                        />
                    <TextField
                        className='border'
                        type='email'
                        label='email'
                        autoComplete='false'
                        sx={{ mt: 2 }}
                        />
                    <TextField
                        type='password'
                        label='contraseña'
                        autoComplete='false'
                        sx={{ mt: 2 }}
                        />
                </Grid>

            </Grid>
            
            <Grid container width='70%' margin='0 auto'>
                <Button variant='contained' fullWidth> 
                    <Typography> Registrar </Typography>
                </Button>
            </Grid>
        </AuthLayout>
    )
}
