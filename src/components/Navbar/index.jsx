import { useNavigate } from 'react-router-dom';

import { Top, Title, H2 } from "./style"

export default function Navbar({registered, setRegistered}) {
  const navigate = useNavigate();

  if(registered){
    return (
      <Top>
        <Title onClick={() => navigate('/')}>Banco de Links</Title>
        <H2 onClick={() => setRegistered(false)}>Sair</H2>
      </Top>
    );
  }

  return (
    <Top>
      <Title onClick={() => navigate('/')}>Banco de Links</Title>
    </Top>
  );
  
}
