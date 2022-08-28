import React from 'react'
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import first from '../Assets/image/first.png'
import second from '../Assets/image/second.png'
import third from '../Assets/image/third.png'
import four from '../Assets/image/four.png'
import five from '../Assets/image/five.png'
import six from '../Assets/image/six.png'
import seven from '../Assets/image/seven.png'
import image from '../Assets/image/Image.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { height, Stack } from '@mui/system';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "#fff",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        p: 1,
        m: 1,
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};

const Cards = () => {
  const [value, setValue] = React.useState(2);
  return (
    <div>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        <Card sx={{ maxWidth: 345 }}>
          {/* <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="first"
          /> */}
          <img class="img" src={first} alt="jjj"/>
          <CardContent>
            <Typography variant="body1"   sx={{color:"#19191D",fontSize:16,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>
            Vintage Typewriter to post awesome stories about UI design and webdev.
            </Typography>
            <Typography variant='h6' sx={{color: "rgba(0, 0, 0, 0.87)",fontWeight:700,fontSize:24,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>
            $49.50

            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{color:"#787885",fontSize:14,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0018em"}}>
            Eligible for Shipping To Mars or somewhere else
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              sx={{width:100}}
            /> */}
            <Rating name="size-small" defaultValue={3} size="small" />
            <Typography variant='h6' sx={{color: "#5E6366",fontWeight:500,fontSize:14,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em",pl:1,pr:1}}>
            4.56

            </Typography>
            {/* <Button size="small">Learn More</Button> */}
            <Button variant="outlined" size="small" startIcon={<FavoriteBorderIcon />}  sx={{color: "#2264D1"}}>
  Watch
</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          {/* <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="first"
          /> */}
          <img class="img1" src={second} alt="jjj"/>
          <CardContent>
            <Typography variant="body1"   sx={{color:"#19191D",fontSize:16,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>
            Lee Pucker design. Leather botinki for handsome designers. Free shipping.
            </Typography>
            <Typography variant='h6' sx={{color: "rgba(0, 0, 0, 0.87)",fontWeight:700,fontSize:24,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>
            $13.95

            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{color:"#787885",fontSize:14,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0018em"}}>
            1258 bids, 359 watchers
$5.95 for shipping
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              sx={{width:100}}
            /> */}
            <Rating name="size-small" defaultValue={3} size="small" />
            <Typography variant='h6' sx={{color: "#5E6366",fontWeight:500,fontSize:14,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em",pl:1,pr:1}}>
            4.6

            </Typography>
            {/* <Button size="small">Learn More</Button> */}
            <Button variant="outlined" size="small" startIcon={<FavoriteBorderIcon />}  sx={{color: "#2264D1"}}>
  Watch
</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          {/* <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="first"
          /> */}
          <img class="img" src={third} alt="jjj"/>
          <CardContent>
            <Typography variant="body1"   sx={{color:"#19191D",fontSize:16,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>
            Timesaving kitten to save months on development. Playful, cute, cheap!
            </Typography>
            <Typography variant='h6' sx={{color: "rgba(0, 0, 0, 0.87)",fontWeight:700,fontSize:24,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>
            $128.99

            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{color:"#787885",fontSize:14,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0018em",pb:2.5}}>
            Eligible for nothing :(
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              sx={{width:100}}
            /> */}
            <Rating name="size-small" defaultValue={3} size="small" />
            <Typography variant='h6' sx={{color: "#5E6366",fontWeight:500,fontSize:14,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em",pl:1,pr:1}}>
            4.34

            </Typography>
            {/* <Button size="small">Learn More</Button> */}
            <Button variant="outlined" size="small" startIcon={<FavoriteBorderIcon />}  sx={{color: "#2264D1"}}>
  Watch
</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          {/* <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="first"
          /> */}
          <img class="img" src={four} alt="jjj"/>
          <CardContent>
            <Typography variant="body1"   sx={{color:"#19191D",fontSize:16,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>
            Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat!
            </Typography>

            <Stack direction="row" justifyContent="space-between"  alignItems="center">
            <Typography variant='h6' sx={{color: "rgba(0, 0, 0, 0.87)",fontWeight:700,fontSize:24,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>
            $12.48

            </Typography>
            <Button variant="outlined" size="small"   sx={{color: "#37833B",background:"#ECF7ED",border:"none",height:25,fontSize:12}}>
            50% OFF
</Button>

            </Stack>


            <Typography variant="body2" color="text.secondary" sx={{color:"#787885",fontSize:14,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0018em"}}>
            Wordwide shitting available
Buyers protection possible!
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              sx={{width:100}}
            /> */}
            <Rating name="size-small" defaultValue={3} size="small" />
            <Typography variant='h6' sx={{color: "#5E6366",fontWeight:500,fontSize:14,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em",pl:1,pr:1}}>
            4.34

            </Typography>
            {/* <Button size="small">Learn More</Button> */}
            <Button variant="outlined" size="small" startIcon={<FavoriteBorderIcon />}  sx={{color: "#2264D1"}}>
  Watch
</Button>
          </CardActions>
        </Card>



        <Card sx={{ maxWidth: 345 }}>
          {/* <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="first"
          /> */}
          <img class="img" src={five} alt="jjj"/>
          <CardContent>
            <Typography variant="body1"   sx={{color:"#19191D",fontSize:16,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>
            Creativity stimulating lotion. Drink every morning to generate better ideas!
            </Typography>
            <Typography variant='h6' sx={{color: "rgba(0, 0, 0, 0.87)",fontWeight:700,fontSize:24,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>
            $40.45

            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{color:"#787885",fontSize:14,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0018em"}}>
            Eligible for Shipping To Mars or somewhere else
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              sx={{width:100}}
            /> */}
            <Rating name="size-small" defaultValue={3} size="small" />
            <Typography variant='h6' sx={{color: "#5E6366",fontWeight:500,fontSize:14,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em",pl:1,pr:1}}>
            4.3

            </Typography>
            {/* <Button size="small">Learn More</Button> */}
            <Button variant="outlined" size="small" startIcon={<FavoriteBorderIcon />}  sx={{color: "#2264D1"}}>
  Watch
</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          {/* <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="first"
          /> */}
          <img class="img1" src={six} alt="jjj"/>
          <CardContent>
            <Typography variant="body1"   sx={{color:"#19191D",fontSize:16,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em",pb:3}}>
            Prototyping items to create a lot if useless things...
            </Typography>
            <Typography variant='h6' sx={{color: "rgba(0, 0, 0, 0.87)",fontWeight:700,fontSize:24,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>
            $33.45

            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{color:"#787885",fontSize:14,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0018em"}}>
            1258 bids, 359 watchers
$5.95 for shipping
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              sx={{width:100}}
            /> */}
            <Rating name="size-small" defaultValue={3} size="small" />
            <Typography variant='h6' sx={{color: "#5E6366",fontWeight:500,fontSize:14,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em",pl:1,pr:1}}>
            3.4

            </Typography>
            {/* <Button size="small">Learn More</Button> */}
            <Button variant="outlined" size="small" startIcon={<FavoriteBorderIcon />}  sx={{color: "#2264D1"}}>
  Watch
</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          {/* <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="first"
          /> */}
          <img class="img" src={seven} alt="jjj"/>
          <CardContent>
            <Typography variant="body1"   sx={{color:"#19191D",fontSize:16,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em",pb:6}}>
            John Von Ebalkin SPRING
            </Typography>
            <Typography variant='h6' sx={{color: "rgba(0, 0, 0, 0.87)",fontWeight:700,fontSize:24,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>
            $103.49

            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{color:"#787885",fontSize:14,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0018em",pb:2.5}}>
            Eligible for nothing :(
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              sx={{width:100}}
            /> */}
            <Rating name="size-small" defaultValue={3} size="small" />
            <Typography variant='h6' sx={{color: "#5E6366",fontWeight:500,fontSize:14,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em",pl:1,pr:1}}>
            3.66

            </Typography>
            {/* <Button size="small">Learn More</Button> */}
            <Button variant="outlined" size="small" startIcon={<FavoriteBorderIcon />}  sx={{color: "#2264D1"}}>
  Watch
</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          {/* <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="first"
          /> */}
          <img class="img" src={image} alt="jjj"/>
          <CardContent>
            <Typography variant="body1"   sx={{color:"#19191D",fontSize:16,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>
            Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY
            </Typography>
            <Typography variant='h6' sx={{color: "rgba(0, 0, 0, 0.87)",fontWeight:700,fontSize:24,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em"}}>
            $45.78

            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{color:"#787885",fontSize:14,fontWeight:400,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0018em"}}>
            Wordwide shitting available
Buyers protection possible!
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              sx={{width:100}}
            /> */}
            <Rating name="size-small" defaultValue={3} size="small" />
            <Typography variant='h6' sx={{color: "#5E6366",fontWeight:500,fontSize:14,fontStyle:'normal',fontFamily:'Inter',letterspacing: "0.0275em",pl:1,pr:1}}>
            2.89

            </Typography>
            {/* <Button size="small">Learn More</Button> */}
            <Button variant="outlined" size="small" startIcon={<FavoriteBorderIcon />}  sx={{color: "#2264D1"}}>
  Watch
</Button>
          </CardActions>
        </Card>




      </Box>


    </div>
  )
}

export default Cards
