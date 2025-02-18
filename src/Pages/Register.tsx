import { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface FormData {
  username: string;
  email: string;
  password: string;
}

const Register = () => {
  const [formData, setFormData] = useState<FormData>({ username: "", email: "", password: "" });
  const navigate = useNavigate();
  
  const [statusMessage, setStatusMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    /*
    try {
      const response = await axios.post('https://127.0.0.1:8000/register', {
        to: "to",
        subject: "subject",
        text: "text",
        html: "htmlContent",
      });

      if (response.status === 200) {
        setStatusMessage('Email sent successfully!');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatusMessage('Failed to send email');
    }
  */

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/register`, formData);
      
        setStatusMessage(response.data);
    
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
    
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>Register</Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Username" name="username" margin="normal" onChange={handleChange} required />
          <TextField fullWidth label="Email" name="email" margin="normal" type="email" onChange={handleChange} required />
          <TextField fullWidth label="Password" name="password" margin="normal" type="password" onChange={handleChange} required />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Register</Button>
        </form>
        <p>{statusMessage}</p>
      </Box>
    </Container>
  );
};

export default Register;
