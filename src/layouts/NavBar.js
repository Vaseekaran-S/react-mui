import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Typography } from "@mui/material";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useState } from "react";
import Cart from "../component/Cart";

export default function NavBar() {

    const [card, setCard] = useState(false)

    return (
        <AppBar position="inline">
            <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography>
                    Material UI
                </Typography>
                <Box display='flex' alignItems='center' position='relative' gap={2}>

                    <Box zIndex='10' position='absolute' top='50px' right='50px' display={card ? 'block' : 'none'} width='800px' height='800px' bgcolor='green'>
                        <Cart/>
                    </Box>

                    <IconButton onClick={() => { setCard(!card) }}>
                        <Badge badgeContent={4} color='warning'>
                            <NotificationsActiveIcon sx={{ color: 'white' }} />
                        </Badge>
                    </IconButton>
                    <Avatar sx={{ backgroundColor: 'black' }}>V</Avatar>

                </Box>
            </Toolbar>
        </AppBar>
    );
}