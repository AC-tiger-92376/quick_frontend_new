
//import React, { useRef } from 'react';
//import AppBar from '@mui/material/AppBar';
//import Toolbar from '@mui/material/Toolbar';
//import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
//import MenuIcon from '@mui/icons-material/Menu';
import phoneImg from '../assets/images/mobilephone.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Card1 from '../assets/images/you-in-control.svg';
import Card2 from '../assets/images/online-person.svg';
import Card3 from '../assets/images/a-tutor-fit.svg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Divider from '@mui/material/Divider';
//import Link from '@mui/material/Link';
import Box from '@mui/material/Box';


import LinkCard from './LinkCard';
import LinkBox from './LinkBox';
import FAQimg from '../assets/images/FAQ.png';
import Whyimg from '../assets/images/Why_QT.png';
import App_Google_Link from './App_Google_Link';

//import { useTheme } from '@mui/material/styles';

import { Button, Grid } from '@mui/material';
//import MainTheme from '../MainTheme';



function Content() {
    //const bgcolor = useTheme();

  const Titles=[
      {id: 1, title: 'Learn Anything', name:'Learn', color : 'secondary.main'},
      {id: 2, title: 'Teach Anyone', name: 'Teach', color : 'primary.main'},
    ];
  const CardGroup = [
    {id: 1, src: Card1, title: "Learn instantly", text: "Get a tutor with the tap of a button. Connect, message, and schedule sessions. Payments are simple and easy."},
    {id: 2, src: Card2, title: "Anything, anytime", text: "Learn or teach anything, at anytime — in person or online with the tap of a button."},
    {id: 3, src: Card3, title: "Anyone can teach", text: "Tutors set their own prices, work on their own schedule, and are provided tools to earn more money. Anyone can tutor."},
  ];
  
  
    

  return (
    <Box  sx={{ backgroundColor: '#1b1b26' , flexGrow: 1, width:'100%'}} >
      
      {/* First Box with Image and Two Columns in Second Row */}
      <Grid container xs={12}>
        <Grid container direction="row" >
          {/* First Row with Image */}
          <Grid item xs={12} sm={6} sx={{}}>
            
              <img
                src={phoneImg}
                alt="Example"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              
            
          </Grid>

          {/* Second Row with Two Columns */}
          <Grid container item xs={12} sm={6}>
            {/* First Column in Second Row */}
            {Titles.map(titleitem => (
              <Grid key={titleitem.id} item xs={6} sm={12}>
                <Box sx={{ height: '100%', backgroundColor: titleitem.color }}>
                  <Box sx={{ fontSize: '16px',padding: '10% 15%', display: 'flex', alignItems: 'flex-start', 
                    flexDirection: 'column' }}>
                      <Box style={ {lineHeight:'0px', color: 'text.main',fontFamily: 'Lato',fontSize:'auto', fontWeight: '300'}}>
                        <h2 >
                          {titleitem.title}
                        </h2>
                      </Box>
                    
                    <Button href="#" variant="outlined" color='success' endIcon={<ArrowRightAltIcon/>}>
                      {titleitem.name}
                    </Button>
                  </Box>
                    
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Second Box */}
      <Grid container xs={12} sx={{backgroundColor: 'secondary.main'}}>
        <Box sx={{margin: '30px 40px'}}>
          <Grid container>
            {CardGroup.map(carditem => (
                <Grid key={carditem.id} item sm={12} md={4} sx={{padding: 2.5}}>
                  <Card sx={{boxShadow: '0 0 5px 0 rgba(0, 0, 0, .6)', borderRadius: '5px', border: 'none', height: '100%' , background: 'none'}}>
                    <CardMedia
                      component="img"
                      height="140"
                      image = {carditem.src}
                      alt="green iguana"
                      sx={{width: 120, height: 120, margin: '55px auto 15px 20px'}}
                    />
                    <CardContent sx={{display: 'flex', flexDirection: 'column', alignContent: 'flex-start', alignItems: 'flex-start', textAlign: 'left'}}>
                      <Typography gutterBottom variant="h5" component="div">
                        {carditem.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {carditem.text}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            }
          </Grid>
        </Box>
      </Grid>
      {/* Third CardGroup Infinite*/}
      <Grid container xs={12} sx={{backgroundColor: 'secondary.main'}}>
        <Box sx={{textAlign:'center',width:'100%'}}>
          <Typography variant="h4" sx={{color:'white'}}>
            Infinite Possibilities
          </Typography>
        </Box>        
        <Box sx={{margin: '30px 40px'}}>
          <Grid container spacing={1}>
            <Grid container item lg={6} spacing={1} >
              <Grid container item sm={4} spacing={1} sx={{alignContent: "center"}} >
                  <LinkCard id = {0}/>
                  <LinkCard id = {1}/>
              </Grid>
              <Grid container item sm={4} spacing={1}>
                <LinkCard id = {2}/>
                <LinkCard id = {3}/>
                <LinkCard id = {4}/>
              </Grid>
              <Grid container item sm={4} spacing={1} sx={{alignContent: "center"}}>
                  <LinkCard id = {5}/>
                  <LinkCard id = {0}/>
              </Grid>
            </Grid>
            <Grid container item lg={6} spacing={1}>
              <Grid container item sm={4} spacing={0} sx={{alignContent: "center"}}>
                <LinkCard id = {5}/>
                <LinkCard id = {6}/>
              </Grid>
              <Grid container item sm={4} >
                <LinkCard id = {7}/>
                <LinkCard id = {8}/>
                <LinkCard id = {9}/>
              </Grid>
              <Grid container item sm={4} sx={{alignContent: "center"}}>
                <LinkCard id = {10}/>
                <LinkCard id = {11}/>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Divider  variant="middle" sx={{borderColor:(theme)=>theme.palette.info.main, ml:15,mr:15}}/>
      
      {/*Why QuickTutor? */}
      <Grid container xs={12} sx={{backgroundColor: 'secondary.main'}}>
        
        <Box sx={{margin: '30px 40px', width:'100%'}}>
          <Grid container spacing={5}>
            <Grid container item sm={6} md={6} lg={6}>
              <Card sx={{ background:'none',maxWidth: '100%' , boxShadow:'none'}}>
                <CardMedia
                  component="img"
                  height=""
                  image={FAQimg}
                  alt="green iguana"
                />
                <CardContent sx={{textAlign: 'left'}}>
                  <Typography gutterBottom variant="h5" component="div">
                    Frequently asked questions
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white' }}>
                    Support is just a tap away. We can also answer any questions you might have in our FAQ section.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button  sx={{textDecoration: 'none', // Default state
                                '&:hover': {
                                textDecoration: 'underline',}
                                 }}
                           href="#text-buttons" 
                           color='info'  
                           endIcon={<ArrowRightAltIcon />}>
                       Get help
                  </Button>
                    
                </CardActions>
              </Card>
            </Grid>
            
            <Grid container item sm={6}md={6} lg={6}>
              <Card sx={{background:'none',maxWidth: '100%' , boxShadow:'none' }}>
                  <CardMedia
                    component="img"
                    height=""
                    image={Whyimg}
                    alt="green iguana"
                  />
                  <CardContent sx={{textAlign: 'left'}}>
                    <Typography gutterBottom variant="h5" component="div">
                      Why QuickTutor?
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white' }}>
                      Turn your knowledge into dollars & become your own boss today.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button 
                        sx={{textDecoration: 'none', // Default state
                        '&:hover': {
                        textDecoration: 'underline',}
                        }}
                        href="#text-buttons"
                        color='info' 
                        endIcon={<ArrowRightAltIcon />}>
                          Learn more
                    </Button>
                  </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      
      <Grid container xs={12} sx={{backgroundColor: 'primary.main', padding:'0 40px'}}>
        <Grid item sm={9} >
          <Box sx={{display:'flex',flexDirection:'row',    justifyContent: 'space-between'}}>
            <LinkBox />
          </Box>
                      
        </Grid>
        <Grid item sm={3}>
          <Box>
          </Box>           
        </Grid>
      </Grid>
      <Divider  variant="middle" sx={{borderColor:(theme)=>theme.palette.info.main, ml:15,mr:15}}/>
      <Box sx={{    backgroundColor: 'primary.main',display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Box>
          <App_Google_Link/>
        </Box>
        <Box>
        
        </Box>
        <Box>
        
        </Box>
      </Box>
    </Box>
  );
}
export default  Content;