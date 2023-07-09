import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 14px;
`

const Title = styled.a`
  cursor: pointer;
`

const Button = styled.button`
  width: 150px;
  height: 26px;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 14px;
  background-color: rgba(24, 119, 242, 1);;
  cursor: pointer;
  transition: border-color 0.25s;
  display: flex;
  align-items: center;
  justify-content: center;
`

export { Container, Title, Button }