import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Data from "../component/dashboard/Data";
import Head from "../component/dashboard/Head";
import Layout from "../layouts/Layout";


export default function Dashboard({children}){
    return(
        <Layout>
            <Head/>
            <Data/>
            {children}
        </Layout>
    );
}

