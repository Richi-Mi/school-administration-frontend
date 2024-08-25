import { Grid, Typography } from '@mui/material'

export const AuthLayout = ({ children, title = '' }) => {
    return (
        <Grid 
            container
            spacing={ 0 }
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={ { 
                    minHeight: '100vh', 
                    padding: 4 
                } }>

            <Grid item
                className='box-shadow border'
                xs={3}
                boxShadow='0 -1px 20px #ca668b'
                sx={{ 
                    backgroundColor: '#f9f9f9', 
                    padding: 3, 
                    borderRadius: 2
                    }}>
                
                <Typography variant='h4' sx={{ mb: 1 }} textAlign='center' fontFamily='New Amsterdam' color='primary.main'> SchoolHub - { title } </Typography>

                { children }
                
            </Grid>
        </Grid>
    )
}