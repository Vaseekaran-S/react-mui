import React, { useContext,useState,useEffect } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Box, Button, Grid } from '@mui/material';
import { Context } from '../../Router';


const Items = () => {

    const { users, dispatchUserEvent } = useContext(Context)

    const add = (e) => {
        dispatchUserEvent('ADD_CART', e)
    }

    const data = users.products;

    return (
        <>
            <Box>

            </Box>
            <Box padding='30px'>
                <Grid container rowSpacing={2}>
                    {data?.map((e,i) => (
                        <Grid item xs={3} key={i}>
                            <Card sx={{ width: '250px' }}>
                                <CardHeader title={e.title} />
                                <CardMedia
                                    component='img'
                                    alt='Image'
                                    image={e.image}
                                    height='150px'
                                    sx={{ backgroundColor: 'grey' }}
                                />
                                <CardContent>${e.price}:{e.id}</CardContent>
                                <CardActions>
                                    <Button onClick={(event) => add(e)} variant='contained'>Add to Cart</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}

export default Items