import { AppBar, Box, Container, createTheme, List, ListItem, ListItemButton, ListItemText, styled, Toolbar, Typography } from '@mui/material'
import React from 'react';

import { ThemeProvider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
    palette: {
        primary: {
            main: '#7a919c'
        }
    }
})

const MyList = styled(List)({
    display: 'flex', height: '30px'
})

const Head = () => {

    const data = [
        {
            action: '/dashboard/account',
            text: 'Accounts'
        },
        {
            action: '/dashboard/portfolio',
            text: 'Portfolio'
        },
        {
            action: '/dashboard/transaction',
            text: 'Pay & Transfer'
        }
    ]

    const navigate = useNavigate()

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ bgcolor: theme.palette.primary.main, color: 'white' }}>
                <Container maxWidth="xl">
                    <MyList>
                        {data.map(e => {
                            return (
                                <ListItem sx={{width:{sm:'20%'},padding:'0px'}}>
                                    <ListItemButton onClick={()=>{
                                        navigate(e.action)
                                    }}>
                                        <ListItemText>
                                            <Typography textAlign='center' sx={{fontSize:{xs:'13px',sm:'initial'}}}>
                                            {e.text}
                                            </Typography>
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </MyList>
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default Head