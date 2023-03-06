import React, { useRef } from 'react'
import Head from '../component/dashboard/Head';
import Layout from '../layouts/Layout'

function Admin() {

    const file = useRef(null)
    const handleUpload=()=>{
        console.log(file.current.target.file);
    }

    const data = [
      {
          action: '/dashboard/add-item',
          text: 'ADD ITEMS'
      },
      {
          action: '/dashboard/orders',
          text: 'ORDERS'
      },
      {
          action: '/dashboard',
          text: 'Transfer'
      }
    ]


  return (
    <Layout>
        <Head data={data}/>
        <input onChange={(e)=>console.log(e.target.files[0])} type={"file"} ref={file} />
        <button onClick={handleUpload}>Uplaod</button>
    </Layout>
  )
}

export default Admin