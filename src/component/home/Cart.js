import { Box, Grid } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../Router'
import ItemCard from './Card'

const Cart = () => {
    const { users, dispatchUserEvent } = useContext(Context)
    const [cart, setcart] = useState([{
        title: "dsdfd",
        price: "12323"
    }])
    useEffect(() => {
        setcart([...cart, users.cart])

    }, [])

    return (
        <Box height='100%'>
            <Grid container rowSpacing={2} padding='20px'>

                {users?.cart?.map(e => (
                    <Grid item xs={3} sm={6}>
                        <ItemCard data={cart} />
                    </Grid>

                ))}


            </Grid>
        </Box>
    )
}

export default Cart