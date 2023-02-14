import React, { useContext, useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Box, Button, Grid } from '@mui/material';
import { Context } from '../../Router';
import { useNavigate } from 'react-router-dom';


const Items = (e) => {

    const { users, dispatchUserEvent } = useContext(Context)

    const add = (e) => {
        dispatchUserEvent('ADD_CART', e)
    }

    function remove(e) {
        console.log("Remove");
        dispatchUserEvent('REMOVE_CART', e);
    }


    const navigate = useNavigate()

    const data = users.products;
    const cart = users.cart;

    return (
        <>
            <Box>

            </Box>
            <Box padding='30px'>
                <Grid container rowSpacing={2}>
                    {data?.map((e, i) => (
                        <Grid item xs={3} key={i}>
                            <Card sx={{ width: '250px' }}>
                                <CardHeader sx={{ overflow: 'hidden', textOverflow: 'ellipsis', height: '50px' }} title={e.title} />
                                <CardMedia
                                    onClick={() => navigate(`products/${e.id}`)}
                                    component='img'
                                    alt='Image'
                                    image={e.image}
                                    height='150px'
                                    sx={{ backgroundColor: 'grey', margin: '10px', display: 'inline' }}
                                />
                                <CardContent>${e.price}</CardContent>
                                <CardActions>
                                    {(cart.includes(e)) ? (
                                        <Button onClick={(event) => remove(e)} variant='contained'>Remove to Cart</Button>
                                    ) : (
                                        <Button onClick={(event) => add(e)} variant='contained'>Add to Cart</Button>
                                    )}
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