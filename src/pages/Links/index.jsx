import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from 'react';

import { Container, Title, Button } from "../Links/style";
import Navbar from "../../components/Navbar";
import api from "../../services/api";

export default function Links() {
  const navigate = useNavigate();

  const [links, setLinks] = useState([]);

  useEffect(() => getLinks, []);

  function getLinks(){
    api.getLinks().then((response) => setLinks(response.data))
  }

  if(links.length === 0){
    return (
      <Container>
        <Navbar />
        <h2>Você ainda não tem nenhum link cadastrado</h2>
        <Button onClick={()=> navigate("/new-link")}>Cadastrar Link</Button>
      </Container>
    )
  }

  return (
    <>
      <Navbar />
      <h2>Meus Links</h2>
      <Container>
        {links.map((l) => {
          return(
            <Link key={l.id} to={l.link} target="_blank">
              <Title>{l.title}</Title>
            </Link>
          );
        })}
        <Button onClick={()=> navigate("/new-link")}>Cadastrar Link</Button>
      </Container>
    </>
  )
}
