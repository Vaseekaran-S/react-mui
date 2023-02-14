import { Box, CircularProgress } from '@mui/material'
import React, { useContext } from 'react'
import Items from '../component/products/items'
import Layout from '../layouts/Layout'
import { Context } from '../Router'

const Products = () => {

  const { users } = useContext(Context)

  console.log("DATA : ",users.products);

  return (
    <Layout>
      {(users.products.length == 0) ? (
        <Box width='100%' height='100%' display='flex' alignItems='center' justifyContent='center'>
          <CircularProgress size='90px'/>
        </Box>
      ) : (
        <Items />
      )}
    </Layout>
  )
}

export default Products