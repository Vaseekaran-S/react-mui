import { Box, Button, Card, CardContent, CardHeader, Grid, styled, Typography } from '@mui/material'
import { height } from '@mui/system'
import React from 'react'

const MyGrid = styled(Grid)({
    height: '250px',
    padding: '20px'
})

const data = [
    {
        title: 'Balance',
        size: '8',
        con1: {
            title: 'View Balance',
            date: 'OCT 14th 2022',
            price: '$3,743'
        }
    },
    {
        title: 'Balance',
        size: '4',
        con1: {
            title: 'View Balance',
            date: 'OCT 14th 2022',
            price: '$3,743'
        }
    },
    {
        title: 'Today',
        size: '8',
        con1: {
            title: 'View Balance',
            date: 'OCT 14th 2022',
            price: '$3,743'
        }
    },
    {
        title: 'Manage your account',
        size: '4',
        con1: {
            title: 'View Balance',
            date: 'OCT 14th 2022',
            price: '$3,743'
        }
    }
]

const Frame = (props) => {
    return (
        <Card sx={{ height: '100%' }}>
            <CardHeader title={props.info.title} action={props.info.title == 'Balance' ? <Button sx={{ border: '1px solid #1976d2' }}>Add Expensive</Button> : null} variant='h5' sx={{ color: '#1976d2' }}>
            </CardHeader>
            <CardContent>
                <Typography variant='h3'>
                    {props.info.con1.price}
                </Typography>
                <Typography>
                    {props.info.con1.date}
                </Typography>
                <Typography color='#1976d2'>
                    {props.info.con1.title}
                </Typography>
            </CardContent>
        </Card>
    );
}

const Data = () => {
    return (
        <Box padding='20px'>

            <Grid container>
                {data.map(e => {
                    return (
                        <MyGrid item xs={12} sm={e.size}>
                            <Frame info={e} />
                        </MyGrid>
                    );
                })}
            </Grid>

            {/* <Grid container>
            <MyGrid item xs={8}>
                <Frame title={{name:'hello',}}/>
            </MyGrid>
            <MyGrid item xs={4}>
                <Frame title="REDEEM"/>
            </MyGrid>
            <MyGrid item xs={8}>
                <Frame title="Today"/>
            </MyGrid>
            <MyGrid item xs={4}>
                <Frame title="Manage your account"/>
            </MyGrid>
        </Grid> */}

        </Box>
    )
}

export default Data