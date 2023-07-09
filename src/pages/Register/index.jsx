import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import { Container, Form, Input } from "./style";
import api from "../../services/api";

export default function Register({ registered, setRegistered }){
    const navigate = useNavigate();

    const [userData, setUserData] = useState({});

    function handleRegister(e){
      e.preventDefault();
      api.register(userData).then(handleSuccess).catch((error) => console.log(error));
    }

    function handleSuccess(){
      setRegistered(!registered);
      navigate('/')
    }

    return (
        <Container>
            <Form onSubmit={handleRegister}>
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

              <button type="submit">Entrar</button>
            </Form>
        </Container>
      );
}