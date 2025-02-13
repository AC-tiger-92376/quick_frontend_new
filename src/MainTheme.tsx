import { createTheme } from '@mui/material/styles';

const MainTheme = createTheme({
  palette: {
    primary: {
      main: '#15151d',  // dark primary color
    },
    secondary: {
      main: '#1b1b26',  // main
    },
    text: {
      primary: '#fff',//white
      secondary: '#fa2',
    },
    info:{
      main: '#6462c9',//purple
    },
    success:{//Button Learn Teach
      main: '#6462c9',

    }

  },
});

export default MainTheme;