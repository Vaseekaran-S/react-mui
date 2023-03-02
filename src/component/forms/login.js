import { Box, Button, Container, InputLabel, TextField, Typography } from "@mui/material"
import { useFormik } from 'formik';
import styled from "styled-components";
import * as yup from 'yup';

const MyInputLabel = styled(InputLabel)({
    color : 'blue'
})
const MyTextField = styled(TextField)({
    width: '400px',
    margin: '10px 0px 20px 0px'
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

function LoginForm() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: validationSchema
    })

    console.log(formik.errors);

    return (
        <Box>
            <Typography variant="h4" textAlign='center'>LOGIN FORM</Typography>
            <Container>
                <Box p={25} >
                    <form>

                        <MyInputLabel>NAME :</MyInputLabel>
                        <MyTextField
                            name="name"
                            placeholder="Enter your Name"
                            value={formik.values.name} 
                            onChange={formik.handleChange}
                        />
                        { formik.errors.name  ? <Typography style="color: red;">{formik.errors.name}Hello</Typography> : null }

                        <MyInputLabel>EMAIL :</MyInputLabel>
                        <MyTextField
                            name="email"
                            placeholder="Enter your Email"
                            value={formik.values.email} 
                            onChange={formik.handleChange}
                        />
                        { formik.errors.email ? <Typography style="color: red;">{formik.errors.email}</Typography> : null }

                        <MyInputLabel>PASSWORD :</MyInputLabel>
                        <MyTextField
                            name="password"
                            type="password"
                            placeholder="Enter your Password"
                            value={formik.values.password} 
                            onChange={formik.handleChange}
                        /> 
                        { formik.errors.password ? <Typography style="color: red;">{formik.errors.password}</Typography> : null }

                        <br/>
                        
                        <Button type="submit" variant="contained">SUBMIT</Button>

                    </form>
                </Box>
            </Container>
        </Box>
    )
}

export default LoginForm