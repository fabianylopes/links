import styled from "styled-components";

const Top = styled.div`
    width: 100vw;
    height: 68px;
    background-color: #fff;

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
    color: rgb(47, 45, 45);;
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 40px;
    cursor: pointer;
    `

const H2 = styled.h2`
    color: rgb(47, 45, 45);
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 40px;
    cursor: pointer;
`

export { Top, Title, H2}