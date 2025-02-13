import { useState, useEffect } from 'react';
//import { useNavigate } from "react-router-dom";

import {AppBar, Box, Toolbar, IconButton, 
    Typography, Avatar, Link, Button, 
    Popper, ClickAwayListener, Card,
    CardContent, Divider} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
//import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import quicklink from '../assets/images/quick.svg'
import quicklinkScrolled from '../assets/images/quick-scrolled.svg'
import UserData from '../Pages/UserData';
//import { useTheme } from '@mui/material/styles';




interface NavBarProps {
    showsidemenu: boolean;
    onValueChange: (newValue: boolean) => void;
    onSignOut:(sign:boolean) => void;
    userdata: UserData;
  }
const NavBar:React.FC<NavBarProps> = ({showsidemenu,onValueChange, onSignOut,userdata})=> {
    //const [quickimg,setQuickimg] = useState(quicklink);
    const [isScrolled, setIsScrolled] = useState(false);
   // const [openTooltip, setOpenTooltip] = useState(false);
    //const navigate = useNavigate();
    
    //const scrollPosition:boolean = false;
    //const [scrollPosition, setScrollPosition] = useState<boolean>(false);
    const handleScroll = () => {
        if (window.scrollY > 5) {
            setIsScrolled(true); // If scrolled more than 50px, make navbar non-transparent
        } else {
            setIsScrolled(false); // Revert to transparent when scrolled back to top
        }
    };
    useEffect(() => {
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleClickAway = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "avatar-popper" : undefined;
   
    function AccountModal(){
        return(
            <Card sx={{width: 320, p: 2, boxShadow: 3,  }} >
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <Typography variant="h6" color="secondary">
                    Microsoft
                    </Typography>
                    <Button onClick={()=>onSignOut(true)} size="small" color="info">
                    Sign out
                    </Button>
                </Box>
    
                <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" mb={2}>
                    <Avatar sx={{ width: 80, height: 80, bgcolor: "#002050" }}>AC</Avatar>
                    <Typography variant="h6" fontWeight={600} mt={1}color="info.main">
                    {userdata.username}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {userdata.email}
                    </Typography>
                </Box>
    
                <CardContent>
                    <Typography variant="body1" color="primary" sx={{ cursor: "pointer" }}>
                    My Microsoft account
                    </Typography>
                    <Typography variant="body1" color="primary" sx={{ cursor: "pointer" }}>
                    My profile
                    </Typography>
                </CardContent>
    
                <Divider sx={{ my: 2 }} />
                {/*}
                <Box display="flex" alignItems="center" justifyContent="center" p={1} sx={{ cursor: "pointer", bgcolor: "#16161b", borderRadius: 1 }}>
                <Button onClick={()=>onSignOut(false)} size="small" color="info">
                    <AddCircleOutlineIcon sx={{ mr: 1 }} />
                    <Typography variant="body1">Sign in with a different account</Typography>
                </Button>
                    
                </Box>
        */}
            </Card>
        )
    }
    //const bgcolor = useTheme();
  return (
    <Box  >
      <AppBar position="fixed" sx={{background: showsidemenu||isScrolled? '': 'none',boxShadow: showsidemenu||isScrolled?'':'none'}}>
        <Toolbar sx={{height: 105,justifyContent: "space-between" }}>
            <Box sx={{display:"flex", alignItems:"center"}}>
                <Link href="#" underline="none">
                    <Box
                        component="img" sx={{ width: 180, height: 100,}}
                        src= {showsidemenu||isScrolled?quicklinkScrolled:quicklink}
                        alt="Custom Image"
                        />
                </Link>
                <Link href="#" color = 'text.primary' underline="none" variant='h6' sx={{ml:6,mr:3}}>
                    Learn
                </Link>
                <Link href="#" color = 'text.primary' underline="none" variant='h6' sx={{ml:2,mr:10}}>
                    Teach
                </Link>
            </Box>
            
            <Box sx={{ display : 'flex'}}>
                <Box>
                    {/*
                    <Tooltip
                        open={openTooltip} // Control tooltip visibility manually
                        onClose={() => setOpenTooltip(false)} // Close tooltip when it loses focus
                        onOpen={() => setOpenTooltip(true)} // Open tooltip on hover
                        
                        title={
                        <Box sx={{ backgroundColor: 'white', borderColor: 'white',display: 'flex', alignItems: 'center', gap: 1 , }}>
                            <Button  href="#" color="primary">
                                <img src={applelink}/>
                            </Button>
                            <Divider orientation="vertical" flexItem sx={{ height: 28 }} />
                            <Button href="#" color="secondary">
                                <img src={googlelink}/>
                            </Button>
                        </Box>
                        }
                        arrow // Optional: shows an arrow on the tooltip
                    >
                         Button which will trigger the tooltip 
                        <Button sx={{ display: showsidemenu||isScrolled?'unset':'none',width: 135, height: 47, borderRadius: 23.5, bgcolor: 'info.main',
                            }} variant="contained">Get the App</Button>
                    </Tooltip>
                    */}
                    <IconButton onClick={handleClick} color="inherit">
                        <Avatar />
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        //aria-label="open drawer"
                        sx={{ right:15, ml:5 }}
                        onClick={() => onValueChange(!showsidemenu)}>

                    {showsidemenu?<CloseIcon/>:<MenuIcon />}
                    
                    </IconButton>
                </Box>
            </Box>                  
        </Toolbar>
      </AppBar>
      <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-start" disablePortal sx={{zIndex:10}}>
        <ClickAwayListener onClickAway={handleClickAway}>
          {/*
          <Paper sx={{ p: 2, mt: 1, width: 200, textAlign: "center" }}>
            <Typography variant="h6" mb={2}>Sign In / Sign Up</Typography>
            <Button variant="contained" color="primary" fullWidth sx={{ mb: 2 }}>
              Sign In
            </Button>
            <Button variant="outlined" color="primary" fullWidth>
              Sign Up
            </Button>
          </Paper>
           */}
           <AccountModal />
        </ClickAwayListener>
      </Popper>
    </Box>
  );
}
export default NavBar;
