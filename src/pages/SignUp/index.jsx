import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import { Container, Form, Input, Button, Link } from "./style";
import api from "../../services/api";

export default function SignUp(){
    const navigate = useNavigate();

    const [userData, setUserData] = useState({});

    function handleSignUp(e){
      e.preventDefault();
      api.signUp(userData).then(() => navigate('/sign-in')).catch(handleFailure);
    }
  
    function handleFailure(error){
      alert(`${error}!\nPreencha os campos corretamente!`);
      setUserData({});
    }

    return (
        <Container>
            <Form onSubmit={handleSignUp}>
              <Input 
              type="text"
              placeholder="Name"
              value={userData.name || ''}
              onChange={e => setUserData({...userData, name: e.target.value})}
              required
              >
              </Input>
    
              <Input
              type="email" 
              placeholder="E-mail" 
              value={userData.email || ''}
              onChange={e => setUserData({...userData, email: e.target.value})}
              >
              </Input>
    
              <Input
              type="password"
              placeholder="Password"
              value={userData.password || ''}
              onChange={e => setUserData({...userData, password: e.target.value})}
              >
              </Input>

              <Button type="submit">Sign Up</Button>
            </Form>
            <Link onClick={() => navigate('/sign-in')}>Already User? Sign In</Link>
        </Container>
      );
}