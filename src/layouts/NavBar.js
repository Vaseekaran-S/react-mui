import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { useContext, useState } from "react";
import CartItems from "../component/products/cart";
import { Context } from "../Router";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function NavBar() {

    const [card, setCard] = useState(false);

    const { users } = useContext(Context)

    return (
        <Box position="inline">
            <AppBar position="sticky">
                <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography>
                        Material UI
                    </Typography>
                    <Box display='flex' alignItems='center' position='relative' gap={2}>

                        <Box zIndex='10' position='absolute' top='50px' right='50px' display={card ? 'block' : 'none'} padding='20px' width='800px' bgcolor='grey'>
                            <CartItems />
                        </Box>

                        <IconButton onClick={() => { setCard(!card) }}>
                            <Badge badgeContent={users.cart.length} color='warning'>
                                <ShoppingCartIcon sx={{ color: 'white' }} />
                            </Badge>
                        </IconButton>
                        <Avatar sx={{ backgroundColor: 'black' }}>V</Avatar>

                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}