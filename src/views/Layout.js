import React, { useState } from 'react'
import NavBar from "../layouts/NavBar";
import SideBar from "../layouts/SideBar";
import { Box } from "@mui/material";
import { Context } from './ContextApi';

const Layout = ({children}) => {

    const [ users, setUsers ] = useState([]);
	
	const dispatchUserEvent = (actionType, payload) => {
		switch (actionType) {
			case 'ADD_USER':
				setUsers([ ...users, payload.newUser ]);
				return;
			case 'REMOVE_USER':
				setUsers(users.filter(user => user.id !== payload.userId));
				return;
			default:
				return;
		}
	};

    return (
        <Context.Provider value={{ users, dispatchUserEvent }}>
            <Box display='flex'>
                <SideBar/>
                <Box flex={6}>
                    <NavBar />
                    {children}
                </Box>
            </Box>
        </Context.Provider>
    )
}

export default Layout