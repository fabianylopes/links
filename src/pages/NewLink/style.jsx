import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 14px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 14px;
`

const Input = styled.input`
    width: 250px;
    height: 35px;
    border: none;
    border-radius: 6px;
    padding: 5px;
    background-color: #000;

`

export { Container, Form, Input }