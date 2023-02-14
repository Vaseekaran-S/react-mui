import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { Context } from '../../Router';

const CartItems = () => {

    const { users, dispatchUserEvent } = useContext(Context)

    function remove(e) {
        console.log("Remove");
        dispatchUserEvent('REMOVE_CART', e);
    }

    if(users.cart.length == 0){
        users.price = 0
    }

    return (
        <Box>
            <Box>
                <Typography>TOTAL PRICE  : { users.price.toFixed(2) }</Typography>
            </Box>
            
            {users.cart?.map(e => (

                <>
                    <Box display={'flex'} alignItems='center' justifyContent='space-between' padding='20px'>
                        <CardMedia
                            component='img'
                            alt='Image'
                            image={e.image}
                            height='50px'
                            sx={{ width: '50px', backgroundColor: 'grey' }}
                        />
                        <Typography>{e.title}</Typography>
                        <Typography>PRICE : {e.price}</Typography>
                        <Button onClick={(event) => remove(e)} variant='contained'>Delete</Button>
                    </Box>

                </>
            ))}
        </Box>
    )
}

export default CartItems