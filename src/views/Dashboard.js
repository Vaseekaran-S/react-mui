import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Data from "../component/dashboard/Data";
import Head from "../component/dashboard/Head";
import Layout from "../layouts/Layout";


export default function Dashboard({children}){

    const data = [
        {
            action: '/dashboard/account',
            text: 'Accounts'
        },
        {
            action: '/dashboard/portfolio',
            text: 'Portfolio'
        },
        {
            action: '/dashboard/transaction',
            text: 'Pay & Transfer'
        }
    ]

    return(
        <Layout>
            <Head data={data}/>
            <Data/>
            {children}
        </Layout>
    );
}

