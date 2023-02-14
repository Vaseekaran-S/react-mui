import styled from '@emotion/styled'
import { Box, Button, InputLabel, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Layout from '../layouts/Layout'

const OrderItem = () => {

    const { id } = useParams()

    const [data,setData] = useState({})
    function api(id) {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => {
                setData(json)
            })
    }
    useEffect(() => {
        api(id)
    }, [])

    //href=`https://api.whatsapp.com/send?phone=+919360517438&text=PRODUCT ID : ${id}`

    const MyTextField = styled(TextField)({
        width:'400px'
    })
    const MyInputLabel = styled(InputLabel)({
        color:'#1976d2',
        marginBottom:'10px',
        marginTop:'30px'
    })

    const [userInfo,setUserInfo] = useState({
        userName:'',

}) 

    function changeName(e) {
        
    }

  return (
    <Layout>
        <Box display='flex' height='100%' alignItems='center' justifyContent='center'>
            <Box width='400px'>
                <Typography variant='h5' color='#1976d2'>SIGN IN BEFORE ORDER</Typography>

                <MyInputLabel>Enter Your Name :</MyInputLabel>
                <MyTextField size='small' onChange={(e)=>changeName()}/>

                <MyInputLabel>Enter Your Mobile Number :</MyInputLabel>
                <MyTextField size='small' onChange={(e)=>changeName()}/>

                <MyInputLabel>Enter Your Address :</MyInputLabel>
                <MyTextField size='small' onChange={(e)=>changeName()}/>

                <Button sx={{width:'400px',height:'45px',marginTop:'30px'}} variant='contained'>SUBMIT</Button>

            </Box>
        </Box>
    </Layout>
  )
}

export default OrderItem