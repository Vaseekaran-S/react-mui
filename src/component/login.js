import { Box, Container, InputLabel, TextField, Typography } from "@mui/material"
import { useFormik } from 'formik';


function LoginForm() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    return (
        <Box>
            <Typography variant="h4" textAlign='center'>LOGIN FORM</Typography>
            <Container>
                <Box p={25}>
                    <form>

                        <InputLabel>NAME :</InputLabel>
                        <TextField
                            name="name"
                            placeholder="Enter your Name"
                            value={formik.values.name} 
                        />

                    </form>
                </Box>
            </Container>
        </Box>
    )
}

export default LoginForm