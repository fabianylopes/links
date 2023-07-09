import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import { Container, Form, Input } from "./style";
import api from "../../services/api";
import Navbar from "../../components/Navbar";

export default function NewLink() {
  const navigate = useNavigate();

  const [linkInfo, setLinkInfo] = useState({});
  
  function saveLink(e){
    e.preventDefault();

    api.insertLink(linkInfo).then(() => navigate('/links')).catch((error) => console.log(error));
  }

  return (
    <>
      <Navbar />
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

          <button type="submit">Save</button>
        </Form>

      </Container>
    </>
  );
}
