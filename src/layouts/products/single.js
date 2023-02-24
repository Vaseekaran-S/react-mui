import { Remove } from '@mui/icons-material'
import { Box, Button, Container, List, Rating, Typography } from '@mui/material'
import { height, Stack } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Context } from '../../Router'


const Single = () => {

    const { users, dispatchUserEvent } = useContext(Context)

    const add = (e) => {
        dispatchUserEvent('ADD_CART', e)
    }
    const remove = (e) => {
        dispatchUserEvent('REMOVE_CART',e)
    }

    const { id } = useParams()
    const [data, setData] = useState([])

    function api(id) {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => {
                setData([json])
            })
    }

    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        api(id)
    }, [])

    function msg(){
        console.log('welcome');
        navigate('https://api.whatsapp.com')
    }

    const cartItems = users.cart

    return (
        <Box>
            <Container>
                {data?.map((e) => (
                    <Stack mt={5} spacing={9}>
                        <Typography variant='h3'>{e?.title}</Typography>
                        <Box display='flex' justifyContent='space-evenly'>
                            <Box height='500px' width='500px' overflow='hidden' alignItems='center'>
                                <img alt='img' src={e?.image} style={{ height: '500px' }} />
                            </Box>
                            <Stack width="600px" spacing={3}>
                                <Box display='flex' alignItems='center' gap={2}>
                                    <Typography color='primary' variant='h5'>Category : </Typography>
                                    <Typography>{e?.category}</Typography>
                                </Box>
                                <Box display='flex' alignItems='center' gap={2}>
                                    <Typography color='primary' variant='h5'>Price : </Typography>
                                    <Typography>{e?.price}</Typography>
                                </Box>
                                <Box>
                                    <Typography color='primary' variant='h5'>Description : </Typography>
                                    <Typography>{e?.description}</Typography>
                                </Box>
                                <Box display='flex' alignItems='center' gap={2}>
                                    <Typography color='primary' variant='h5'>Rating : </Typography>
                                    <Typography>{e?.rating?.rate}</Typography>

                                </Box>
                                <Box display='flex' alignItems='center' gap={2}>
                                    <Typography color='primary' variant='h5'>Stars : </Typography>
                                    <Rating name="half-rating-read" defaultValue={e?.rating?.rate} precision={0.1} readOnly />
                                    <Typography>({e?.rating?.count})</Typography>
                                </Box>
                                <Box display='flex' alignItems='center' gap={2}>
                                    {(cartItems.includes(e)) ? (
                                        <Button onClick={(event) => remove(e)} variant='contained'>Remove to Cart</Button>
                                    ) : (
                                        <Button onClick={(event) => add(e)} variant='contained'>Add to Cart</Button>
                                    )}
                                    <Button sx={{ width: '200px' }} onClick={()=>{navigate(`/components/products/order/${id}`)}} variant='contained'>BUY NOW</Button>
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                ))}
            </Container>
        </Box>
    )
}

export default Single