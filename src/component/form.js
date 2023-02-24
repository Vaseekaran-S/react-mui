import { Box, Button, InputLabel, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik';
import * as yup from 'yup';

const MyTextField = styled(TextField)({
    width:'400px',
    margin : '50px'
})
const MyInputLabel = styled(InputLabel)({
    color:'#1976d2',
    marginBottom:'10px',
    marginTop:'30px'
})

const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

const Form = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: 'foobar@example.com',
            password: 'foobar',
          },
          validationSchema: validationSchema,
          onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
          },
    })

  return (
    <Box display='flex' alignItems='center' justifyContent='center' height='90%'>
            <form onSubmit={formik.handleChange}>
                <MyInputLabel variant='h5' >Name : </MyInputLabel>
                <MyTextField 
                    id="email"
                    name="email"
                    placeholder='ENTER YOUR NAME'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />

                <MyInputLabel variant='h5' >Mail : </MyInputLabel>
                <MyTextField 
                    id="email"
                    name="email"
                    placeholder='ENTER YOUR MAIL ID'
                    value={formik.values.email}
                    onChange={formik.handleChange}    
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}              
                />

                <MyInputLabel variant='h5' >Password : </MyInputLabel>
                <MyTextField 
                    id="password"
                    name="password"
                    placeholder='ENTER YOUR ADDRESS'
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}                
                /><br/>

                <Button sx={{width:'400px',height:'45px',marginTop:'30px'}} variant='contained' type="submit">SUBMIT</Button>
            </form>
    </Box>
  )
}

export default Form