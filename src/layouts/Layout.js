import React, { useState } from 'react'
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { Box } from "@mui/material";


const Layout = ({children}) => {

	
	
    return (
        
            <Box display='flex'>
                <SideBar />
                <Box flex={6}>
                    <NavBar />
                    {children}
                </Box>
            </Box>
 
    )
}

export default Layout