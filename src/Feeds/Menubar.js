import React from 'react'
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ListIcon from '@mui/icons-material/List';
import WindowIcon from '@mui/icons-material/Window';
import Window from '../Assets/icons/window.png'
import Menu from '../Assets/icons/menu.png'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Menubar = () => {
  const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (


    <Stack direction="row" spacing={1} justifyContent="start" alignItems="center" >
     {/* <Button
        id="demo-customized-button"
        // aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"

        variant="outlined"
        disableElevation

        endIcon={<KeyboardArrowDownIcon />}
        sx={{color:"#19191D" ,border:"1px solid #5A5B6A",fontSize:10}}
      >
        Useless first
      </Button> */}
      <FormControl
      >
  <InputLabel >SORT BY</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    sx={{color:"#19191D" ,border:"1px solid #5A5B6A",fontSize:14,height:30,width:150}}
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={10}>Useless first</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>

      <Button
        id="demo-customized-button"
        // aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"

        variant="outlined"
        disableElevation

        endIcon={<KeyboardArrowDownIcon />}
        sx={{color:"#787885" ,border:"1px solid #B4B4BB",letterspacing: "0.018em",fontSize:10}}
      >
        Condition
      </Button>
      <Button
        id="demo-customized-button"
        // aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-label='sort by'
        variant="outlined"
        disableElevation

        endIcon={<KeyboardArrowDownIcon />}
        sx={{color:"#787885" ,border:"1px solid #B4B4BB",letterspacing: "0.018em",borderRadius:"4px",fontSize:10}}
      >
        Delivery options
      </Button>

      <ButtonGroup  aria-label="outlined primary button group" sx={{pl:13}}>
  <Button variant="outlined" sx={{color: "#5A5B6A",letterspacing: "0.018em",background: "#EBF2FF",border:"none",fontSize:10}}>Show all</Button>
  <Button  variant="contained"sx={{color:"#2264D1",boxshadow:'0px 1px 2px rgba(27, 78, 163, 0.24), 0px 2px 4px rgba(41, 121, 255, 0.24)',background: "#FFF",borderRadius:"4px",fontSize:10}}>Auction</Button>
  <Button variant="outlined" sx={{color: "#5A5B6A",letterspacing: "0.018em",background: "#EBF2FF",border:"none",fontSize:10}}>Buy now</Button>
</ButtonGroup>

<ButtonGroup  aria-label="outlined primary button group">
  <Button variant="outlined"   sx={{color: "#5A5B6A",letterspacing: "0.018em",background: "#EBF2FF",border:"none",}}>
  <img class="" src={Menu} alt="jjj"/>
  </Button>
  <Button  variant="contained"   sx={{color:"#2264D1",boxshadow: "0px 1px 2px rgba(27, 78, 163, 0.24), 0px 2px 4px rgba(41, 121, 255, 0.24)",background: "#FFF",borderRadius:"4px"}}>
  <img class="" src={Window} alt="jjj"/>
  </Button>

</ButtonGroup>


  </Stack>
  )
}

export default Menubar
