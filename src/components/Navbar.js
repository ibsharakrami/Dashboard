import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Avatar from '@mui/material/Avatar';
import CloseIcon from '@mui/icons-material/Close';

import { styled, alpha } from '@mui/material/styles';

export default function ButtonAppBar() {

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 99,
    backgroundColor: " #EDEDF0",
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '668',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: '668',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '35ch',
        '&:focus': {
          width: '35ch',
        },
      },
    },
  }));



  return (
    <Box sx={{ flexGrow: 1 ,background:"#ffff",boxShadow:"#ffff",elevation: 0}}>
      <AppBar position="static" sx={{background:"#ffff",color:"#5A5B6A",display:'flex',justifyContent:"space-between",boxShadow:"none",elevation: 0}}>
        <Toolbar sx={{ display:'flex',alignItems:'center', justifyContent:"space-between",boxShadow:"none",elevation: 0}}>
        <Avatar sx={{ background:"linear-gradient(90deg, #2979FF 0%, #4C589E 100%)",fontSize:30 }} variant="rounded">
        S
      </Avatar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 , color:"#0C2146",pl:2, fontSize:36}}>
            Shopka
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 0, fontWeight:500, color:"#5A5B6A", fontSize:20,alignItems:'center',letterSpacing:"0.004em",mr:3}}>
            Sell on Shopka
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 0, fontWeight:500, color:"#5A5B6A", fontSize:20,alignItems:'center',letterSpacing:"0.0075em",mr:15}}>
            Register
          </Typography>

          <Search >
            <SearchIconWrapper>
              <SearchIcon />
              <CloseIcon className='cancel' sx={{paddingLeft:36}} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="useless items on white background"
              inputProps={{ 'aria-label': 'search'}}
            />


          </Search>

          <Typography variant="h6" component="div" sx={{ flexGrow: 0, fontWeight:500, color:" #2264D1", fontSize:20,alignItems:'center',letterSpacing:"0.0075em",ml:8}}>
          Consumer Electronics
          </Typography>
          <Button variant="outlined" sx={{color: " #2264D1",letterSpacing:"0.0075em",fontSize:20,height:30,fontweight: 700,ml:5}}>Sign in</Button>
          <Button variant="outlined" sx={{color: " #2264D1",letterSpacing:"0.0075em",fontSize:20,height:30,fontweight: 700,ml:1}}>My cart</Button>

          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

