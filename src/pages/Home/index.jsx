import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Register from "../Register";
import { Title } from "./style"

export default function Home(){
  const navigate = useNavigate();

  const [registered, setRegistered] = useState(true);
  //const [user, setUser] = useState('');


  return (
    <>
      <Navbar />
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