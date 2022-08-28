import { Box, Button,Typography } from '@mui/material'
import React from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Depart from '../Assets/icons/Departments.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Stack from "@mui/material/Stack";
import Checkbox from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';

const Sidebar = () => {
  return (
    <Box  flex={1} >
      <Button variant="outlined" sx={{}}><FilterListIcon /><img  className='Depart'src={Depart} alt="jjj" /></Button>

      <br />
      <Stack direction="row" spacing={1} sx={{pt:1}}>
      <KeyboardArrowRightIcon  sx={{color:"#9DC2FF",pt:1}} />
      <Box>
      <Typography variant="h6" sx={{color: "#19191D",fontSize:16,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>All Categories</Typography>
      <Typography variant="h6" sx={{color: "#787885",fontSize:14,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.018em"}} >Ecommerce patterns</Typography>

      </Box>
    </Stack>
    <Stack direction="row" spacing={1} sx={{pl:0,pt:1}}>
      <ExpandMoreIcon  sx={{color:"#2264D1",}} />
      <Box>
      <Typography variant="h6" sx={{color: "#19191D",fontSize:16,fontWeight:500,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>Electronics</Typography>
      </Box>
    </Stack>
    <Stack direction="row" spacing={1} sx={{pl:1,pt:1}}>
      <ExpandMoreIcon  sx={{color:"#2264D1",}} />
      <Box>
      <Typography variant="h6" sx={{color: "#19191D",fontSize:16,fontWeight:500,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>Cell Phones & Smartphones</Typography>
      </Box>
    </Stack>
    <Typography variant="h6" sx={{pl:5,color: "#19191D",fontSize:16,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: " 0.0275em"}}>Cell Phone Accessories</Typography>
    <Typography variant="h6" sx={{pl:5,color: "#19191D",fontSize:16,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: " 0.0275em"}}>Cell Phone Gatgets</Typography>
    <Typography variant="h6" sx={{pl:5,color: "#19191D",fontSize:16,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: " 0.0275em"}}>Applications</Typography>
    <Typography variant="h6" sx={{pl:5,color: "#19191D",fontSize:16,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: " 0.0275em"}}>Smart Watches</Typography>

    <Button
        id="demo-customized-button"
        // aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"

        variant="outlined"
        disableElevation

        endIcon={<ExpandMoreIcon />}
        sx={{color:"#2264D1" ,border:"1px solid #B4B4BB",letterspacing: "0.018em",fontSize:14,background: "#EBF2FF",borderradius: 4,font:"Roboto",fontWeight:700,border:"none" ,ml:5,mt:1}}
      >
        Show more
      </Button>
      <Stack direction="row" spacing={1} sx={{pl:1,pt:1}}>
      <KeyboardArrowRightIcon  sx={{color:"#2264D1",}} />
      <Box>
      <Typography variant="h6" sx={{color: "#19191D",fontSize:16,fontWeight:500,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>Business & Industrial</Typography>
      </Box>
    </Stack>
    <Stack direction="row" spacing={1} sx={{pl:1,pt:1}}>
      <KeyboardArrowRightIcon  sx={{color:"#2264D1",pt:1}} />
      <Box>
      <Typography variant="h6" sx={{color: "#19191D",fontSize:16,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>Computers</Typography>
      <Typography variant="h6" sx={{color: "#787885",fontSize:14,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.018em"}} >Tablets & Networking</Typography>

      </Box>
    </Stack>
    <Stack direction="row" spacing={1} sx={{pl:1,pt:1}}>
      <KeyboardArrowRightIcon  sx={{color:"#2264D1",}} />
      <Box>
      <Typography variant="h6" sx={{color: "#19191D",fontSize:16,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>Consumer Electroinics</Typography>
      </Box>
    </Stack>
    <Stack direction="row" spacing={1} sx={{pl:1,pt:1}}>
      <KeyboardArrowRightIcon  sx={{color:"#2264D1",}} />
      <Box>
      <Typography variant="h6" sx={{color: "#19191D",fontSize:16,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>Home & Garden</Typography>
      </Box>
    </Stack>
    <Stack direction="row" spacing={1} sx={{pl:1,pt:1}}>
      <KeyboardArrowRightIcon  sx={{color:"#2264D1",}} />
      <Box>
      <Typography variant="h6" sx={{color: "#19191D",fontSize:16,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>Collectibles</Typography>
      </Box>
    </Stack>
    <Button variant="outlined"  sx={{color:"#2264D1" ,border:"1px solid #B4B4BB",letterspacing: "0.018em",fontSize:14,background: "#EBF2FF",borderradius: 4,font:"Roboto",fontWeight:700,border:"none" ,ml:5,mt:1}}  >Expand</Button>


    <Button
        id="demo-customized-button"
        // aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"

        variant="outlined"
        disableElevation

        endIcon={<ExpandMoreIcon />}
        sx={{color:"#19191D" ,border:"1px solid #B4B4BB",letterspacing: "0.018em",fontSize:14,background: "#FFF",borderradius: 4,font:"Roboto",fontWeight:400,border:"none" ,mt:1,boxShadow:' 0px 1px 2px rgba(58, 58, 68, 0.24), 0px 2px 4px rgba(90, 91, 106, 0.24)',width:240,pl:1,pr:0}}
      >
        Collapsed filters
      </Button>

      <Box sx={{ m: 2 }} />

      <Stack direction="row" spacing={1} sx={{background: "#F7F7FA"}}>


      <Box>
      <Button
        id="demo-customized-button"
        // aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"

        variant="outlined"
        disableElevation

        endIcon={<ExpandLessIcon />}
        sx={{color:"#19191D" ,border:"none",letterspacing: "0.018em",fontSize:14,background: "#F7F7FA",borderradius: 4,font:"Roboto",fontWeight:400,mt:1,width:240,pl:1,pr:0}}
      >
        Expanded Filters
      </Button>
      {/* <Typography id="sandwich-group" level="body2" fontWeight="lg" mb={1} endIcon={<ExpandLessIcon />} >
        Sandwich Condiments
      </Typography> */}
      <Box role="group" aria-labelledby="sandwich-group">
        <List size="sm">
          <ListItem>
            <Checkbox label="Recommended" defaultChecked />
          </ListItem>
          <ListItem>
            <Checkbox label="Recently Added" />
          </ListItem>
          <ListItem>
            <Checkbox label="Expiring Soon" />
          </ListItem>
        </List>
      </Box>
    </Box>

    </Stack>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>


    </Box>
  )
}

export default Sidebar
