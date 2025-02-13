
import { Card, CardHeader,CardMedia } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
//import Avatar from '@mui/material/Avatar';
//import { red } from '@mui/material/colors';
import Link from "@mui/material/Link";
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
//import SideMenu from './Components/SideMenu'

//import InfiniteCards from "./InfiniteCards";

interface Card {
  id: number;
  title: string;
  img: string;
  icon: string;
  link: string;
}
const InfiniteCards:Card[] = [
  {id: 11, title: "The Arts",   img: "./src/assets/images/CardImage/11.png",    icon: "src/assets/images/CardIcon/11.png", link: "#"},
  {id: 12, title: "Technology", img: "./src/assets/images/CardImage/12.png",    icon: "src/assets/images/CardIcon/12.png", link: "#"},
  {id: 13, title: "Auto",       img: "./src/assets/images/CardImage/13.png",    icon: "src/assets/images/CardIcon/13.png", link: "#"},
  {id: 14, title: "Remedial",   img: "./src/assets/images/CardImage/14.png",    icon: "src/assets/images/CardIcon/14.png", link: "#"},
  {id: 15, title: "Academics",  img: "./src/assets/images/CardImage/15.png",    icon: "src/assets/images/CardIcon/15.png", link: "#"},
  {id: 16, title: "Trades",     img: "./src/assets/images/CardImage/16.png",    icon: "src/assets/images/CardIcon/16.png", link: "#"},

  {id: 21, title: "Sports & Games", img: "./src/assets/images/CardImage/21.png", icon: "src/assets/images/CardIcon/21.png", link: "#"},
  {id: 22, title: "Business",       img: "./src/assets/images/CardImage/22.png", icon: "src/assets/images/CardIcon/22.png", link: "#"},
  {id: 23, title: "Outdoors",       img: "./src/assets/images/CardImage/23.png", icon: "src/assets/images/CardIcon/23.png", link: "#"},
  {id: 24, title: "Languages",      img: "./src/assets/images/CardImage/24.png", icon: "src/assets/images/CardIcon/24.png", link: "#"},
  {id: 25, title: "LifeStyle",      img: "./src/assets/images/CardImage/25.png", icon: "src/assets/images/CardIcon/25.png", link: "#"},
  {id: 26, title: "Health",         img: "./src/assets/images/CardImage/26.png", icon: "src/assets/images/CardIcon/26.png", link: "#"},


] ; 
interface Props {
  id: number;
  
}

const LinkCard = ({id}:Props) => {
  return (
    <Grid container item xs={12} sm={12}  sx={{justifyContent: 'center' }} >
       <Box sx={{height:'100%',width:'85%'}}>
      <Link href="#"  underline="none">
        <Card sx={{ background:'none' }}>
          <CardMedia
            component="img"
            height="112"
            width= '140'
            image= {InfiniteCards[id].img}
            alt="Paella dish"
          />
          <CardHeader
            avatar={
              <Box sx={{ borderRadius: '50%', width: 40, height: 40, marginRight: 0, display: 'flex', 
              alignContent: 'center',
      justifyContent: 'center',
      border: '1px solid #6462c9'}}>
                <DesktopWindowsOutlinedIcon sx={{alignSelf:'center'}} />
              </Box>
            }
            title={InfiniteCards[id].title}/>
          
        </Card>
      </Link>
      </Box>           
    </Grid>
  )
}

export default LinkCard;