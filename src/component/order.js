import styled from '@emotion/styled'
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../layouts/Layout'
import { useState } from "react";
import { db } from '../config'
import { addDoc, collection } from 'firebase/firestore'

const MyTextField = styled(TextField)({
    width:'400px'
})
const MyInputLabel = styled(InputLabel)({
    color:'#1976d2',
    marginBottom:'10px',
    marginTop:'30px'
})

const OrderItem = () => {

    const creatData = collection(db,"orders");

    const { id } = useParams()

    const [title,setTitle] = useState('')
    const [rate,setRate] = useState('')

    function api(id) {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => {
                setTitle(json.title)
                setRate(json.price)
                console.log(json.title);
            })
    }
    useEffect(() => {
        api(id)
    }, [])

    const [name,setName] = useState("");
    const [number,setNumber] = useState("");
    const [address,setAddress] = useState("");


    function changeName(e) {
        setName(e.target.value);
        console.log("done");
        console.log(name);
    }
    function changeNumber(e) {
        setNumber(e.target.value);
    }
    function changeAddress(e) {
        setAddress(e.target.value);
    }

    async function submit(){

        if(name==""){
            alert("Please Enter Your Name")
        }else if(number==""){
            alert("Please Enter Your Mobile Number")
        }else if(address==""){
            alert("Please Enter Your Adrress")
        }else{

            await addDoc(creatData,{
                name: name,
                number : number,
                productName : title,
                price : rate
            })

            window.open(`https://api.whatsapp.com/send?phone=+919965630426&text=Hi%2C%20I'm%20${name}.%0AI%20want%20the%20following%20product%20from%20you%0APRODUCT%20DETAILS%20%3A-%0ANAME%20%3A%20${title}%0APRICE%20%3A%20Rs.${rate}`)
        }

    }

  return (
    <Layout>
        <Box display='flex' height='100%' alignItems='center' justifyContent='center'>
            <Box width='400px'>
                <Typography variant='h5' color='#1976d2'>SIGN IN BEFORE ORDER</Typography>

                <MyInputLabel>Enter Your Name :</MyInputLabel>
                <MyTextField size='small' name='name' onChange={(e)=>changeName(e)}/>

                <MyInputLabel>Enter Your Mobile Number :</MyInputLabel>
                <MyTextField size='small' name='number' onChange={(e)=>changeNumber(e)}/>

                <MyInputLabel>Enter Your Address :</MyInputLabel>
                <MyTextField size='small' name='address' onChange={(e)=>changeAddress(e)}/>

                <Button sx={{width:'400px',height:'45px',marginTop:'30px'}} variant='contained' onClick={submit}>SUBMIT</Button>

            </Box>
        </Box>
    </Layout>
  )
}

export default OrderItem