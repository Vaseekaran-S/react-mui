import { Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { data } from "../data/sideBarData";
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export default function NavBar() {
    const location = useLocation();
    useEffect(() => {
    })

    const navigate = useNavigate()

    return (
        <Box flex={1} height='100vh' borderRight='1px solid lightGray' sx={{ display: { xs: 'none', sm: 'block' } ,position : 'sticky'}}>
            <Box height='63px' borderBottom='1px solid lightGray'></Box>
            <List disablePadding dense>
                {data.map(e => {
                    return (

                        <ListItem>
                            <ListItemButton onClick={()=>{
                                navigate(e.url)
                            }
                            }>
                                <ListItemIcon>
                                    {e.icon}
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography>
                                        {e.text}
                                    </Typography>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
        </Box>
    );
}