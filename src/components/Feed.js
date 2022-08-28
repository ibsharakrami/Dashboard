import { Box } from '@mui/material'
import React from 'react'
import ClickableChips from '../Feeds/Appbar'
import Menubar from '../Feeds/Menubar'
import Cards from '../Feeds/Cards'

const Feed = () => {
  return (
    <Box  flex={4} p="2">
    {/* <br/> */}
    <Menubar />
    <br/>
      <ClickableChips />
      <Cards />


    </Box>
  )
}

export default Feed
