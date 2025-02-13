import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { ThemeProvider } from '@mui/material/styles';

import '../App.css'
import NavBar from '../Components/NavBar'
import MainTheme from '../MainTheme'
import Content from '../Components/Content';
import SideMenu from '../Components/SideMenu';
import UserData from './UserData';


function Start() {
  //
  const [userData, setUser] = useState<UserData>({username: "",email:"", password:""});
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); 
  const [isShowSideMenu, SetisShowSideMenu] = useState<boolean>(false);


  useEffect(() => {
    const fetchUser = async () => {
      //const token = sessionStorage.getItem("token");
      //console.log(token);
      if (!token) {
        navigate("/");
        return;
      }
      try {
        const res = await axios.get("http://localhost:5000/api/auth/user", {
          headers: { Authorization: `Bearer ${token}` }, 
        });
        //if (!res.ok) throw new Error("Unauthorized");
        setUser(res.data);
      } catch (error) {
        localStorage.removeItem("token");
        navigate("/");
      }
    };
   
      fetchUser();
    
    //fetchUser();
  }, [token]);

  const handleValueChange = (newValue: boolean) => {
    SetisShowSideMenu(newValue);
  };
   
  function SignOut(value:boolean)
  {
    if(value) localStorage.removeItem("token");
    
    navigate('/');
  }
  return (
    <ThemeProvider theme={MainTheme}>
      <NavBar  userdata = {userData} showsidemenu={isShowSideMenu} onValueChange={handleValueChange} onSignOut={SignOut}/>
      <SideMenu isshow={isShowSideMenu} />
      <Content />       
    </ThemeProvider>
  )
}

export default Start;
