import React, { useContext } from 'react'
import { Context } from '../../Router'
import Layout from '../Layout'
import Single from './single'

const ProductDetails = (e) => {

    const { users } = useContext(Context)

  return (
    <Layout>
        <Single/>
    </Layout>
  )
}

export default ProductDetails