import React from 'react'
import { Box } from '@mui/material'

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CheckroomIcon from '@mui/icons-material/Checkroom';
import Icon from '@mui/material/Icon';

import Enter from '../Assets/icons/Enter.png'
import Music from '../Assets/icons/Music.png'
import Sport from '../Assets/icons/Sport.png'
import Pets from '../Assets/icons/Pet.png'
import Dress from '../Assets/icons/dress.png'
import Kitchen from '../Assets/icons/Kitchen.png'
import Travel from '../Assets/icons/Travel.png'
import Green from '../Assets/icons/Green.png'
import Electrical from '../Assets/icons/Electrical.png'
import Mother from '../Assets/icons/Mother.png'
import Toy from '../Assets/icons/Toy.png'
import Vintage from '../Assets/icons/Vintage.png'

const Topbar = () => {
  return (
    <Stack direction="row"  justifyContent="start" alignItems="center" height="100">
    <Box sx={{display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt:2,
            pb:2,
            pl:0.7,
            pr:0.7,
            background: "#EBF2FF",
            borderRadius:1}}>
     <img class="Enter" src={Dress } alt="jjj" sx={{height:"50"}}/>
    {/* <CheckroomIcon sx={{color:"#2979FF"}}/> */}
    <Typography sx={{color:"#2979FF",fontSize:13}}>Clothing & Shoes</Typography>

    </Box>
    <Box sx={{display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt:2,
            pb:2,
            pl:0.7,
            pr:0.7,
            background: "#FFFFFF",
            // borderRadius:1
            }}>
    <img class="Enter" src={Enter} alt="jjj"/>
    <Typography sx={{color:"#787885",fontSize:13}}>Entertainment</Typography>
   </Box>
   <Box sx={{display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt:2,
            pb:2,
            pl:0.7,
            pr:0.7,
            background: "#FFFFFF",
            // borderRadius:1
            }}>
    <img class="Enter" src={Music} alt="jjj"/>
    <Typography sx={{color:"#787885",fontSize:13}}>Music</Typography>

    </Box>
    <Box sx={{display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt:2,
            pb:2,
            pl:0.7,
            pr:0.7,
            background: "#FFFFFF",
            // borderRadius:1
            }}>
    <img class="Enter" src={Sport} alt="jjj"/>
    <Typography sx={{color:"#787885",fontSize:13}}>Sport & Lifestyle</Typography>

    </Box>
    <Box sx={{display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt:2,
            pb:2,
            pl:0.7,
            pr:0.7,
            background: "#FFFFFF",
            // borderRadius:1
            }}>
    <img class="Enter" src={Pets} alt="jjj"/>
    <Typography sx={{color:"#787885",fontSize:13}}>Pets</Typography>

    </Box>
    <Box sx={{display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt:2,
            pb:2,
            pl:0.7,
            pr:0.7,
            background: "#FFFFFF",
            // borderRadius:1
            }}>
    <img class="Enter" src={Kitchen} alt="jjj"/>
    <Typography sx={{color:"#787885",fontSize:13}}>Kitchen Accessories</Typography>

    </Box>
    <Box sx={{display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt:2,
            pb:2,
            pl:0.7,
            pr:0.7,
            background: "#FFFFFF",
            // borderRadius:1
            }}>
    <img class="Enter" src={Travel} alt="jjj"/>
    <Typography sx={{color:"#787885",fontSize:13}}>Travel Equipment</Typography>

    </Box>
    <Box sx={{display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt:2,
            pb:2,
            pl:0.7,
            pr:0.7,
            background: "#FFFFFF",
            // borderRadius:1
            }}>
    <img class="Enter" src={Green} alt="jjj"/>
    <Typography sx={{color:"#787885",fontSize:13}}>Growing & Garden</Typography>

    </Box>
    <Box sx={{display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt:2,
            pb:2,
            pl:0.7,
            pr:0.7,
            background: "#FFFFFF",
            // borderRadius:1
            }}>
    <img class="Enter" src={Electrical} alt="jjj"/>
    <Typography sx={{color:"#787885",fontSize:13}}>Electrical Tools</Typography>

    </Box>
    <Box sx={{display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt:2,
            pb:2,
            pl:0.7,
            pr:0.7,
            background: "#FFFFFF",
            // borderRadius:1
            }}>
    <img class="Enter" src={Mother} alt="jjj"/>
    <Typography sx={{color:"#787885",fontSize:13}}>Mother Care</Typography>

    </Box>
    <Box sx={{display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt:2,
            pb:2,
            pl:0.7,
            pr:0.7,
            background: "#FFFFFF",
            // borderRadius:1
            }}>
    <img class="Enter" src={Toy} alt="jjj"/>
    <Typography sx={{color:"#787885",fontSize:13}}>Toys & Entertainment</Typography>

    </Box>
    <Box sx={{display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt:2,
            pb:2,
            pl:0.7,
            pr:0.7,
            background: "#FFFFFF",
            // borderRadius:1
            }}>
    <img class="Enter" src={Vintage} alt="jjj"/>
    <Typography sx={{color:"#787885",fontSize:13}}>Vintage</Typography>

    </Box>






    </Stack>
  )
}

export default Topbar
