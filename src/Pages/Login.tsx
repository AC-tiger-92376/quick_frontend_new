import { useState } from "react";
import { Container, TextField, Card, CardContent, Button, Typography, Box } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<FormData>({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/login`, formData);
      localStorage.setItem("token", res.data.access_token);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <Container  sx={{paddingTop: 15, display: 'flex', justifyContent: 'center'}}>
        <Card sx={{ maxWidth: 400 }}>
          <CardContent>
      <Box sx={{ mt: 5, textAlign: "center" }}>
        
        <Typography variant="h4" gutterBottom>Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Email" name="email" margin="normal" type="email" onChange={handleChange} required />
          <TextField fullWidth label="Password" name="password" margin="normal" type="password" onChange={handleChange} required />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Login</Button>
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={() => navigate("/register")}>Register</Button>
        </form>
      </Box>
    
      </CardContent>
    </Card>
    </Container>
  );
};

export default Login;
