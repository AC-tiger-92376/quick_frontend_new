import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

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
   

function LinkBox(){
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
    
    
    return(
        <>
        {
                  
            SideContent.map((sideitem:SideContentItem)=>(
              <Box key={sideitem.id}>
                <SideItem   id={sideitem.id}/>
              </Box>
            ))
            
          }
          </>  
    )
}
export default LinkBox;