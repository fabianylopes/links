import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import { Container, Form, Input, Button, Link } from "./style";


export default function SignIn() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({});


  function handleSignIn(e){
    e.preventDefault();
    navigate('/');

    //api.signIn(loginData).then(handleSuccess).catch(handleFailure);
  }
  
/*   function handleSuccess(response){


    navigate('/lands');
    
  }

  function handleFailure(error){
    alert(`${error}!\nPreencha os campos corretamente!`);
    setLoginData({});
  } */

  return (
    <Container>
      <Form onSubmit={handleSignIn}>

          <Input 
          type="text" 
          placeholder="E-mail"
          value={loginData.email || ''}
          onChange={e => setLoginData({...loginData, email: e.target.value})}
          required
          >
          </Input>

          <Input 
          type="password" 
          placeholder="Password"
          value={loginData.password || ''}
          onChange={e => setLoginData({...loginData, password: e.target.value})}
          required
          >         
          </Input>

          <Button type="submit">Sign In</Button>
        </Form>

        <Link onClick={() => navigate('/sign-up')}>Not an User? Create account</Link>
    </Container>
  );
}