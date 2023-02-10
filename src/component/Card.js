import { Box, Button, Grid } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { maxWidth } from '@mui/system';


const ItemCard = (props) => {

    const data1 = props.data

    return (
        <Grid container display='flex' padding='20px'>
            {data1.map(e => {
                return (
                    <Grid item xs={3} mb='30px'>
                        <Card sx={{ width: '350px' }}>
                            <CardHeader
                                title={e.title}
                            />
                            <CardMedia
                                component='img'
                                alt='Image'
                                image="./boat.jpg"
                                height='250px'
                                sx={{ backgroundColor: 'grey' }}
                            />
                            <CardContent>${e.price}</CardContent>
                            <CardActions>
                                <Button variant='contained'>Add to Cart</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                );
            })}
        </Grid>
    )
}

export default ItemCard