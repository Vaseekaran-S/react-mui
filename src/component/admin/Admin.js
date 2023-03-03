import React, { useRef } from 'react'
import Layout from '../../layouts/Layout'

function Admin() {
    const file = useRef(null)
    const handleUpload=()=>{
        console.log(file.current.target.file);
    }
  return (
    <Layout>
        <input onChange={(e)=>console.log(e.target.files[0])} type={"file"} ref={file} />
        <button onClick={handleUpload}>Uplaod</button>
    </Layout>
  )
}

export default Admin