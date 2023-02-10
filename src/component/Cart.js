import { Box } from '@mui/material'
import React from 'react'
import ItemCard from './Card'

const Cart = () => {

    const data = [
        {
            title: "Boat Head Phones",
            price: 999
        },
        {
            title: "USB WIRES",
            price: 99
        },
        {
            title: "Phones",
            price: 1999
        }
    ]


  return (
    <Box>
        <ItemCard data={data}/>
    </Box>
  )
}

export default Cart