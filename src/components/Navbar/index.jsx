import { useNavigate } from 'react-router-dom';

import { Top, Title } from "./style"

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Top>
      <Title onClick={() => navigate('/')}>Banco de Links</Title>
    </Top>
  )
}
