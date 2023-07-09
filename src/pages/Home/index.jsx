import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Title } from "./style"
import Navbar from "../../components/Navbar";
import Register from "../Register";

export default function Home(){
  const navigate = useNavigate();

  const [registered, setRegistered] = useState(true);

  return (
    <>
      <Navbar registered={registered} setRegistered={setRegistered}/>
      {registered ? 
      <div>
        <Title onClick={() => navigate('/links')}>Meus Links</Title>
        <Title onClick={() => navigate('/new-link')}>Cadastrar Link</Title>
      </div>
      : 
      <Register setRegistered={setRegistered}/>
      }
    </>
  )
}