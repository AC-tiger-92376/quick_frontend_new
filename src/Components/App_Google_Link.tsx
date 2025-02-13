import downimg from '../assets/images/download@1x.svg';
import googleimg from '../assets/images/google-play-badge.svg';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';


function App_Google_Link(){
    return(
        <Box sx={{display: "flex",
                      flexDirection: 'row',
                      justifyContent: 'center'}}>
                <Box sx={{borderRadius: '4px', width: '167px', height: '73px',}}>
                    <Link>
                    <img
                        src={downimg}
                        alt="Example"
                        style={{     paddingBottom: '4px',
                         width:'100%', height: '100%'}}
                    />
                    </Link>
                </Box>
                <Box sx={{borderRadius: '4px', width: '167px', height: '73px',}}>
                    <Link>
                    <img
                        src={googleimg}
                        alt="Example"
                        style={{ width:'100%', height: '100%'}}
                    />
                    </Link>
                </Box>
              </Box>
    )
}
export default App_Google_Link;