import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { Context } from '../../Router';

const CartItems = () => {

    const { users,dispatchUserEvent } = useContext(Context)

    function remove(e) {
        dispatchUserEvent('REMOVE_CART', e)
    }
    console.log(users.cart);

    return (
        <Box>
            {users.cart?.map(e => (

                <Box display={'flex'} alignItems='center' justifyContent='space-between' padding='20px'>
                      <CardMedia
                            component='img'
                            alt='Image'
                            image= {e.img}
                            height='50px'
                            sx={{width:'50px', backgroundColor: 'grey' }}
                        />
                    <Typography>{e.title}</Typography>
                    <Typography>PRICE : {e.price}</Typography>
                    <Button onClick={(event)=>remove(e)} variant='contained'>Delete</Button>
                </Box>

                // <Card sx={{ width: '250px' }}>
                //     <CardHeader title={e.title} />
                //     <CardMedia
                //         component='img'
                //         alt='Image'
                //         image="./boat.jpg"
                //         height='150px'
                //         sx={{ backgroundColor: 'grey' }}
                //     />
                //     <CardContent>$</CardContent>
                //     <CardActions>
                //         <Button variant='contained'>Add to Cart</Button>
                //     </CardActions>
                // </Card>
            ))}
        </Box>
    )
}

export default CartItems