import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from 'react';

import { Title } from "../Links/style";
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
      <>
        <h2>Você ainda não tem nenhum link cadastrado</h2>
        <button onClick={()=> navigate("/new-link")}>Cadastrar Link</button>
      </>
    )
  }

  return (
    <>
      <h2>Meus Links</h2>
      {links.map((l) => {
        return(
          <Link key={l.id} to={l.link} target="_blank">
            <Title>{l.title}</Title>
          </Link>
        )
      })}
      <button onClick={()=> navigate("/new-link")}>Cadastrar Link</button>
    </>
  )
}
