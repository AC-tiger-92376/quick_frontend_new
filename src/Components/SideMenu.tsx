//import React from "react";
//import './SideMenu.css'
//import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
//import Box from '@mui/material/Box';

import Drawer from '@mui/material/Drawer';
/*
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
*/

import LinkBox from './LinkBox';
//import { Menu, X } from "@mui/icons-material";
/*
interface SideContentItem {
  id: number;
  title: string;
  name1: string;
  name2: string;
  name3: string;
  name4: string;
};
interface ContentLinkItem {
  src_1: string;
  src_2: string;
  src_3: string;
  src_4: string;

};

const SideContent: SideContentItem[] = [
  {id:1, title : "About Us" , name1 : "Careers"       , name2 : "Contact Us"          , name3 : "FAQ"                     , name4 : "Why QuickTutor?"            , },
  {id:2, title : "Community", name1 : "Blog"          , name2 : "Community Guidelines", name3 : "User Safety"             , name4 : "Non-Discrimination Policy"  },
  {id:3, title : "Legal"    , name1 : "Privacy Policy", name2 : "Service Terms Of Use", name3 : "Paments Terms Of Service", name4 : "Independent Tutor Agreement"},
];
const ContentLink:ContentLinkItem[]=[
  {src_1: "#", src_2: '#', src_3: '#', src_4: '#'},
  {src_1: "#", src_2: '#', src_3: '#', src_4: '#'},
  {src_1: "#", src_2: '#', src_3: '#', src_4: '#'},
];
*/
 
interface SidemMenuProps {
    isshow: boolean;
  };
//type Anchor = 'right';

const SideMenu:React.FC<SidemMenuProps> = ({isshow}) => {
  //</SidemMenuProps>const// [isShow, setIsShow] = useState(false);
  //const [state, setState] = useState(true);
  /*
  const toggleDrawer =(open: boolean) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };
  
 interface propsitem{
  id:number
 }
 
   function  SideItem(props:propsitem)
   {
    return(
      <Box>
        <Box>
          <h2> {SideContent[props.id-1].title}</h2>
        </Box>
        <Box>
          <Box sx={{my:1}}>  
            <Link href = {ContentLink[props.id-1].src_1} underline="none" sx={{color: 'white'}}>
              {SideContent[props.id-1].name1}
            </Link>
          </Box>
          <Box sx={{my:1}}>
            <Link href = {ContentLink[props.id-1].src_2} underline="none" sx={{color: 'white'}}>
              {SideContent[props.id-1].name2}
            </Link>  
          </Box>
          <Box sx={{my:1}}>
            <Link href = {ContentLink[props.id-1].src_3} underline="none" sx={{color: 'white'}}>
              {SideContent[props.id-1].name3}
            </Link>  
          </Box>
          <Box sx={{my:1}}>
          <Link href = {ContentLink[props.id-1].src_4} underline="none" sx={{color: 'white'}}>
            {SideContent[props.id-1].name4}
          </Link>        
          </Box>
        </Box>
      </Box>
    )
   }
   */
  return (
    <Box  >
    {//<Button onClick={toggleDrawer(true)}>right</Button>
    }
      <Drawer
            anchor='right'
            open={isshow}
            //onClose={toggleDrawer( true)}
            hideBackdrop={true}
            
            ModalProps={{
              disableScrollLock: true, // Allow scrolling while the Drawer is open
            }}
            sx={{zIndex: '9!important'}}
          >
            <Box></Box>
          
           <Box
                sx={{ pl:5, pt:15,width: 250, backgroundColor: (theme) => theme.palette.secondary.main,   }}
                //role="presentation"
                //onClick={toggleDrawer(true)}
                //onKeyDown={toggleDrawer(true)}  
                >
                {
                  /*
                  SideContent.map((sideitem:SideContentItem)=>(
                    <Box key={sideitem.id}>
                      <SideItem   id={sideitem.id}/>
                    </Box>
                  ))
                  */}
                <LinkBox />
                <Box>
                  
                </Box>
                
              </Box>
          </Drawer>
    </Box>
  );
  
};

export default SideMenu;