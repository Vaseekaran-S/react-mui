import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Data from "../component/Data";
import Head from "../component/Head";
import Layout from "./Layout";


export default function Dashboard({children}){
    return(
        <Layout>
            <Head/>
            <Data/>
            {children}
        </Layout>
    );
}

