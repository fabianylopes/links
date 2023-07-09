import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import { Container, Form, Input, Button } from "./style";
import api from "../../services/api";


export default function NewLink() {
  const navigate = useNavigate();

  const [linkInfo, setLinkInfo] = useState({});

  
  function saveLink(e){
    e.preventDefault();

    api.insertLink(linkInfo).then(() => navigate('/links')).catch(handleFailure);
  }

  function handleFailure(error){
    alert(`${error}!\nPreencha os campos corretamente!`);
    setLinkInfo({});
  }

  return (
    <Container>
      <h2>Cadastrar Novo Link</h2>
      <Form onSubmit={saveLink}>

        <Input 
        type="text" 
        placeholder="Title"
        value={linkInfo.title || ''}
        onChange={e => setLinkInfo({...linkInfo, title: e.target.value})}
        required
        >
        </Input>

        <Input 
        type="text" 
        placeholder="Link"
        value={linkInfo.link || ''}
        onChange={e => setLinkInfo({...linkInfo, link: e.target.value})}
        required
        >         
        </Input>

        <Button type="submit">Save</Button>
      </Form>

    </Container>
  )
}
