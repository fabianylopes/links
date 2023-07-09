import styled from "styled-components";

const Top = styled.div`
    width: 100vw;
    height: 68px;
    background-color: #C3CFD9;

    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
`

const Title = styled.p`
    color: #8c0c20;
    font-weight: 400;
    font-size: 24px;
    line-height: 40px;
    cursor: pointer;
`

export { Top, Title }