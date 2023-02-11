import { Box, Button, Grid } from '@mui/material'
import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { maxWidth } from '@mui/system';

import { Context } from '../../Router';
const ItemCard = (props) => {

    const data1 = props.data;

    const { dispatchUserEvent } = useContext(Context);

    function add(){
        console.log("[ADD]");
        dispatchUserEvent('ADD_CART', {title:"dfsf",price:"213"});
    }
    return (

        <Card sx={{ width: '350px' }}>
            <CardHeader title={data1.title}/>
            <CardMedia
                component='img'
                alt='Image'
                image="./boat.jpg"
                height='250px'
                sx={{ backgroundColor: 'grey' }}
            />
            <CardContent>${data1.price}</CardContent>
            <CardActions>
                <Button onClick={()=>add()} variant='contained'>Add to Cart</Button>
            </CardActions>
        </Card>

    )
}

export default ItemCard